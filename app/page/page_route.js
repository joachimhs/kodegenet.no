Kodegenet.PageRoute = Ember.Route.extend({
    model: function(page) {
        console.log('PAGE');
        console.log(page);
        return this.store.find('page', page.page_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/page/' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});