Kodegenet.NewsIndexController = Ember.ObjectController.extend({
    sortProperties: ['publishedDate'],
    sortAscending: false,

    sortedUpdates: function() {
        console.log("SORTING UPDATED");
        var updates = this.get('updates');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:updates, sortProperties: ['publishedDate'], sortAscending: false }
        );

        return sortedResult;
    }.property('updates.@each.publishedDate')
});