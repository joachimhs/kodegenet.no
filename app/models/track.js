Kodegenet.Track = DS.Model.extend({
    name: DS.attr('string'),
    courses: DS.hasMany('course', {async: true}),
    isVisible: DS.attr('boolean'),
    smallImg: DS.belongsTo('figur', {async: true}),
    sortIndex: DS.attr('number'),
    content: DS.attr('string'),
    faktaark: DS.belongsTo('page', {async: true})
});