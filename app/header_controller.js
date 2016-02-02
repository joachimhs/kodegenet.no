Kodegenet.HeaderController = Ember.ArrayController.extend({
    needs: ['application'],

    sortProperties: ['sortIndex'],
    sortAscending: true,

    showExtendedShoppingCart: false,

    actions: {
        doShowExtendedShoppingCart: function() {
            this.set('showExtendedShoppingCart', true);
        },

        doHideExtendedShoppingCart: function() {
            this.set('showExtendedShoppingCart', false);
        },
        orderSuccess: function(orderId) {
            console.log('ORDER SUCCESS!!!');
            if (ga) ga('send', 'pageview', '/shop/paymentSuccess');
            this.transitionToRoute('mypage.orders.order', orderId);
        }
    },

    init: function() {
        this._super();

        var pages = [];

        this.store.find('page').then(function(data) {
            data.forEach(function(page) {
                var topMenu = page.get('topMenu');

                console.log("topMenu: " + topMenu + " :: " + page.get('id'));
                if (topMenu === true) {
                    pages.pushObject(page);
                }
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:pages, sortProperties: this.sortProperties }
        );

        this.set('content', sortedResult);
    },

    showTracks: function() {
        return !this.get('controllers.application.currentPath').startsWith('shop');
    }.property('controllers.application.currentPath'),

    isInShop: function() {
        return this.get('controllers.application.currentPath').startsWith('shop');
    }.property('controllers.application.currentPath'),

    shoppingCartHasItems: function() {
        return this.get('session.shoppingCart.numProducts') > 0;
    }.property('session.shoppingCart.cartProducts.length', 'isInShop'),

    showShoppingCart: function() {
        return this.get('shoppingCartHasItems') && this.get('isInShop');
    }.property('shoppingCartHasItems', 'isInShop'),

    showShoppingCartIcon: function() {
        return this.get('shoppingCartHasItems') && !this.get('isInShop');
    }.property('shoppingCartHasItems', 'isInShop'),

    numProductsHeader: function() {
        var text = "produkter";

        if (this.get('session.shoppingCart.numProducts') == 1) {
            text = "produkt";
        }
        return text;
    }.property('session.shoppingCart.numProducts')
});