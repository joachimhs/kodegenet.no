Kodegenet.MakerspaceRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            makerspace: this.store.find('page', 'makerspace'),
            events: this.store.filter('event', function (event) {
                return event.get('type') === "makerspace";
            })
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/makerspace');

        document.title = 'Kodegenet Kodeklubb - Makerspace';
    }
});