Kodegenet.Event = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    date: DS.attr('date'),
    ageGroup: DS.attr('string'),
    intro:  DS.attr('string'),
    isVisible: DS.attr('boolean'),
    sted: DS.attr('string'),
    timeslot: DS.attr('string'),

    isInFuture: function() {
        var future = false;
        var date = this.get('date');

        if (date) {
            var m = moment();
            var d = moment(date);
            future = d.diff(m) > 0;
        }

        return future;
    }.property('date'),

    isInPast: Ember.computed.not('isInFuture')
});