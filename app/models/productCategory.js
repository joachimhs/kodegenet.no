Kodegenet.ProductCategory = DS.Model.extend({
    name: DS.attr('string'),
    subtitle: DS.attr('string'),
    sortIndex: DS.attr('number'),
    products: DS.hasMany('product', {async: true}),
    thumbnail: DS.belongsTo('figur', {async: true})
});