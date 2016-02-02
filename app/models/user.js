Kodegenet.User = DS.Model.extend({
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    orders: DS.hasMany('order', {async: true}),
    address: DS.attr('string'),
    postalCode: DS.attr('string'),
    city: DS.attr('string'),
    phone: DS.attr('string'),
    eventParticipants: DS.hasMany('eventParticipant', {async: true, inverse: 'username'}),

    sortedOrders: function() {
        var orders = this.get('orders');
        var sortedOrders = [];

        if (orders) {
            sortedOrders = Em.ArrayProxy.createWithMixins(
                Ember.SortableMixin,
                { content:orders, sortProperties: ['createdDate'], sortAscending: false }
            );
        }

        return sortedOrders;
    }.property('orders.@each.createdDate')
});