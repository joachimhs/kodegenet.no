Kodegenet.Chapter = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    oppgaver: DS.hasMany('oppgave', {async: true}),
    slides: DS.attr('string'),

    slideUrl: function() {
        return '/reveal.html?ids%5B%5D=' + this.get('id');
    }.property('id')
});