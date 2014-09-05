Kodegenet.EpostlisteRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('page', "epostlister");
    },

    setupController: function(controller) {
        this._super(controller);
        if (ga) ga('send', 'pageview', '/epostlister');

        document.title = 'Epostlister - Kodegenet';
    }
});