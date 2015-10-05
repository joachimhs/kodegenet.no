Kodegenet.User = DS.Model.extend({
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    orders: DS.hasMany('order', {async: true}),
    eventParticipants: DS.hasMany('eventParticipant', {async: true, inverse: 'username'})
});