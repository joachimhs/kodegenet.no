Kodegenet.NewsIndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            updates: this.store.find('update')
        });
    }
});