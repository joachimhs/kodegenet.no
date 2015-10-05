Kodegenet.Page = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    visible: DS.attr('boolean'),
    topMenu: DS.attr('boolean'),
    route: DS.attr('string'),
    sortIndex: DS.attr('number'),
    underlineColor: DS.attr('string'),

    underlineStyle: function() {
        var st = null;
        if (this.get('underlineColor')) {
            st = "border-bottom: 2px solid " + this.get('underlineColor');
        }
        return st;
    }.property('underlineColor')
});