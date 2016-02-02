Kodegenet.ShopCategoryRoute = Ember.Route.extend({
    model: function(param) {
        return Ember.RSVP.hash({
            category: this.store.find('productCategory', param.category_id)
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/shop/category/' + model.category.get('id'));

        document.title = model.category.get('name') + ' - Kodegenets Nettbutikk';
    }
});