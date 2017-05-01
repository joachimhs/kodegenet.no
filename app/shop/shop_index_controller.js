Kodegenet.ShopIndexController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],

    filterString: null,

    filterProducts: function() {
        var products = Ember.A();
        var categories = this.get('model');
        var filterString = this.get('filterString');

        if (!filterString) {
            categories.setEach('filterString', null);
        } else {
            categories.setEach('filterString', filterString);
        }
    }.observes('filterString', 'model.@each.id')
});