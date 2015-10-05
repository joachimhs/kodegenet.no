Kodegenet.Order = DS.Model.extend({
    status: DS.attr('string'),
    session: DS.attr('string'),
    emailAddress: DS.attr('string'),
    givenName: DS.attr('string'),
    surname: DS.attr('string'),
    address: DS.attr('string'),
    postalCode: DS.attr('string'),
    city: DS.attr('string'),
    orderLines: DS.hasMany('orderLines', {async: true})
});