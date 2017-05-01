Kodegenet.AllOrdersRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            orders: this.store.find('order')
        });
    } 
});
