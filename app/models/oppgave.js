Kodegenet.Oppgave = DS.Model.extend({
    tittel: DS.attr('string'),
    kapittel: DS.attr('number'),
    content: DS.attr('string'),
    screencastbox: DS.attr('string'),
    oneliner: DS.attr('string'),

    anchorid: function() {
        return "#" + this.get('id');
    }.property('id'),

    oppgaveTittel: function() {
        return this.get('kapittel') + ". " + this.get('tittel');
    }.property('kapittel', 'tittel')
});