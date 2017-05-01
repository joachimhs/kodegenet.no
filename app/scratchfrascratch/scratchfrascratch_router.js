Kodegenet.ScratchfrascratchRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            page: this.store.find('page', 'scratchfrascratch')
        });
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/scratchfrascratch');

        document.title = 'Scratch fra scratch - Kodegenet';
    }
});