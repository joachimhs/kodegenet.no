Kodegenet.ShopRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('productCategory');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/shop');

        document.title = 'Kodegenets Nettbutikk';
    }
});