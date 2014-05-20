Kodegenet.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/');

        document.title = 'Kodegenet Hjem';
    }
});