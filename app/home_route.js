Kodegenet.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/');

        document.title = 'Kodegenet Hjem';
    }
});