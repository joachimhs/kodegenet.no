Ember.Handlebars.registerBoundHelper('setting', function(property) {
    if (property !== null) {
        console.log('setting helper');
        var setting = this.get('store').find('setting', property);
        return setting.get('settingsValue');
    }
});