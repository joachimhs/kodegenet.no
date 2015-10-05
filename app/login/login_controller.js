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