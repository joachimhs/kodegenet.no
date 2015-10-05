Kodegenet.MypageOrdersOrderController = Ember.ObjectController.extend({
    modelObserver: function() {
        if (this.get('model')) {
            this.get('model').reload();
        }
    }.observes('model.id').on('init')
});