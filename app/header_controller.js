Kodegenet.HeaderController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true,

    init: function() {
        this._super();

        var pages = [];

        this.store.find('page').then(function(data) {
            data.forEach(function(page) {
                var topMenu = page.get('topMenu');

                console.log("topMenu: " + topMenu + " :: " + page.get('id'));
                if (topMenu) {
                    pages.pushObject(page);
                }
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:pages, sortProperties: this.sortProperties }
        );

        this.set('content', sortedResult);
    }
});