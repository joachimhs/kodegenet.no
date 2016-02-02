Kodegenet.Event = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    date: DS.attr('date'),
    ageGroup: DS.attr('string'),
    intro:  DS.attr('string'),
    isVisible: DS.attr('boolean'),
    sted: DS.attr('string'),
    timeslot: DS.attr('string'),
    type: DS.attr('string'),
    capacity: DS.attr('number'),
    remainingSpots: DS.attr('number'),
    eventParticipants: DS.hasMany('eventParticipant', {async: true}),

    isInFuture: function() {
        var future = false;
        var date = this.get('date');

        if (date) {
            var m = moment();
            var d = moment(date).add(1, 'days');
            future = d.diff(m) > 0;
        }

        return future;
    }.property('date'),

    isInPast: Ember.computed.not('isInFuture'),

    isKodeklubb: function() {
        return this.get('type') === 'kodeklubb';
    }.property('type'),

    isMakerspace: function() {
        return this.get('type') === 'makerspace';
    }.property('type'),

    hasSpotsRemaining: function() {
        return this.get('remainingSpots') > 0;
    }.property('remainingSpots')
});