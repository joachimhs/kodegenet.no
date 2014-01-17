Kodegenet.IndexController = Ember.ArrayController.extend({
    needs: ['header'],

    contentObserver: function() {
        console.log('INDEX CONTROLLER OBSERVER');
        var pages = this.get('content');

        if (pages) {
            this.set('controllers.header.pages', pages);
        }

    }.observes('content.length')
});