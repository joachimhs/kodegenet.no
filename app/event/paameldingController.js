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
                //Scroll to the top of the page
                $("html, body").animate({ scrollTop: 0 }, "slow");
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
                            storePromises.pushObject(ev.save());
                        }
                    });
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

        if (errorMessage.length > 0) {
            this.set('errorMessage', errorMessage);
        } else {
            this.set('errorMessage', null);
        }

        return this.get('errorMessage') === null;
    }
});