Kodegenet.EventController = Ember.ObjectController.extend({
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
    }.property('events.@each.date'),

    futureEvents: function() {
        var limited = [];
        if (this.get("sortedEvents")) {
            this.get('sortedEvents').forEach(function(event) {
                if (event.get('isInFuture')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('sortedEvents'),

    pastEvents: function() {
        var limited = [];
        if (this.get("reverseSortedEvents")) {
            this.get('reverseSortedEvents').forEach(function(event) {
                if (event.get('isInPast')) {
                    limited.pushObject(event);
                }
            });
        }

        return limited;
    }.property('reverseSortedEvents')
});