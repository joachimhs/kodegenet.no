Kodegenet.Order = DS.Model.extend({
    status: DS.attr('string'),
    session: DS.attr('string'),
    emailAddress: DS.attr('string'),
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    address: DS.attr('string'),
    postalCode: DS.attr('string'),
    city: DS.attr('string'),
    orderLines: DS.hasMany('orderLines', {async: true}),
    createdDate: DS.attr('number'),
    paymentDate: DS.attr('date'),
    shipmentDate: DS.attr('date'),

    shippingType: DS.attr('string'),
    shippingCost: DS.attr('number'),

    subtotal: function() {
        var subtotal = 0;

        if (this.get('orderLines')) {
            this.get('orderLines').forEach(function (ol) {
                subtotal += ol.get('totalAmount');
            });
        }

        if (this.get('shippingType') && this.get('shippingCost')) {
            subtotal += this.get('shippingCost');
        }

        return subtotal;
    }.property('orderLines.@each.totalAmount'),

    taxAmount: function() {
        var tax = 0;
        if (this.get('subtotal')) {
            tax = this.get('subtotal') * 0.2;
        }

        return tax;
    }.property('subtotal')
});