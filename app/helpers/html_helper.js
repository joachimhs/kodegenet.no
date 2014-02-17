Ember.Handlebars.registerBoundHelper('rawhtml', function(property) {
    console.log("rawhtml: " + property);
    if (property !== null) {
        return new Handlebars.SafeString(property);
    }
});