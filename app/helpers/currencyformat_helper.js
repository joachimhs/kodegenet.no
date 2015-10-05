Ember.Handlebars.registerBoundHelper('currencyFormat', function(property) {
    if (property !== null) {
        return property.toFixed(2).replace(".", ",");
    }
});