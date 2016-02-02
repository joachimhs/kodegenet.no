Kodegenet.ProductCategory = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    subtitle: DS.attr('string'),
    sortIndex: DS.attr('number'),
    products: DS.hasMany('product', {async: true}),
    thumbnail: DS.belongsTo('figur', {async: true}),

    sortedProducts: function() {
        var products = this.get('products');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            {content: products, sortProperties: ['name'], sortAscending: true}
        );

        return sortedResult;
    }.property('products'),

    sortedProductsLimited: function() {
        var limited = [];

        if (this.get('sortedProducts')) {
            limited = this.get('sortedProducts').toArray().splice(0, 3);
        }

        return limited;
    }.property('sortedProducts')
});