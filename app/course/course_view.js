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

