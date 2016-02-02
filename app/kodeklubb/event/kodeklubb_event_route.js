Kodegenet.KodeklubbEventRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/kodeklubb/event/' + model.get('id'));

        document.title = "Kodeklubb - " + model.get('name') + ' - Kodegenet';
    }
});