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