Kodegenet.KodeklubbRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            page: this.store.find('page', "lambertseter_kodeklubb"),
            events: this.store.find('event')
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/kodeklubb');

        document.title = 'Lambertseter Kodeklubb - Kodegenet';
    }
});