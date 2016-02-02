Kodegenet.Product = DS.Model.extend({
    name: DS.attr('string'),
    pictures: DS.hasMany('figur', {async: true}),
    thumbnail: DS.belongsTo('figur', {async: true}),
    price: DS.attr('number'),
    content: DS.attr('string'),
    learn: DS.hasMany('course', {async: true}),
    quantity: DS.attr('number'),
    maxItemsInStandardBox: DS.attr('number')
});