Kodegenet.NewsRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('update', params.update_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/news/' + model.get('id'));

        document.title = model.get("title") + ' - Kodegenet';
    }
});