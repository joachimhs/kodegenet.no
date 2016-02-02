Kodegenet.ShopProductRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/shop/product/' + model.get('id'));

        document.title = model.get('name') + ' - Kodegenets Nettbutikk';
    }
});