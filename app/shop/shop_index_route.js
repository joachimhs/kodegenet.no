Kodegenet.ShopIndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/shop');

        document.title = 'Kodegenets Nettbutikk';
    }
});