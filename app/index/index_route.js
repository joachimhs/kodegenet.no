Kodegenet.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('update');
    }
    /*setupController: function(controller) {
        var updates = this.store.find('update');
        controller.set('updates', updates);
    }*/

});