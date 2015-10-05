Kodegenet.IndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            page: this.store.find('page', 'index'),
            indexKurs: this.store.find('page', 'indexKurs'),
            epostliste: this.store.find('page', "epostlister"),
            updates: this.store.find('update'),
            instagramPhotos: this.store.find('instagramPhoto')
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/');

        document.title = 'Velkommen! - Kodegenet';
    }

});