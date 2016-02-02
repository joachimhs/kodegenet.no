Ember.Handlebars.registerBoundHelper('dmy', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD-MM-YYYY");
    }
});

Ember.Handlebars.registerBoundHelper('dmy_no', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD/MM/YYYY");
    }
});

Ember.Handlebars.registerBoundHelper('dateTime', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD/MM/YYYY HH:mm:ss");
    }
});