Kodegenet.Session = DS.Model.extend({
    authenticated: DS.attr('boolean'),
    acceptedCookies: DS.attr('boolean'),
    lastAccessed: DS.attr('number'),
    created: DS.attr('number'),
    user: DS.belongsTo('user', {async: true})
});