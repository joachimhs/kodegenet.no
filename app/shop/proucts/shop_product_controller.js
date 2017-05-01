Kodegenet.ShopProductController = Ember.ObjectController.extend({
    needs: ['application'],

    currentPhoto: null,

    actions: {
        selectPhoto: function(photo) {
            if (photo) {
                this.set('currentPhoto', photo);
            }
        },

        scrollToDescription: function() {
            var target = $("#productDescription");
            $('html,body').animate({scrollTop: target.offset().top}, 600);
        },

        scrollToLearn: function() {
            var target = $("#productLearn");
            $('html,body').animate({scrollTop: target.offset().top}, 600);
        },

        addToCart: function(product) {
            var shoppingCart = this.get('session.shoppingCart');

            if (product && shoppingCart.get('cartProducts')) {

                if (ga) ga('send', 'pageview', '/shop/addToCart/' + product.get('id'));

                var newShoppingProduct = this.getProductInCart(shoppingCart, product);
                if (newShoppingProduct) {
                    newShoppingProduct.set('orderedProductNumber', parseInt(newShoppingProduct.get('orderedProductNumber')) + 1);

                } else {
                    newShoppingProduct = this.store.createRecord('cartProduct');
                    newShoppingProduct.set('product', product);
                    newShoppingProduct.set('orderedProductNumber', 1);

                    shoppingCart.get('cartProducts').pushObject(newShoppingProduct);
                }

                newShoppingProduct.save().then(function(data) {
                    shoppingCart.reload();
                });
            }
        }
    },

    tilgjengeligAntall: function() {
        var shoppingCart = this.get('session.shoppingCart');
        var quantity = this.get('model.quantity');
        var product = this.get('model');
        var tilgjengeligAntall = quantity;

        if (shoppingCart) {
            var productInCart = this.getProductInCart(shoppingCart, product);

            if (productInCart) {
                var itemsInCart = productInCart.get('orderedProductNumber');
                if (itemsInCart) {
                    tilgjengeligAntall -= itemsInCart;
                }
            }
        }

        return tilgjengeligAntall;
    }.property('session.shoppingCart.numProducts', 'quantity'),

    kanLeggeIHandlekurv: function() {
        return this.get('tilgjengeligAntall') > 0;
    }.property('tilgjengeligAntall'),

    maksAntallBestillt: function() {
        var maks = false;
        var product = this.get('model');
        var quantity = this.get('model.quantity');

        var shoppingCart = this.get('session.shoppingCart');

        if (shoppingCart) {
            var productInCart = this.getProductInCart(shoppingCart, product);

            if (productInCart) {
                maks = quantity <= productInCart.get('orderedProductNumber');
            }
        }

        return maks;

    }.property('tilgjengeligAntall', 'session.shoppingCart.numProducts'),

    modelObserver: function() {
        console.log('<<<<<<----ShopProductController--->>>>>>>>>');
        console.log('modelObserver: ' + this.get('model.pictures.length'));
        if (this.get('model.pictures') && this.get('model.pictures.length') > 0) {
            console.log('setting current photo');
            this.set('currentPhoto', this.get('model.pictures').objectAt(0));
        } else {
            this.set('currentPhoto', null);
        }
    }.observes('model.pictures.length').on('init'),

    getProductInCart: function(shoppingCart, product) {
        var foundProduct = null;

        console.log('all cps');
        var cps = this.store.all('cartProduct');
        cps.forEach(function(cp) {
            console.log(JSON.stringify(cp));
            console.log(JSON.stringify(cp.get('product.id')));
        });
        console.log('---');

        if (product && shoppingCart.get('cartProducts')) {
            shoppingCart.get('cartProducts').forEach(function(cp) {
                console.log(JSON.stringify(cp.get('product')));
                console.log(cp.get('product') + " === " + product.get('id'));
                console.log(cp.get('product.id') + " === " + product.get('id'));
                if (cp.get('product.id') === product.get('id')) {
                    foundProduct = cp;
                }
            });
        }

        return foundProduct;
    }
});