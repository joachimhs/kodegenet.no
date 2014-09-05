Kodegenet.OmRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('page', "om");
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/om' + model.get('id'));

        document.title = 'Om Oss - Kodegenet';
    }
});