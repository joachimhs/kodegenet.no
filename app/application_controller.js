Kodegenet.ApplicationController = Ember.ObjectController.extend({
    init: function() {
        console.log('Application Controller init');

        var controller = this;

        this.store.find('setting').then(function(data) {
            console.log(data.content);
            data.content.forEach(function(setting) {
                var id = setting.id;
                var value = setting.get('settingsValue');

                console.log(setting);
                console.log(id + " ::: " + value);
                controller.settings.set(setting.id,  value);
            });
        });
    }
});