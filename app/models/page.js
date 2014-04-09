Kodegenet.Page = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    visible: DS.attr('boolean'),
    topMenu: DS.attr('string'),
    route: DS.attr('string'),
    sortIndex: DS.attr('number')
});