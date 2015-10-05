Kodegenet.Update = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    updateIntro: DS.attr('string'),
    route: DS.attr('string'),
    publishedDate: DS.attr('date'),
    image:  DS.attr('string'),
    vimeoid: DS.attr('string'),
    event: DS.belongsTo('event', {async: true})
});