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