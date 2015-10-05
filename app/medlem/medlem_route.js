Kodegenet.MedlemRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            medlem: this.store.find('page', 'medlem')
        });
    }
});