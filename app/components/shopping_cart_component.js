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
    shippingValid: false,

    didInsertElement: function() {
        var elementId = this.get('elementId');
        var self = this;

        var stripeHandler = StripeCheckout.configure({
            key: 'pk_live_LhJU5yZTBfjM15GSsxgyJUAd',
            image: '/square-image.png',
            token: function(token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
                console.log("<<<<<TOKEN>>>>>");
                console.log(token);

                if (ga) ga('send', 'pageview', '/shop/stripeToken');

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
                        } else {
                            alert("Betalingen mislyktes");
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

    actions: {
        applyServicepakkeValgt: function() {
            var self = this;

            console.log('SERVICEPAKKE');
            this.set('shipByServicepakke', true);
            this.set('shipByHenting', false);

            var cart = this.get('cart');
            this.updateCartFromUi(true);
        },

        applyHentingValgt: function() {
            console.log('HENTING');
            this.set('shipByServicepakke', false);
            this.set('shipByHenting', true);

            var cart = this.get('cart');
            this.updateCartFromUi(true);
        },

        increaseAmount: function(cartProduct) {
           var oensketBestilt = parseInt(cartProduct.get('orderedProductNumber')) + 1;

            cartProduct.set('orderedProductNumber', this.antallTilBestilling(oensketBestilt, cartProduct));
            Ember.run.debounce(this.persistCartProduct(cartProduct), 500);
        },

        decreaseAmount: function(cartProduct) {
            var oensketBestilt = parseInt(cartProduct.get('orderedProductNumber')) - 1;
            cartProduct.set('orderedProductNumber', this.antallTilBestilling(oensketBestilt, cartProduct));
            Ember.run.debounce(this.persistCartProduct(cartProduct), 500);
        },

        numProductsChanged: function() {
            var cart = this.get('cart');

            var self = this;

            cart.get('cartProducts').forEach(function(cp) {
                if (cp.get('isDirty')) {
                    var oensketBestilt = parseInt(cp.get('orderedProductNumber'));
                    cp.set('orderedProductNumber', self.antallTilBestilling(oensketBestilt, cp));
                    Ember.run.debounce(self.persistCartProduct(cp), 500);
                }
            });
        },

        triggerStripePurchase: function() {
            if (ga) ga('send', 'pageview', '/shop/triggerPurchase');
            console.log("TRIGGERING PURCHASE!!");
            var self = this;

            var cart = this.get('cart');
            this.updateCartFromUi(false);

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
            if (ga) ga('send', 'pageview', '/shop/collectShippingDetails');
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

    antallTilBestilling: function(oensketBestillt, cartProduct) {
        var antallTilBestilling = oensketBestillt;
        var antallPaaLager = cartProduct.get('product.quantity');

        if (antallTilBestilling > antallPaaLager) {
            antallTilBestilling = antallPaaLager;
        }

        return antallTilBestilling;
    },

    persistCartProduct: function(cartProduct) {
        var self = this;
        cartProduct.save().then(function(data) {
            self.updateShipping();
        });
    },

    userObserver: function() {
        var user = this.get('session.session.user');
        console.log(JSON.stringify(this.get('session')));
        console.log(JSON.stringify(this.get('session.session.user')));

        if (user) {
            this.set('emailAddress', user.get('id'));
            this.set('givenName', user.get('givenName'));
            this.set('surname', user.get('surname'));
            this.set('address', user.get('address'));
            this.set('postalCode', user.get('postalCode'));
            this.set('city', user.get('city'));
            this.set('phone', user.get('phone'));
            this.set('createAccount', false);
        }

        return user;
    }.observes('session.session.user', 'session.session.user.isLoaded', 'session.session.user.givenName').on('init'),

    postalCodeObserver: function() {
        this.updateShipping(true);
    }.observes('postalCode', 'cart', 'cart.@each.cartProducts').on('init'),

    /*numProductsObserver: function() {
        if (this.get('cart.numProducts') >= 0) {
            var cart = this.get('cart');

            var self = this;

            cart.get('cartProducts').forEach(function (cp) {
                if (cp.get('isDirty')) {
                    cp.save().then(function (data) {
                        self.updateShipping(false);
                    });
                }
            });
        }
    }.observes('cart.numProducts').on('init'),*/

    updateShipping: function(persistCart) {
        var self = this;
        Ember.run.debounce(function() {
            self.debounceUpdateShipping(persistCart);
        }, 500);
    },

    debounceUpdateShipping: function(persistCart) {
        var postalCode = this.get('postalCode');
        var self = this;

        if (postalCode && postalCode.length == 4) {
            var url = '/kodegenet/shipping?postalCode=' + postalCode;

            $.ajax({
                type: 'GET',
                url: url,
                contentType: 'application/json',
                success: function (res, status, xhr) {
                    console.log('shipment: ');
                    console.log(res);

                    if (res.shippingPrice.AmountWithVAT) {
                        self.set('shippingPrice', res.shippingPrice.AmountWithVAT);
                        self.set('shippingValid', true);

                        var cart = self.get('cart');
                        self.updateCartFromUi(persistCart);


                    }
                },
                error: function(xhr, status, err) {
                    self.set('shippingValid', false);

                    var cart = self.get('cart');
                    self.updateCartFromUi(persistCart);
                }
            });
        }
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

    updateCartFromUi: function(persistCart) {
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

        if (this.get('shipByServicepakke') === true) {
            cart.set('shippingType', 'servicepakke');
        } else {
            cart.set('shippingType', null);
        }

        if (persistCart === true) {
            this.set('shippingValid', false);
            console.log(cart);
            cart.save().then(function () {
                self.set('shippingValid', true);
            });
        }
    },

    emailAddressIsInvalid: function() {
        if (this.get('emailEntered') && this.get('emailAddress')) {
            return !this.validateEmail(this.get('emailAddress'));
        }

        return this.get('emailEntered');
    }.property('emailAddress', 'emailEntered'),

    validateEmail: function(email) {
        var pattern = /^[a-zA-Z_0-9\-\.]+@[a-zA-Z_0-9\-\.]+?\.[a-zA-Z]{2,4}$/;
        if (email) {
            return email.match(pattern);
        }

        return false;
    },

    description: function() {
        return "Kodegenet " + this.get('cart.numProducts') + " produkter";
    }.property('cart.numProducts'),

    shippingDetailsCollected: function() {
        return this.validateEmail(this.get('emailAddress')) &&
            this.get('givenName.length') >= 2 &&
            this.get('surname.length') >= 2 &&
            this.get('address.length') >= 2 &&
            this.get('postalCode.length') >= 4 &&
            this.get('phone.length') >= 4 &&
            this.get('city.length') > 2 &&
            this.get('shippingValid') === true;
    }.property('emailAddressIsInvalid', 'givenName', 'surname', 'address', 'postalCode', 'city', 'phone', 'shippingValid')
});