Kodegenet.TrackRoute = Ember.Route.extend({
    model: function(param) {
        return this.store.find('track', param.track_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/track/' + controller.get('model.id'));

        document.title = controller.get("model.name") + ' - Kodegenet';
    }
});