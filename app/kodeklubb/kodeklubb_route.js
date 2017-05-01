Kodegenet.KodeklubbRoute = Ember.Route.extend({
    model: function() {
        var store = this.store;
        return Ember.RSVP.hash({
            page: this.store.find('page', "lambertseter_kodeklubb"),
            events: store.filter('event', function(event) {
                return event.get('type') === "kodeklubb" || event.get('type') === 'makerspace';
            })
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/kodeklubb');

        document.title = 'Kodegenet Kodeklubb - Kodegenet';
    }
});