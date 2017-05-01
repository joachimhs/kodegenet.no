Kodegenet.ProductCategory = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    subtitle: DS.attr('string'),
    sortIndex: DS.attr('number'),
    products: DS.hasMany('product', {async: true}),
    thumbnail: DS.belongsTo('figur', {async: true}),
    filterString: null,

    sortedProducts: function() {
        var products = this.get('products');

        /*var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            {content: products, sortProperties: ['sortIndex'], sortAscending: true}
        );*/

        return products;
    }.property('products'),

    sortedProductsLimited: function() {
        var limited = Ember.A();

        var filterString = this.get('filterString');

        if (this.get('sortedProducts')) {
            this.get('sortedProducts').forEach(function(product) {
                var filterStringLowercase = (filterString || '').toLowerCase();
                var contentLowercase = (product.get('content') || '').toLowerCase();
                var nameLowercase = (product.get('name') || '').toLowerCase();

                if (filterString &&
                    (contentLowercase.indexOf(filterStringLowercase) >= 0) || nameLowercase.indexOf(filterStringLowercase) >= 0) {
                    limited.pushObject(product);
                } else if (!filterString) {
                    limited.pushObject(product);
                }
            });

            limited = limited.toArray().splice(0, 6);
        }

        return limited;
    }.property('sortedProducts', 'filterString')
});