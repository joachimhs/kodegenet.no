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