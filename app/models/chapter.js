Kodegenet.Chapter = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    oppgaver: DS.hasMany('oppgave', {async: true})
});