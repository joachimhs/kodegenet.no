Kodegenet.EventRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            events: this.store.find('event')
        });
    }
});