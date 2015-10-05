Kodegenet.CartProduct = DS.Model.extend({
    product: DS.belongsTo('product', {async: true}),
    orderedProductNumber: DS.attr('number'),
    totalAmount: DS.attr('number'),
    discountAmount: DS.attr('number'),
    orderedItems: DS.attr('number'),

    numberObserver: function() {
        var number =  this.get('orderedProductNumber');
        if (number) {
            number = ("" + number).replace(/\D/g,'');

            if (number !== this.get('orderedProductNumber')){
                this.set('orderedProductNumber', number);
            }
        }
    }.observes('orderedProductNumber').on('init')
});