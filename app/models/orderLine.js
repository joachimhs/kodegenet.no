Kodegenet.OrderLine = DS.Model.extend({
    product: DS.belongsTo('product', {async: true}),
    orderedProductNumber: DS.attr('number'),
    totalAmount: DS.attr('number'),
    discountAmount: DS.attr('number')
});