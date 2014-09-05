Kodegenet.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('update');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/');

        document.title = 'Velkommen! - Kodegenet';
    }

});