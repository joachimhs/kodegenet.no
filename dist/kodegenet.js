if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) == str;
    };
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (str){
        return this.slice(-str.length) === str;
    };
}
var Kodegenet = Ember.Application.create({
    ready: function() {
        this.register('session:setting', Kodegenet.SettingController, {singleton: true});
        this.register('session:session', Kodegenet.SessionController, {singleton: true});
        this.inject('controller', 'settings', 'session:setting');
        this.inject('controller', 'session', 'session:session');
        this.inject('controller:setting', 'store', 'store:main');
    },

    createCookie: function(name, value, days) {
        var expires = null;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    },

    readCookie:function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    eraseCookie:function (name) {
        this.createCookie(name, "", -1);
    }
});

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Kodegenet.Adapter = DS.RESTAdapter.extend();

Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');
Ember.Inflector.inflector.irregular('productCategory', 'productCategories');
Ember.Inflector.inflector.irregular('figur', 'figurer');

Kodegenet.ApplicationStore = DS.Store.extend({
    adapter:  "Kodegenet.Adapter"
});

Kodegenet.UpdateAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.PageAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.SettingAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.EventAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ProductCategoryAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ProductAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.TrackAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.FigurAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.CourseAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ChapterAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.SubchapterAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ShoppingCartAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.CartProductAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.UserAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.OrderAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.InstagramPhotoAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.EventParticipantAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.EventAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.ApplicationController = Ember.ObjectController.extend({
    sortProperties: ['publishedDate'],
    sortAscending: false,

    init: function() {
        console.log('Application Controller init');

        var controller = this;

        this.store.find('setting').then(function(data) {
            console.log(data.content);
            data.content.forEach(function(setting) {
                console.log(setting);
                var id = setting.id;
                var value = setting._data.settingsValue;

                console.log(id + " ::: " + value);
                controller.settings.set(setting.id,  value);
            });
        });

        this.reuseOrGenerateNewSession();
    },

    actions: {
        acceptCookies: function() {

            $.ajax({
                type: 'POST',
                url: '/kodegenet/acceptCookies',
                success: function(res, status, xhr) {

                },
                error: function(xhr, status, err) {

                }

            });
        },

        doLogOut: function() {
            var self = this;
            $.ajax({
                type: 'POST',
                url: '/kodegenet/auth/logout',

                success: function (res, status, xhr) {
                    Kodegenet.eraseCookie("uuid");
                    self.set('session.session', null);
                    self.set('session.shoppingCart', null);
                }
            });
        }
    },

    reuseOrGenerateNewSession: function() {
        var self = this;

        $.ajax({
            type: 'POST',
            url: '/kodegenet/createSession',

            success: function(res, status, xhr) {
                console.log(res.session.id);
                //if (res.session.authenticated === true) {
                    Kodegenet.createCookie("uuid", res.session.id, 10);
                    console.log('accepts cookies:');
                    console.log(res.session.acceptedCookies);

                    var payload = res.session;
                    var sessionObject = self.store.push('session', payload);
                    self.set('session.session', sessionObject);

                    //self.set('controller.session.acceptedCookies', res.session.acceptedCookies === true );

                    self.store.find('shoppingCart', res.session.id).then(function(data) {
                        self.set('session.shoppingCart', data);
                    });
                //}
            },
            error: function(xhr, status, err) { console.log("error: " + status + " error: " + err); }
        });
    },

    coursesObserver: function() {
        if (this.get('model.courses')) {
            var sortedCourses = Em.ArrayProxy.createWithMixins(
                Ember.SortableMixin,
                { content:this.get('model.courses'), sortProperties: ['sortIndex'], sortAscending: true }
            );

            this.set('model.sortedCourses', sortedCourses);
        }
    }.observes('model.courses'),

    tracksObserver: function() {
        if (this.get('model.tracks')) {
            var sortedTracks= Em.ArrayProxy.createWithMixins(
                Ember.SortableMixin,
                { content:this.get('model.tracks'), sortProperties: ['sortIndex'], sortAscending: true }
            );

            this.set('model.sortedTracks', sortedTracks);
        }
    }.observes('model.tracks'),

    sortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'] }
        );

        return sortedResult;
    }.property('events.@each.date'),

    futureEvents: function() {
        var events = [];

        this.get('sortedEvents').forEach(function(event) {
            if (event.get('isInFuture') && event.get('isVisible')) {
                events.pushObject(event);
            }
        });

        return events;
    }.property('sortedEvents')
});
Kodegenet.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            updates: this.store.find('update'),
            events: this.store.find('event'),
            courses: this.store.find('course'),
            tracks: this.store.find('track')
        });
    }
});
Kodegenet.BlurTextFieldComponent = Ember.Component.extend({
    tagName: 'input',
    classNames: ['ember-text-field'],
    attributeBindings: ['type', 'value', 'size', 'pattern', 'name', 'min', 'max',
        'accept', 'autocomplete', 'autosave', 'formaction',
        'formenctype', 'formmethod', 'formnovalidate', 'formtarget',
        'height', 'inputmode', 'list', 'multiple', 'pattern', 'step',
        'width'],

    type: "text",

    focusOut: function(event) {
        console.log('<<<<focusOut>>>>>');
        this.sendAction('changedValue');
        console.log(event);
    },

    onBlur: function(event) {
        console.log('<<<<onBlur>>>>>');
        console.log(event);
    }
});
Kodegenet.BrukerInfoComponent = Ember.Component.extend({
    emailAddress: "",
    givenName: "",
    surname: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    emailAddressIsInvalid: false,

    actions: {
        emailFocusOut: function() {
            console.log('email focus out!');
            var emailPatternValid = this.validateEmail(this.get('loginEmailAddress'));

            if (emailPatternValid) {
                this.set('emailAddressIsInvalid', false);
            } else {
                this.set('emailAddressIsInvalid', true);
            }
        },

        registrerKonto: function() {
            console.log('bruker-info registrerKonto');
            var user = {
                id: this.get('loginEmailAddress'),
                givenName: this.get('givenName'),
                surname: this.get('surname'),
                address: this.get('address'),
                postalCode: this.get('postalCode'),
                city: this.get('city'),
                phone: this.get('phone'),
                email: this.get('loginEmailAddress')
            };

            this.sendAction('registrerKonto', user);
        }
    },

    validateEmail: function(email) {
        var pattern = /^[a-zA-Z_0-9\-\.]+@[a-zA-Z_0-9\-\.]+?\.[a-zA-Z]{2,4}$/;
        if (email) {
            return email.match(pattern);
        }

        return false;
    }
});
Kodegenet.FacebookFollowComponent = Ember.Component.extend({
    /*classNames: ['fb-follow', 'pull-right'],
    attributeBindings: ['dataHref:data-href', "dataLayout:data-layout", "dataColorscheme:data-colorscheme", "dataShowFaces:data-show-faces"],
    dataHref: "https://www.facebook.com/LambertseterKodeklubb",
    dataColorscheme: "light",
    dataLayout: 'standard',
    dataShowFaces: 'true',
    dataKidDirectedSite: "true",

    didInsertElement: function() {
        var self = this;

        console.log('didInsertElement: Like Buttons:' + this.get('currentPath'));
        //Ember.run.schedule('afterRender', this.rerender());
    },

    setupFbLike: function(){
        FB.XFBML.parse();
    }.on('didInsertElement')

    //<div class="fb-follow"  data-colorscheme="light" data-layout="standard" data-show-faces="true"></div>
    */
});
Kodegenet.NumberTextField = Ember.TextField.extend({

    // implementation of this function, see http://stackoverflow.com/a/995193/65542
    keyDown: function(event) {
        // Allow: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
                // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    }
});
Kodegenet.RenderSubchapterComponent = Ember.Component.extend({

});
Kodegenet.ShoppingCartComponent = Ember.Component.extend({
    showShippingDetails: false,

    emailAddress: "",
    givenName: "",
    surname: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",

    createAccount: true,
    fullNameValid: false,

    didInsertElement: function() {
        var elementId = this.get('elementId');
        var self = this;

        var stripeHandler = StripeCheckout.configure({
            key: 'pk_test_khGORg8E5K6jf1qVbnlkzvy1',
            image: '/square-image.png',
            token: function(token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
                console.log("<<<<<TOKEN>>>>>");
                console.log(token);

                var postContent = {
                    stripeToken: token.id,
                    stripeTokenType: token.type,
                    stripeEmail: token.email
                };

                $.ajax({
                    type: 'POST',
                    url: '/kodegenet/stripePayment',
                    data: JSON.stringify(postContent),

                    success: function(res, status, xhr) {
                        console.log("SUCCESSFUL PURCHASE!!!!");
                        console.log(res);

                        self.get('cart').reload();

                        if (res.status === "success" && res.orderId) {
                            self.sendAction("orderSuccess", res.orderId);
                        }


                    },
                    error: function(xhr, status, err) { console.log("error: " + status + " error: " + err); }
                });

            }
        });

        this.set('stripeHandler', stripeHandler);

        Ember.run.schedule('afterRender', function() {
            $("#" + elementId).hide().slideDown();
        });

    },

    willDestroyElement: function ()
    {
        if (this.get('stripeHandler')) {
            this.get('stripeHandler').close();
        }

        var clone = this.$().clone();
        this.$().parent().parent().append(clone);
        clone.slideUp();
    },

    actions: {
        increaseAmount: function(cartProduct) {
            cartProduct.set('orderedProductNumber', parseInt(cartProduct.get('orderedProductNumber')) + 1);
            cartProduct.save();
        },

        decreaseAmount: function(cartProduct) {
            cartProduct.set('orderedProductNumber', parseInt(cartProduct.get('orderedProductNumber')) - 1);
            cartProduct.save();
        },

        triggerStripePurchase: function() {
            console.log("TRIGGERING PURCHASE!!");
            var self = this;

            var cart = this.get('cart');
            cart.set('emailAddress', this.get('emailAddress'));
            cart.set('givenName', this.get('givenName'));
            cart.set('surname', this.get('surname'));
            cart.set('address', this.get('address'));
            cart.set('postalCode', this.get('postalCode'));
            cart.set('city', this.get('city'));
            cart.set('phone', this.get('phone'));
            cart.set('createAccount', this.get('createAccount'));

            console.log(cart);
            cart.save().then(function(data) {
                var handler = self.get('stripeHandler');
                console.log("Handling stripe: " + handler);

                if (handler) {
                    handler.open({
                        name: 'Stripe.com',
                        description: self.get('description'),
                        amount: self.get('cart.subtotal') * 100,
                        email: self.get('emailAddress'),
                        currency: 'nok'
                    });
                }
            }, function(err) {
                console.log("ERROR");
                console.log(err);
            });
        },

        doShowCollectShippingDetails: function() {
            this.set('showShippingDetails', true);
            Ember.run.schedule('afterRender', function() {
                $(".cart-shipping-details").first().hide().slideDown();
            });
        },

        emailAddressEntered: function() {
            console.log("Email Blurred!");
        },

        /* form input handling */
        emailFocusOut: function() {
            this.set('emailEntered', true);
            this.set('emailTyping', false);
        },

        emailKeyDown: function() {
            this.set('emailEntered', false);
            this.set('emailTyping', true);
        }
        /* // form input handling */
    },

    emailAddressIsInvalid: function() {
        if (this.get('emailEntered') && this.get('emailAddress')) {
            return !this.validateEmail(this.get('emailAddress'));
        }

        return this.get('emailEntered');
    }.property('emailAddress', 'emailEntered'),

    validateEmail: function(email) {
        var pattern = /^\w+@[a-zA-Z_0-9\-]+?\.[a-zA-Z]{2,4}$/;
        if (email) {
            return email.match(pattern);
        }

        return false;
    },

    description: function() {
        return "Kodegnet " + this.get('cart.numProducts') + " produkter";
    }.property('cart.numProducts'),

    shippingDetailsCollected: function() {
        return this.validateEmail(this.get('emailAddress')) &&
            this.get('givenName.length') >= 2 &&
            this.get('surname.length') >= 2 &&
            this.get('address.length') >= 2 &&
            this.get('postalCode.length') >= 4 &&
            this.get('phone.length') >= 4 &&
            this.get('city.length') > 2;
    }.property('emailAddressIsInvalid', 'givenName', 'surname', 'address', 'postalCode', 'city', 'phone')
});
Kodegenet.SocialButtonsComponent = Ember.Component.extend({
    classNames: ['fb-like'],
    attributeBindings: ['dataHref:data-href', "dataLayout:data-layout", "dataAction:data-action", "dataShowFaces:data-show-faces", "dataShare:data-share", "dataKidDirectedSite:data-kid-directed-site", "dataRef:data-ref"],
    dataHref: window.location.href,
    dataLayout: 'button',
    dataAction: 'like',
    dataShowFaces: 'true',
    dataShare: 'true',
    dataKidDirectedSite: "true",
    dataRef: "kodegenet_fb_referral",

    didInsertElement: function() {
        var self = this;

        console.log('didInsertElement: Social Buttons:' + this.get('currentPath'));
        //Ember.run.schedule('afterRender', this.rerender());
    },

    setupFbLike: function(){
        FB.XFBML.parse();
    }.on('didInsertElement'),

    currentPathObserver: function() {
        var self  = this;

        Ember.run.later(function() {
            console.log('New URL: ' + window.location.href);
            self.set('dataHref', window.location.href);
            self.rerender();
        }, 500);
    }.observes('model')

    //<div class="fb-like" data-href="/" data-layout="button" data-action="" data-show-faces="" data-share="true"></div>
});


Kodegenet.StripePaymentButtonComponent = Ember.Component.extend({
    stripeEnabled: false,

    didInsertElement: function() {
        if (!this.get('stripeEnabled')) {
            console.log('rerendering');
            this.set('stripeEnabled', true);
            this.rerender();
        }
    }
});
Kodegenet.ValidatingTextfieldComponent = Ember.TextField.extend({
    valueEntered: false,
    valueTyping: false,

    focusOut: function() {
        this.set('valueEntered', true);
        this.set('valueTyping', false);
    },

    keyDown: function() {
        this.set('valueEntered', false);
        this.set('valueTyping', true);
    },

    valueValidObserver: function() {
        var valid = false;

        if (this.get('minLength') && this.get('valueEntered') === true) {
            valid = this.get('value.length') >= this.get('minLength');
        } else {
            valid = true;
        }

        this.set('valueValid', valid);
    }.observes('valueEntered', 'value', 'minLength').on('init')

});
Kodegenet.VimeoPlayerComponent = Ember.Component.extend({
    tagName: 'iframe',
    classNames: ['small-vimeo-player'],
    attributeBindings: ['src', 'width', 'height', 'frameborder', 'webkitallowfullscreen', 'mozallowfullscreen', 'allowfullscreen'],
    width: 250,
    height: 140,
    frameborder: true,
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true,

    src: function() {
        if (this.get('vimeoid')) {
            return "//player.vimeo.com/video/" + this.get('vimeoid');
        }
    }.property('vimeoid')
});
Kodegenet.ChapterController = Ember.ObjectController.extend({
    /*queryParams: ['oppgave'],

    oppgaveObserver: function() {
        var oppgave = this.get('oppgave');

        console.log('Oppgave: ') ;
        console.log(this.get('oppgave'));


        if (oppgave) {
            var controller = this;
            setTimeout(function() {
                Ember.run.schedule('afterRender', this, function(){
                    console.log('scrolling in after render');
                    controller.scrollToSubchapter(oppgave);
                }, 1);
            }, 1000);
        }
    }.observes('oppgave'),

    scrollToSubchapter: function(subchapter) {
        this.set('selectedSubchapter', subchapter);
        //this.hidePopovers();

        var anchor = subchapter;

        console.log('scrolling to subchapter: ' + subchapter);
        console.log(anchor);

        if (anchor) {
            var elem = $('#' + anchor);
            if (elem && elem.offset()) {
                $('body').scrollTop(elem.offset().top - 60);
            }
        }
    }*/
});
Kodegenet.ChapterIndexController = Ember.ObjectController.extend({
    actions: {
        visAlleOppgaverAction: function() {
            this.set('visAlleOppgaver', true);
        },

        skjulAlleOppgaverAction: function() {
            this.set('visAlleOppgaver', false);
        },

        visSlidesAction: function() {
            this.set('visSlides', true);
        },

        skjulSlidesAction: function() {
            this.set('visSlides', false);
        }
    }
});
Kodegenet.ChapterIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('chapter');
    }
});
Kodegenet.ChapterRoute = Ember.Route.extend({
    model: function(chapter) {
        return this.store.find('chapter', chapter.chapter_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/chapter/' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});
Kodegenet.ChapterOppgaveController = Ember.ObjectController.extend({

});
Kodegenet.ChapterOppgaveRoute = Ember.Route.extend({
    model: function(oppgave) {
        console.log('ChapterOppgaveRoute: ');
        console.log(oppgave);
        return this.store.find('oppgave', oppgave.oppgave_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/oppgave' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});
Kodegenet.CourseController = Ember.ObjectController.extend({
    needs: ['chapter','courses','chapterOppgave', 'application'],

    coursePopoverShowing: false,
    chapterPopoverShowing: false,
    subchapterPopoverShowing: false,

    actions: {
        toggleCoursePopover: function() {
            this.set('chapterPopoverShowing', false);
            this.set('subchapterPopoverShowing', false);
            this.toggleProperty('coursePopoverShowing');
        },

        toggleChapterPopover: function() {
            this.set('coursePopoverShowing', false);
            this.set('subchapterPopoverShowing', false);
            this.toggleProperty('chapterPopoverShowing');
        },

        toggleSubchapterPopover: function() {
            this.set('chapterPopoverShowing', false);
            this.set('coursePopoverShowing', false);
            this.toggleProperty('subchapterPopoverShowing');
        },

        selectChapter: function(chapter) {
            this.hidePopovers();
            this.set('selectedSubchapter', null);
            this.transitionToRoute('chapter', chapter);
            this.scrollToTop();
        },

        selectCourse: function(course) {
            this.hidePopovers();
            this.set('selectedSubchapter', null);
            this.set('controllers.chapter.model', null);
            this.transitionToRoute('course', course);
            this.scrollToTop();
        },

        scrollToSubchapter: function(subchapter) {
            this.set('selectedSubchapter', subchapter);
            this.hidePopovers();

            var anchor = subchapter.get('id');

            if (anchor) {
                var elem = $('#' + anchor);
                if (elem && elem.offset()) {
                    var body = $("html, body");
                    body.animate({scrollTop:elem.offset().top - 60}, '500', 'swing', function() { });
                }
            }
        }
    },

    scrollToTop: function() {
        var body = $("html, body");
        body.animate({scrollTop:100}, '500', 'swing', function() { });
    },

    hidePopovers: function() {
        this.set('chapterPopoverShowing', false);
        this.set('coursePopoverShowing', false);
        this.set('subchapterPopoverShowing', false);
    },

    coursePopoverShowingObserver: function() {
        if (this.get('coursePopoverShowing')) {
            $('#coursePopover').removeClass('popnomore');
        } else {
            $('#coursePopover').addClass('popnomore');
        }


    }.observes('coursePopoverShowing'),

    chapterPopoverShowingObserver: function() {
        if (this.get('chapterPopoverShowing')) {
            $('#chapterPopover').removeClass('popnomore');
        } else {
            $('#chapterPopover').addClass('popnomore');
        }
    }.observes('chapterPopoverShowing'),

    subchapterPopoverShowingObserver: function() {
        if (this.get('subchapterPopoverShowing')) {
            $('#subchapterPopover').removeClass('popnomore');
        } else {
            $('#subchapterPopover').addClass('popnomore');
        }

    }.observes('subchapterPopoverShowing'),

    nextChapter: function() {
        var next = null;

        if (this.get('controllers.chapter.model')) {
            var chapterIndex = this.get('sortedChapters').indexOf(this.get('controllers.chapter.model'));
            if (chapterIndex >= 0) {
                next = this.get('sortedChapters').objectAt(chapterIndex + 1);
            }
        }


        return next;
    }.property('controllers.chapter.id', 'chapters.@each.id'),

    prevChapter: function() {
        var next = null;

        if (this.get('controllers.chapter.model')) {
            var chapterIndex = this.get('sortedChapters').indexOf(this.get('controllers.chapter.model'));
            if (chapterIndex >= 0) {
                next = this.get('sortedChapters').objectAt(chapterIndex - 1);
            }
        }


        return next;
    }.property('controllers.chapter.id', 'chapters.@each.id')
});
Kodegenet.CourseIndexController = Ember.ObjectController.extend({
    actions: {
        navigateToSubchapter: function(chapter, subchapter) {
            console.log('navigating to subchapter: ' + subchapter.get('id'));
            this.transitionToRoute('chapter', chapter);

            if (subchapter) {
                var controller = this;
                setTimeout(function() {
                    Ember.run.schedule('afterRender', this, function(){
                        console.log('scrolling in after render');
                        controller.scrollToSubchapter(subchapter);
                    }, 1);
                }, 250);
            }
        }
    },

    scrollToSubchapter: function(subchapter) {
        this.set('selectedSubchapter', subchapter);
        //this.hidePopovers();

        var anchor = subchapter.get('id');

        if (anchor) {
            var elem = $('#' + anchor);
            if (elem && elem.offset()) {
                var body = $("html, body");
                body.animate({scrollTop:elem.offset().top - 100}, '500', 'swing', function() { });
            }
        }
    }
});
Kodegenet.CourseIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('course');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/courses/' + model.get('id'));

        document.title = model.get('title') + " - Kodegenet";


    }
});
Kodegenet.CoursesCourseRoute = Ember.Route.extend({
    model: function(course) {
        return this.store.find('course', course.course_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/courses/' + model.get('id'));

        document.title = 'Kodegenet Kurs - ' + model.get('title');


    }
});
Kodegenet.CourseView = Ember.View.extend({
    didInsertElement: function() {
        var view = this;

        var onScroll = function() {
            view.detectScroll();
        };

        var timeout = setTimeout(function() {
            view.detectScroll();

            Ember.$(window).scroll(onScroll);
        }, 1000);

        this.set('onScroll', onScroll);
    },

    willDestroyElement: function() {
        if (this.get('onScroll')) {
            Ember.$(window).off("scroll", this.get('onScroll'));
        }
    },

    detectScroll: function() {
        if (Ember.$(window).scrollTop() > 568) {
            this.set('isFloating', true);
        } else {
            this.set('isFloating', false);
        }
    },

    isFloatingObserver: function() {
        var view = this;
        Ember.run.scheduleOnce('afterRender', function () {
            if (view.get('isFloating')) {
                Ember.$("#facebook-logo-submenu").addClass('floatingTop-submenu');
                Ember.$('#submenu').addClass('floatingTop');
                Ember.$('#logoImageSmall').removeClass('hidden');
                Ember.$('#logoImageSmall').animate({'margin-top': '0px'}, 500);
                Ember.$("#facebook-logo-submenu").animate({"top": "25px"}, 500);
            } else {
                Ember.$("#facebook-logo-submenu").removeClass('floatingTop-submenu');
                Ember.$('#submenu').removeClass('floatingTop');
                Ember.$('#logoImageSmall').animate({'margin-top': '-100px'}, 0);
                Ember.$("#facebook-logo-submenu").animate({"top": "-75px"}, 500);
                Ember.$('#logoImageSmall').addClass('hidden');
            }
        });

    }.observes('isFloating')
});


Kodegenet.CoursesController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex']
});
Kodegenet.CoursesIndexController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
Kodegenet.CoursesIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('courses');
    }
});
Kodegenet.CoursesRoute = Ember.Route.extend({
    model: function() {
        /*var courses = [];

        courses.pushObject(Ember.Object.create({
            id: "raspi",
            title: "Raspberry Pi",
            intro: "I løpet av denne boken skal vi bygge en radiostyrt bil. I tillegg til å bygge selve bilen, skal vi også installere et linux-basert operativsystem på en liten mini-datamaskin, kalt RaspberryPi. Deretter skal vi lære nok om Linux slik at vi kan bruke operativsystemet fra kommandolinjen. Vi skal konfigurere RaspberryPi datamaskinen som et trådløst aksesspunkt før vi skal lære hvordan vi kan bruke programmeringsspråket JavaScript for å kunne kommunisere med den radiostyrte bilen via en hvilken som helst enhet utstyrt med en nettleser og mulighet til å koble seg til et trådløst nettverk.",
            imageSrc: "/images/raspi_course_logo.png"
        }));

        return courses;*/

        return this.store.find('course');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/courses');

        document.title = 'Kursoversikt - Kodegenet';
    }
});
Kodegenet.EmailVerificationTokensController = Ember.Controller.extend({
    queryParams: ['sptoken'],
    spToken: null,
    tokenVerified: false,

    spTokenObserver: function() {
        var sptoken = this.get('sptoken');

        if (sptoken) {
            console.log("SPTOKEN!!!");
            console.log(sptoken);

            $.ajax({
                type: 'POST',
                url: '/json/emailVerificationTokens',
                data: JSON.stringify(loginData),

                success: function(res, status, xhr) {
                    if (res.verified) {
                        console.log('SUCCESSFUL VERIFICATION');
                        self.set('tokenVerified', true);
                    } else {
                        self.set('tokenVerified', false);
                    }
                },
                error: function(xhr, status, err) {
                    console.log("-------------\nerror: " + status + " error: " + err);
                    self.set('tokenVerified', false);
                }
            });
        }

        return sptoken;
    }.observes('sptoken')
});
Kodegenet.EpostlisteController = Ember.ObjectController.extend({
    init: function() {
        this.set('model', this.store.find('page', 'epostlister'));
    }
});
Kodegenet.EpostlisteRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('page', "epostlister");
    },

    setupController: function(controller) {
        this._super(controller);
        if (ga) ga('send', 'pageview', '/epostlister');

        document.title = 'Epostlister - Kodegenet';
    }
});
Kodegenet.EventController = Ember.ObjectController.extend({
    sortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'] }
        );

        return sortedResult;
    }.property('events.@each.date'),

    reverseSortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'], sortAscending: false }
        );

        return sortedResult;
    }.property('events.@each.date'),

    futureEvents: function() {
        var limited = [];
        if (this.get("sortedEvents")) {
            this.get('sortedEvents').forEach(function(event) {
                if (event.get('isInFuture')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('sortedEvents'),

    pastEvents: function() {
        var limited = [];
        if (this.get("reverseSortedEvents")) {
            this.get('reverseSortedEvents').forEach(function(event) {
                if (event.get('isInPast')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('reverseSortedEvents')
});
Kodegenet.EventRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            events: this.store.find('event')
        })
    }
});
Kodegenet.EventPaameldingController = Ember.ObjectController.extend({
    needs: ['event'],

    chosenParticipant: null,
    givenName: null,
    surname: null,
    age: null,
    email: null,
    publishInfo: null,

    errorMessage: null,
    eventLagret: false,

    actions: {
        registerParticipant: function() {
            var self = this;
            var event = this.get('event');
            var givenName = this.get('givenName');
            var surname = this.get('surname');
            var age = this.get('age');
            var email = this.get('email');
            var publishInfo = this.get('publishInfo');

            var events = this.get('controllers.event.events');

            if (this.validateForm()) {
                var user = this.session.get('ssession.session.user');

                var participant = this.get('chosenParticipant');

                if (participant === null) {
                    participant = this.store.createRecord('eventParticipant', {
                        id: Math.uuid(20)
                    });
                }

                participant.set('givenName', this.get('givenName'));
                participant.set('surname', this.get('surname'));
                participant.set('age', this.get('age'));
                participant.set('email', this.get('email'));
                participant.set('publishInfo', this.get('publishInfo'));

                participant.save();

                var storePromises = [];
                if (events) {
                    events.forEach(function(ev) {
                        if (ev.get('meldPaa')) {
                            ev.get('eventParticipants').pushObject(participant);
                            storePromises.pushObject(ev.save())
                        }
                    })
                }

                Ember.RSVP.all(storePromises).then(function() {
                    self.set('eventLagret', true);
                });

            }
        },

        registrerNyDeltaker: function() {
            this.set('chosenParticipant', null);
            this.set('givenName', null);
            this.set('surname', null);
            this.set('age', null);
            this.set('email', null);
            this.set('publishInfo', null);
            this.set('eventLagret', false);

        },

        velgDeltaker: function(deltaker) {
            this.set('chosenParticipant', deltaker);
            this.set('givenName', deltaker.get('givenName'));
            this.set('surname', deltaker.get('surname'));
            this.set('age', deltaker.get('age'));
            this.set('email', deltaker.get('email'));
            this.set('publishInfo', deltaker.get('publishInfo'));
        }
    },

    eventObserver: function() {
        var event = this.get('event');
        if (event) {
            event.set('meldPaa', true);
        }
    }.observes('event'),

    validateForm: function() {

        var givenName = this.get('givenName');
        var surname = this.get('surname');
        var age = this.get('age');
        var email = this.get('email');
        var publishInfo = this.get('publishInfo');

        var errorMessage = "";

        if (givenName === null || givenName.length < 2) {
            errorMessage += 'Fornavn må inneholde minst 2 tegn <br />';
        }

        if (surname === null || surname.length < 2) {
            errorMessage += 'Etternavn må inneholde minst 2 tegn <br />';
        }

        if (age === null || age.length < 1) {
            errorMessage += 'Alder må inneholde minst 1 tegn <br />';
        }

        if (errorMessage.length > 0) {
            this.set('errorMessage', errorMessage);
        } else {
            this.set('errorMessage', null);
        }

        return this.get('errorMessage') === null;
    }
});
Kodegenet.EventPaameldingRoute = Ember.Route.extend({
    model: function(param) {
        return Ember.RSVP.hash({
            event: this.store.find('event', param.event_id),
        });
    }
});
Kodegenet.HeaderController = Ember.ArrayController.extend({
    needs: ['application'],

    sortProperties: ['sortIndex'],
    sortAscending: true,

    showExtendedShoppingCart: false,

    actions: {
        doShowExtendedShoppingCart: function() {
            this.set('showExtendedShoppingCart', true);
        },

        doHideExtendedShoppingCart: function() {
            this.set('showExtendedShoppingCart', false);
        },
        orderSuccess: function(orderId) {
            console.log('ORDER SUCCESS!!!');
            this.transitionToRoute('mypage.orders.order', orderId);
        }
    },

    init: function() {
        this._super();

        var pages = [];

        this.store.find('page').then(function(data) {
            data.forEach(function(page) {
                var topMenu = page.get('topMenu');

                console.log("topMenu: " + topMenu + " :: " + page.get('id'));
                if (topMenu === true) {
                    pages.pushObject(page);
                }
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:pages, sortProperties: this.sortProperties }
        );

        this.set('content', sortedResult);
    },

    showTracks: function() {
        return !this.get('controllers.application.currentPath').startsWith('shop');
    }.property('controllers.application.currentPath'),

    isInShop: function() {
        return this.get('controllers.application.currentPath').startsWith('shop');
    }.property('controllers.application.currentPath'),

    shoppingCartHasItems: function() {
        return this.get('session.shoppingCart.numProducts') > 0;
    }.property('session.shoppingCart.cartProducts.length', 'isInShop'),

    showShoppingCart: function() {
        return this.get('shoppingCartHasItems') && this.get('isInShop');
    }.property('shoppingCartHasItems', 'isInShop'),

    showShoppingCartIcon: function() {
        return this.get('shoppingCartHasItems') && !this.get('isInShop');
    }.property('shoppingCartHasItems', 'isInShop'),

    numProductsHeader: function() {
        var text = "produkter";

        if (this.get('session.shoppingCart.numProducts') == 1) {
            text = "produkt";
        }
        return text;
    }.property('session.shoppingCart.numProducts')
});
Ember.Handlebars.registerBoundHelper('currencyFormat', function(property) {
    if (property !== null) {
        return property.toFixed(2).replace(".", ",");
    }
});
Ember.Handlebars.registerBoundHelper('dmy', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD-MM-YYYY");
    }
});

Ember.Handlebars.registerBoundHelper('dmy_no', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD/MM/YYYY");
    }
});
Ember.Handlebars.registerBoundHelper('rawhtml', function(property) {
    console.log("rawhtml: " + property);
    if (property !== null) {
        return new Handlebars.SafeString(property);
    }
});
Ember.Handlebars.registerBoundHelper('markdown', function(property) {
    var converter = new Showdown.converter();
    if (property && property !== null) {
        Ember.run.schedule('afterRender', this, function(){
            console.log('scheduling to after render');
            Rainbow.color();
        }, 200);

        return new Handlebars.SafeString(converter.makeHtml(property));
    }
});
Ember.Handlebars.registerBoundHelper('setting', function(property) {
    if (property !== null) {
        console.log('setting helper');
        var setting = this.get('store').find('setting', property);
        return setting.get('settingsValue');
    }
});
Kodegenet.IndexController = Ember.ArrayController.extend({
    needs: ['header'],

    contentObserver: function() {
        console.log('INDEX CONTROLLER OBSERVER');
        var pages = this.get('content');

        if (pages) {
            this.set('controllers.header.pages', pages);
        }

    }.observes('content.length')
});
Kodegenet.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/');

        document.title = 'Kodegenet Hjem';
    }
});
Kodegenet.IndexController = Ember.ObjectController.extend({
    needs: ['courses', 'application'],

    sortProperties: ['publishedDate'],
    sortAscending: false,

    numVisibleCourses: 0,

    currPhoto: 1,

    actions: {
        scrollToContent: function() {
            var targetOffset= $('#indexContent').offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 750);
        },

        scrollToKurs: function() {
            var targetOffset= $('#indexKurs').offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 750);
        },

        scrollToEpostlister: function() {
            var targetOffset= $('#indexEpostliste').offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 750);
        }
    },

    init: function() {
        var controller = this;

        var courses = [];

        this.store.find('course').then(function(data) {
            data.forEach(function(course) {
               courses.pushObject(course);
                if (course.get('visible')) {
                    controller.set('numVisibleCourses', controller.get('numVisibleCourses') + 1);
                }
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:courses, sortProperties: ['sortIndex'] }
        );

        controller.set('courses', sortedResult);

        (new Image()).src = '/figurer/forside_karusell1.jpg';
        (new Image()).src = '/figurer/forside_karusell2.jpg';
        (new Image()).src = '/figurer/forside_karusell3.jpg';
        (new Image()).src = '/figurer/forside_karusell4.jpg';
        (new Image()).src = '/figurer/forside_karusell5.jpg';
        (new Image()).src = '/figurer/forside_karusell6.jpg';
        Ember.run.later(function() {
            controller.nextPhoto();
        }, 15000);
    },

    nextPhoto: function() {
        console.log('nextPhoto');
        var controller = this;

        var currPhoto = this.get('currPhoto');

        if (!currPhoto || currPhoto >= 6) {
            currPhoto = 1;
        } else {
            currPhoto++;
        }

        this.set('currPhoto', currPhoto);

        Ember.run.later(function() {
            controller.nextPhoto();
        }, 15000);
    },

    updateBackground: function() {
        console.log('currPhotoObserver');
        var currentPhoto = '/figurer/forside_karusell' + this.get('currPhoto') + '.jpg';

        $('#indexCarousel').fadeOut(450, function() {
            $('#indexCarousel').css('background', 'url("' + currentPhoto + '") 0% 50% no-repeat').css('background-size', 'cover');
            $('#indexCarousel').fadeIn(450);
        });

        //component.set('shortDescription', component.currentPhotoDescription());
    }.observes('currPhoto').on('init'),

    indexColClassName: function() {
        if (this.get('numVisibleCourses') === 1) {
            return "col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-4";
        } else if (this.get('numVisibleCourses') === 2) {
            return "col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-1";
        } else {
            return "col-xs-12 col-sm-6 col-md-4 col-lg-4";
        }
    }.property('numVisibleCourses'),

    sortedUpdates: function() {
        console.log("SORTING UPDATED");
        var updates = this.get('updates');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:updates, sortProperties: ['publishedDate'], sortAscending: false }
        );

        return sortedResult;
    }.property('updates.@each.publishedDate'),

    sortedUpdatesLimited: function() {
        var limited = [];
        if (this.get("sortedUpdates")) {
            limited = this.get('sortedUpdates').toArray().splice(0, 5);
        }
        return limited;
    }.property('sortedUpdates'),

    sortedInstagrams: function() {
        console.log("SORTING Instagram");
        var instagrams = this.get('instagramPhotos');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:instagrams, sortProperties: ['createdTime'], sortAscending: false }
        );

        return sortedResult;
    }.property('updates.@each.publishedDate'),

    sortedInstagramsLimited: function() {
        var limited = [];
        if (this.get("sortedInstagrams")) {
            limited = this.get('sortedInstagrams').toArray().splice(0, 10);
        }
        return limited;
    }.property('sortedInstagrams')
});
Kodegenet.IndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            page: this.store.find('page', 'index'),
            indexKurs: this.store.find('page', 'indexKurs'),
            epostliste: this.store.find('page', "epostlister"),
            updates: this.store.find('update'),
            instagramPhotos: this.store.find('instagramPhoto')
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/');

        document.title = 'Velkommen! - Kodegenet';
    }

});
Kodegenet.KodeklubbEventRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/kodeklubb/event/' + model.get('id'));

        document.title = "Event - " + model.get('name') + ' - Kodegenet';
    }
});
Kodegenet.KodeklubbController = Ember.ObjectController.extend({
    needs: ['courses']
});
Kodegenet.KodeklubbIndexController = Ember.ObjectController.extend({
    needs: ['courses'],
    sortProperties: ['date'],
    sortAscending: true,

    sortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'] }
        );

        return sortedResult;
    }.property('events.@each.date'),

    reverseSortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'], sortAscending: false }
        );

        return sortedResult;
    }.property('events.@each.date'),

    futureEvents: function() {
        var limited = [];
        if (this.get("sortedEvents")) {
            this.get('sortedEvents').forEach(function(event) {
                if (event.get('isInFuture')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('sortedEvents'),

    pastEvents: function() {
        var limited = [];
        if (this.get("reverseSortedEvents")) {
            this.get('reverseSortedEvents').forEach(function(event) {
                if (event.get('isInPast')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('reverseSortedEvents')
});
Kodegenet.KodeklubbRoute = Ember.Route.extend({
    model: function() {
        var store = this.store;
        return Ember.RSVP.hash({
            page: this.store.find('page', "lambertseter_kodeklubb"),
            events: store.filter('event', function(event) {
                return event.get('type') === "kodeklubb";
            })
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/kodeklubb');

        document.title = 'Lambertseter Kodeklubb - Kodegenet';
    }
});
Kodegenet.LoginController = Ember.ObjectController.extend({
    loginEmailAddress: "",
    loginPassword: "",
    givenName: "",
    givenNameValid: true,

    actions: {
        registrerKonto: function(user) {
            console.log('login controller. registrerKonto');

            var controller = this;
            $.ajax({
                type: 'POST',
                url: '/kodegenet/auth/register',
                data: JSON.stringify(user),

                success: function (res, status, xhr) {
                    if (res.success && res.isNew) {
                        controller.transitionToRoute('userRegistered');
                    } else if (res.success && !res.isNew) {
                        controller.transitionToRoute('passwordReset');
                    } else if (!res.success) {
                        controller.set('registerError', 'Klarte ikke registrere ny bruker. Vennligst prøv igjen!');
                    }
                }
            });

        },

        emailFocusOut: function() {
            console.log('email focus out!');
            var emailPatternValid = this.validateEmail(this.get('loginEmailAddress'));

            if (emailPatternValid) {
                this.set('emailAddressIsInvalid', false);
            } else {
                this.set('emailAddressIsInvalid', true);
            }
        },

        emailKeyDown: function() {
            console.log('emailTyping');
        },

        triggerLogin: function() {
            var self = this;

            var emailPatternValid = this.validateEmail(this.get('loginEmailAddress'));

            if (emailPatternValid) {
                this.set('emailAddressIsInvalid', false);

                var loginData = {
                    username: this.get('loginEmailAddress'),
                    password: this.get('loginPassword')
                };

                $.ajax({
                    type: 'POST',
                    url: '/kodegenet/auth/login',
                    data: JSON.stringify(loginData),

                    success: function(res, status, xhr) {
                        if (res.session.authenticated === true) {
                            console.log('SUCCESSFUL LOGIN');
                            self.set('session.session', res.session);
                            Kodegenet.createCookie("uuid", res.session.id, 30);

                            self.store.find('shoppingCart', res.session.id).then(function(data) {
                                self.set('session.shoppingCart', data);
                            });

                            self.transitionToRoute('index');
                            self.set('stormpathLoginError', false);
                        } else {
                            self.set('session.session', null);
                            self.set('stormpathLoginError', true);
                        }
                    },
                    error: function(xhr, status, err) {
                        console.log("-------------\nerror: " + status + " error: " + err);
                        self.set('stormpathLoginError', true);
                    }
                });


            } else {
                this.set('emailAddressIsInvalid', true);

            }
        }

        /*passwordFocusOut: function() {
            console.log('password focus out!');

            this.set('passwordIsInValid', !this.passwordValid(this.get('loginPassword')));
        },

        passwordKeyDown: function() {
            console.log('password key down!');

            this.set('passwordIsInValid', !this.passwordValid(this.get('loginPassword')));
        }*/
    },

    loginDetailsCollected: function() {
        return !this.get('emailAddressIsInvalid') && this.get('loginEmailAddress').length > 5;
    }.property('emailAddressIsInvalid', 'loginEmailAddress'),

    verifyEmailAddress: function() {

    },

    validateEmail: function(email) {
        var pattern = /^[a-zA-Z_0-9\-\.]+@[a-zA-Z_0-9\-\.]+?\.[a-zA-Z]{2,4}$/;
        if (email) {
            return email.match(pattern);
        }

        return false;
    }

    /*passwordValid: function(password) {
        var pattern = /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/;
        var valid = false;

        var match = password.match(pattern);
        valid = match != null && match.length > 0 && password.length > 8;

        console.log('passwordsValid: ' + valid);
        return valid;
    }*/
});
Kodegenet.KodeklubbEventRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/makerspace/event/' + model.get('id'));

        document.title = "Event - " + model.get('name') + ' - Kodegenet';
    }
});
Kodegenet.MakerspaceIndexController = Ember.ObjectController.extend({
    sortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'] }
        );

        return sortedResult;
    }.property('events.@each.date'),

    reverseSortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'], sortAscending: false }
        );

        return sortedResult;
    }.property('events.@each.date'),

    futureEvents: function() {
        var limited = [];
        if (this.get("sortedEvents")) {
            this.get('sortedEvents').forEach(function(event) {
                if (event.get('isInFuture')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('sortedEvents'),

    pastEvents: function() {
        var limited = [];
        if (this.get("reverseSortedEvents")) {
            this.get('reverseSortedEvents').forEach(function(event) {
                if (event.get('isInPast')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('reverseSortedEvents')
});
Kodegenet.MakerspaceRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            makerspace: this.store.find('page', 'makerspace'),
            events: this.store.filter('event', function(event) {
                return event.get('type') === "makerspace";
            })
        });
    }
});
Kodegenet.MedlemRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            medlem: this.store.find('page', 'medlem')
        });
    }
});
Kodegenet.AnimateInViewMixin = Ember.Mixin.create({
    didInsertElement: function() {
        this._super();

        console.log('AnimateInViewMixin didInsertElement!!');

        this.animate();
    },

    modelObserver: function() {
        console.log('MODEL OBSERVER!!');

        this.animate();
    }.observes('model').on('init'),

    animate: function() {
        console.log('animateIn: ' + this.get('elementId'));
        console.log('parent: ' + this.get('_view'));
        console.log('animateCssClass: ' + this.get('animateCssClass'));

        var cssClass = this.get('animateCssClass');
        if (cssClass) {
            $("." + cssClass).first().hide();
            Ember.run.schedule("afterRender", function() {
                $("." + cssClass).first().fadeIn();
            });
        } else {
            var elementId = this.get('elementId');

            Ember.run.schedule("afterRender", function() {
                $("#" + elementId).fadeIn(500);
            });
        }
    }
});
Kodegenet.CartProduct = DS.Model.extend({
    product: DS.belongsTo('product', {async: true}),
    orderedProductNumber: DS.attr('number'),
    totalAmount: DS.attr('number'),
    discountAmount: DS.attr('number'),
    orderedItems: DS.attr('number'),

    numberObserver: function() {
        var number =  this.get('orderedProductNumber');
        if (number) {
            number = ("" + number).replace(/\D/g,'');

            if (number !== this.get('orderedProductNumber')){
                this.set('orderedProductNumber', number);
            }
        }
    }.observes('orderedProductNumber').on('init')
});
Kodegenet.Chapter = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    subchapters: DS.hasMany('subchapter', {async: true}),
    slides: DS.attr('string'),
    kapittel: DS.attr('number'),
    oneliner: DS.attr('string'),
    intro: DS.attr('string'),

    slideUrl: function() {
        return '/reveal.html?ids%5B%5D=' + this.get('id');
    }.property('id'),

    chapterTittel: function() {
        return this.get('kapittel') + ". " + this.get('tittel');
    }.property('kapittel', 'tittel'),

    sortedSubchapters: function() {
        var subchapters = this.get('subchapters');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:subchapters, sortProperties: ['kapittel'] }
        );

        return sortedResult;
    }.property('subchapters.length')
});
Kodegenet.Course = DS.Model.extend({
    chapters: DS.hasMany('chapter', {async: true}),
    name: DS.attr('string'),
    title: DS.attr('string'),
    intro: DS.attr('string'),
    imageSrc: DS.attr('string'),
    content: DS.attr('string'),
    submenuContent: DS.attr('string'),
    shortIntro: DS.attr('string'),
    sortIndex: DS.attr('number'),
    visible: DS.attr('boolean'),
    largeImage: DS.attr('string'),

    sortedChapters: function() {
        var chapters = this.get('chapters');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:chapters, sortProperties: ['kapittel'] }
        );

        return sortedResult;
    }.property('chapters.length')
});
Kodegenet.Event = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    date: DS.attr('date'),
    ageGroup: DS.attr('string'),
    intro:  DS.attr('string'),
    isVisible: DS.attr('boolean'),
    sted: DS.attr('string'),
    timeslot: DS.attr('string'),
    type: DS.attr('string'),
    capacity: DS.attr('number'),
    remainingSpots: DS.attr('number'),
    eventParticipants: DS.hasMany('eventParticipant', {async: true}),

    isInFuture: function() {
        var future = false;
        var date = this.get('date');

        if (date) {
            var m = moment();
            var d = moment(date).add(1, 'days');
            future = d.diff(m) > 0;
        }

        return future;
    }.property('date'),

    isInPast: Ember.computed.not('isInFuture'),

    isKodeklubb: function() {
        return this.get('type') === 'kodeklubb';
    }.property('type'),

    isMakerspace: function() {
        return this.get('type') === 'makerspace';
    }.property('type')
});
Kodegenet.EventParticipant = DS.Model.extend({
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    age: DS.attr('number'),
    email: DS.attr('string'),
    publishInfo: DS.attr('boolean'),
    username: DS.belongsTo('user', {async: true, inverse: 'eventParticipants'})
});
Kodegenet.Figur = DS.Model.extend({
    href: DS.attr('string')
});
Kodegenet.InstagramPhoto = DS.Model.extend({
    "thumbnail": DS.attr('string'),
    "lowResolution": DS.attr('string'),
    "createdTime": DS.attr('number'),
    "postedBy": DS.attr('string'),
    "postedByPicture": DS.attr('string'),
    "caption": DS.attr('string'),
    "link": DS.attr('string'),

    usernameLink: function() {
        return "http://instagram.com/" + this.get("postedBy");
    }.property('postedBy')
});
Kodegenet.Order = DS.Model.extend({
    status: DS.attr('string'),
    session: DS.attr('string'),
    emailAddress: DS.attr('string'),
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    address: DS.attr('string'),
    postalCode: DS.attr('string'),
    city: DS.attr('string'),
    orderLines: DS.hasMany('orderLines', {async: true})
});
Kodegenet.OrderLine = DS.Model.extend({
    product: DS.belongsTo('product', {async: true}),
    orderedProductNumber: DS.attr('number'),
    totalAmount: DS.attr('number'),
    discountAmount: DS.attr('number')
});
Kodegenet.Page = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    visible: DS.attr('boolean'),
    topMenu: DS.attr('boolean'),
    route: DS.attr('string'),
    sortIndex: DS.attr('number'),
    underlineColor: DS.attr('string'),

    underlineStyle: function() {
        var st = null;
        if (this.get('underlineColor')) {
            st = "border-bottom: 2px solid " + this.get('underlineColor');
        }
        return st;
    }.property('underlineColor')
});
Kodegenet.Product = DS.Model.extend({
    name: DS.attr('string'),
    pictures: DS.hasMany('figur', {async: true}),
    thumbnail: DS.belongsTo('figur', {async: true}),
    price: DS.attr('number'),
    content: DS.attr('string'),
    learn: DS.hasMany('course', {async: true})
});
Kodegenet.ProductCategory = DS.Model.extend({
    name: DS.attr('string'),
    subtitle: DS.attr('string'),
    sortIndex: DS.attr('number'),
    products: DS.hasMany('product', {async: true}),
    thumbnail: DS.belongsTo('figur', {async: true})
});
Kodegenet.Session = DS.Model.extend({
    authenticated: DS.attr('boolean'),
    acceptedCookies: DS.attr('boolean'),
    lastAccessed: DS.attr('number'),
    created: DS.attr('number'),
    user: DS.belongsTo('user', {async: true})
});
Kodegenet.Setting = DS.Model.extend({
    settingsValue: DS.attr('string'),
    settingsKey: DS.attr('string'),
    settingsLabel: DS.attr('string')
});
Kodegenet.ShoppingCart = DS.Model.extend({
    status: DS.attr('string'),
    session: DS.attr('string'),

    emailAddress: DS.attr('string'),
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    address: DS.attr('string'),
    postalCode: DS.attr('string'),
    city: DS.attr('string'),
    phone: DS.attr('string'),
    createAccount: DS.attr('boolean'),

    cartProducts: DS.hasMany('cartProduct', {async: true}),

    subtotal: function() {
        var total = 0;
        this.get('cartProducts').forEach(function(cp) {
            if (cp.get('totalAmount')) {
                total += (cp.get('totalAmount'));// * cp.get('orderedProductNumber'));
            }
        });

        return total;
    }.property('cartProducts.@each.totalAmount', 'cartProducts.@each.orderedProductNumber'),

    numProducts: function() {
        var numProducts = 0;

        this.get('cartProducts').forEach(function(cp) {
           numProducts += parseInt(cp.get('orderedProductNumber'));
        });

        return numProducts;
    }.property('cartProducts.@each.orderedProductNumber'),

    isSingular: function() {
        return this.get('numProducts') === 1;
    }.property('numProducts')
});
Kodegenet.Subchapter = DS.Model.extend({
    tittel: DS.attr('string'),
    kapittel: DS.attr('number'),
    content: DS.attr('string'),
    screencastbox: DS.attr('string'),
    oneliner: DS.attr('string'),

    anchorid: function() {
        return "#" + this.get('id');
    }.property('id'),

    oppgaveTittel: function() {
        return this.get('kapittel') + ". " + this.get('tittel');
    }.property('kapittel', 'tittel')
});
Kodegenet.Track = DS.Model.extend({
    name: DS.attr('string'),
    courses: DS.hasMany('course', {async: true}),
    isVisible: DS.attr('boolean'),
    smallImg: DS.belongsTo('figur', {async: true}),
    sortIndex: DS.attr('number'),
    content: DS.attr('string')
});
Kodegenet.Update = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    updateIntro: DS.attr('string'),
    route: DS.attr('string'),
    publishedDate: DS.attr('date'),
    image:  DS.attr('string'),
    vimeoid: DS.attr('string'),
    event: DS.belongsTo('event', {async: true})
});
Kodegenet.User = DS.Model.extend({
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    orders: DS.hasMany('order', {async: true}),
    eventParticipants: DS.hasMany('eventParticipant', {async: true, inverse: 'username'})
});
Kodegenet.MypageController = Ember.Controller.extend({

});
Kodegenet.MypageRoute = Ember.Route.extend({
    model: function() {
        var self = this;
        return Ember.RSVP.hash({
            //user: this.store.find('user', Kodegenet.readCookie('uuidToken'))
        });
    } 
});
Kodegenet.MyspaceOrdersRoute = Ember.Route.extend({

});
Kodegenet.MypageOrdersOrderController = Ember.ObjectController.extend({
    modelObserver: function() {
        if (this.get('model')) {
            this.get('model').reload();
        }
    }.observes('model.id').on('init')
});
Kodegenet.NewsController = Ember.ObjectController.extend({
});
Kodegenet.NewsRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('update', params.update_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/news/' + model.get('id'));

        document.title = controller.get("model.title") + ' - Kodegenet';
    }
});
Kodegenet.NewsIndexController = Ember.ObjectController.extend({
    sortProperties: ['publishedDate'],
    sortAscending: false,

    sortedUpdates: function() {
        console.log("SORTING UPDATED");
        var updates = this.get('updates');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:updates, sortProperties: ['publishedDate'], sortAscending: false }
        );

        return sortedResult;
    }.property('updates.@each.publishedDate')
});
Kodegenet.NewsIndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            updates: this.store.find('update')
        });
    }
});
Kodegenet.OmRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('page', "om");
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/om' + model.get('id'));

        document.title = 'Om Oss - Kodegenet';
    }
});
Kodegenet.PageRoute = Ember.Route.extend({
    model: function(page) {
        console.log('PAGE');
        console.log(page);
        return this.store.find('page', page.page_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/page/' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});
Kodegenet.RevealFrameView = Ember.View.extend({
    tagName: "iframe",
    content: null,
    attributeBindings: ["width", "height", "src"],
    width: 700,
    height: 500
});
Kodegenet.Router = Ember.Router.extend({
    location: 'history'
});

Kodegenet.Router.map(function() {
    this.resource('index', {path: "/"}, function() { });
    this.resource("track", {path: "/track/:track_id"}, function() {
        this.resource('courses', {path: "/courses"}, function() {
            this.resource('course', {path: "/:course_id"}, function() {
                this.resource('chapter', {path: "/chapter/:chapter_id"}, function() {
                    this.route('oppgave', {path: "/oppgave/:oppgave_id"});
                });
            });
        });
    });

    this.resource('page', {path: '/page/:page_id'});
    this.route('om');
    this.resource('kodeklubb', {path: "/kodeklubb"}, function() {
        this.route('event', {path: "/event/:event_id"});
    });

    this.resource('event', {path: "/event"}, function() {
        this.route('paamelding', {path: "/paamelding/:event_id"});
    });

    this.route("news", {path: "/news/:update_id"});
    this.route("newsIndex", {path: "/news"});

    this.resource("shop", function() {
        this.route('product', {path: '/product/:product_id'});
    });

    this.route('epostliste');
    this.route('emailVerificationTokens');

    this.route('makerspace', function() {
        this.route('event', {path: "/event/:event_id"});
    });
    this.route('medlem');

    this.route('login');
    this.route('userRegistered');
    this.route('passwordReset');

    this.resource('mypage', {path: '/mypage'}, function() {
        this.route('orders', {path: '/orders'}, function() {
            this.route('order', {path: '/confirmation/:order_id'});
        });
    });
});
Kodegenet.SessionController = Ember.Controller.extend({
    /* Session has:
        - Session Object with UUID
        - Shopping cart
     */
});
Kodegenet.SettingController = Ember.Controller.extend({

});

Kodegenet.ShopProductController = Ember.ObjectController.extend({
    needs: ['application'],

    currentPhoto: null,

    actions: {
        selectPhoto: function(photo) {
            if (photo) {
                this.set('currentPhoto', photo);
            }
        },

        scrollToDescription: function() {
            var target = $("#productDescription");
            $('html,body').animate({scrollTop: target.offset().top}, 600);
        },

        scrollToLearn: function() {
            var target = $("#productLearn");
            $('html,body').animate({scrollTop: target.offset().top}, 600);
        },

        addToCart: function(product) {
            var shoppingCart = this.get('session.shoppingCart');

            if (product && shoppingCart.get('cartProducts')) {

                var newShoppingProduct = this.getProductInCart(shoppingCart, product);
                if (newShoppingProduct) {
                    newShoppingProduct.set('orderedProductNumber', parseInt(newShoppingProduct.get('orderedProductNumber')) + 1);

                } else {
                    newShoppingProduct = this.store.createRecord('cartProduct');
                    newShoppingProduct.set('product', product);
                    newShoppingProduct.set('orderedProductNumber', 1);

                    shoppingCart.get('cartProducts').pushObject(newShoppingProduct);
                }

                newShoppingProduct.save().then(function(data) {
                    shoppingCart.reload();
                });
            }
        }
    },

    modelObserver: function() {
        console.log('<<<<<<----ShopProductController--->>>>>>>>>');
        console.log('modelObserver: ' + this.get('model.pictures.length'));
        if (this.get('model.pictures') && this.get('model.pictures.length') > 0) {
            console.log('setting current photo');
            this.set('currentPhoto', this.get('model.pictures').objectAt(0));
        } else {
            this.set('currentPhoto', null);
        }
    }.observes('model.pictures.length').on('init'),

    getProductInCart: function(shoppingCart, product) {
        var foundProduct = null;

        console.log('all cps');
        var cps = this.store.all('cartProduct');
        cps.forEach(function(cp) {
            console.log(JSON.stringify(cp));
            console.log(JSON.stringify(cp.get('product.id')));
        });
        console.log('---');

        if (product && shoppingCart.get('cartProducts')) {
            shoppingCart.get('cartProducts').forEach(function(cp) {
                console.log(JSON.stringify(cp.get('product')));
                console.log(cp.get('product') + " === " + product.get('id'));
                console.log(cp.get('product.id') + " === " + product.get('id'));
                if (cp.get('product.id') === product.get('id')) {
                    foundProduct = cp;
                }
            });
        }

        return foundProduct;
    }
});
Kodegenet.ShopProductView = Ember.View.extend(Kodegenet.AnimateInViewMixin, {

});
Kodegenet.ShopIndexController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex']
});
Kodegenet.ShopRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('productCategory');
    }
});
Kodegenet.TrackIndexController = Ember.ObjectController.extend({
    colClass: function() {
        var colclass = "col-md-12";

        if (this.get('courses.length') > 1) {
            colclass = "col-md-6";
        }

        return colclass;
    }.property('courses.length')
});
Kodegenet.TrackRoute = Ember.Route.extend({
    model: function(param) {
        return this.store.find('track', param.track_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/track/' + controller.get('model.id'));

        document.title = controller.get("model.name") + ' - Kodegenet';
    }
});
Kodegenet.ChapterMenuItemView = Ember.View.extend({
    templateName: 'chapter-menu-item',

    isSelected: function() {
        return this.get('chapter.id') === this.get('controller.controllers.chapter.model.id');
    }.property('controller.controllers.chapter.model.id', 'chapter.id')
});