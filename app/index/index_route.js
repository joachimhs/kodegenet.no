Kodegenet.IndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            page: this.store.find('page', 'index'),
            epostliste: this.store.find('page', "epostlister"),
            updates: this.store.find('update'),
            events: this.store.find('event')
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/');

        document.title = 'Velkommen! - Kodegenet';
    }

});