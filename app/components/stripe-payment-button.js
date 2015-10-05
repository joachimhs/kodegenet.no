Kodegenet.StripePaymentButtonComponent = Ember.Component.extend({
    stripeEnabled: false,

    didInsertElement: function() {
        if (!this.get('stripeEnabled')) {
            console.log('rerendering');
            this.set('stripeEnabled', true);
            this.rerender();
        }
    }
});