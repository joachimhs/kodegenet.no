Kodegenet.PageRoute = Ember.Route.extend({
    model: function(page) {
        console.log('PAGE');
        console.log(page);
        return this.store.find('page', page.page_id);
    }
});