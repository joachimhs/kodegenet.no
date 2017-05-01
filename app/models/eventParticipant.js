Kodegenet.EventParticipant = DS.Model.extend({
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    age: DS.attr('number'),
    email: DS.attr('string'),
    publishInfo: DS.attr('boolean'),
    username: DS.belongsTo('user', {async: true, inverse: 'eventParticipants'}),
    allowPictures: DS.attr('boolean')
});