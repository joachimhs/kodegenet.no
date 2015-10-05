Kodegenet.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            updates: this.store.find('update'),
            events: this.store.find('event'),
            courses: this.store.find('course'),
            tracks: this.store.find('track')
        });
    }
});