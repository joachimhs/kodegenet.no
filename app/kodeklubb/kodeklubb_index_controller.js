Kodegenet.KodeklubbIndexController = Ember.ObjectController.extend({
    sortProperties: ['date'],
    sortAscending: true,

    sortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'] }
        );

        return sortedResult;
    }.property('events.@each.date'),

    reverseSortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'], sortAscending: false }
        );

        return sortedResult;
    }.property('events.@each.date')
});