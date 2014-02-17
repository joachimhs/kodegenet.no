Kodegenet.Update = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    route: DS.attr('string'),
    publishedDate: DS.attr('string'),
    image:  DS.attr('string')
});