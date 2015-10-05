Ember.Handlebars.registerBoundHelper('markdown', function(property) {
    var converter = new Showdown.converter();
    if (property && property !== null) {
        Ember.run.schedule('afterRender', this, function(){
            console.log('scheduling to after render');
            Rainbow.color();
        }, 200);

        return new Handlebars.SafeString(converter.makeHtml(property));
    }
});