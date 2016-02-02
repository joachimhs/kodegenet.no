Kodegenet.ShoppingCart = DS.Model.extend({
    status: DS.attr('string'),
    session: DS.attr('string'),

    emailAddress: DS.attr('string'),
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    address: DS.attr('string'),
    postalCode: DS.attr('string'),
    city: DS.attr('string'),
    phone: DS.attr('string'),
    createAccount: DS.attr('boolean'),

    cartProducts: DS.hasMany('cartProduct', {async: true}),

    shippingType: DS.attr('string'),
    shippingCost: DS.attr('number'),

    subtotal: function() {
        var total = 0;
        this.get('cartProducts').forEach(function(cp) {
            if (cp.get('totalAmount')) {
                total += (cp.get('totalAmount'));// * cp.get('orderedProductNumber'));
            }
        });

        if (this.get('shippingType') && this.get('shippingCost')) {
            total += this.get('shippingCost');
        }

        return total;
    }.property('cartProducts.@each.totalAmount', 'cartProducts.@each.orderedProductNumber', 'shippingType', 'shippingCost'),

    numProducts: function() {
        var numProducts = 0;

        this.get('cartProducts').forEach(function(cp) {
           numProducts += parseInt(cp.get('orderedProductNumber'));
        });

        return numProducts;
    }.property('cartProducts.@each.orderedProductNumber'),

    isSingular: function() {
        return this.get('numProducts') === 1;
    }.property('numProducts')
});