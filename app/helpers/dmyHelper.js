Ember.Handlebars.registerBoundHelper('dmy', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD-MM-YYYY");
    }
});



