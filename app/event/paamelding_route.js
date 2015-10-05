Kodegenet.EventPaameldingRoute = Ember.Route.extend({
    model: function(param) {
        return Ember.RSVP.hash({
            event: this.store.find('event', param.event_id),
        });
    }
});