Kodegenet.OmRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('page', "om");
    }
});