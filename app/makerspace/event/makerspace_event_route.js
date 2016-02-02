Kodegenet.MakerspaceEventRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/makerspace/event/' + model.get('id'));

        document.title = "Makerspace - " + model.get('name') + ' - Kodegenet';
    }
});