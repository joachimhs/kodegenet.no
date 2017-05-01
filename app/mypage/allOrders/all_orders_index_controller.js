Kodegenet.AllOrdersIndexController = Ember.Controller.extend({
    ordersSorting: ['createdDate:desc'],
    sortedOrders: Ember.computed.sort('model.orders', 'ordersSorting'),
    filterString: null,

    actions: {
        markSent: function (order) {
            order.set('status', 'sendt');
        },

        updateOrder: function(order) {
            order.set('showUpdatePanel', true);
        },

        finishUpdateOrder: function(order) {
            order.save();
            order.set('showUpdatePanel', false);
        },

        sendOrdreEpost: function(order) {
            if (order.get('id')) {
                $.ajax({
                    type: "GET",
                    url: '/kodegenet/sendOrderUpdate/' + order.get('id'),
                    success: function(data, textStatus, jqXHR) {
                        console.log('SUCCESS!');
                    },
                    dataType: 'application/json'
                });
            }
        },

        generateCsv: function () {
            var csv = "navn;addresse;poststed;epost;produkter;shippingType\n";

            var orders = this.get('model.orders');
            orders.forEach(function (order) {
                if (order.get('status') === 'paid') {
                    csv += order.get('givenName') + " " + order.get('surname') + ";";
                    csv += order.get('address') + ";";
                    csv += order.get('postalCode') + " "  + order.get('city') + ";";
                    csv += order.get('emailAddress') + ";";

                    order.get('orderLines').forEach(function(ol) {
                        csv +=  ol.get('product.name') + "(" + ol.get('orderedProductNumber') + "), ";
                    });
                    csv += ";";

                    csv += order.get('shippingType') + " " + order.get('shippingCost') +  ";";
                    csv += "\n";
                }
            });

            var blob = new Blob([csv], {type: "text/xml;charset=utf-8"});
            saveAs(blob, "order_export.csv");
        }
    },

    filteredOrders: function() {
        var filterString = this.get('filterString');
        console.log('filtering based on: ' + filterString);

        var sortedOrders = this.get('sortedOrders');
        var filteredOrders = Ember.A();

        if (filterString) {
            sortedOrders.forEach(function(order) {
                order.get('orderLines').forEach(function(orderLine) {
                    if (orderLine.get('product.name').indexOf(filterString) >= 0) {
                        filteredOrders.pushObject(order);
                    }
                });
            });
        } else {
            filteredOrders = sortedOrders;
        }

        console.log('filtered orders: ' + filteredOrders.get('length'));

        return filteredOrders;
    }.property('filterString', 'sortedOrders.@each.id')
});