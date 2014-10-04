Kodegenet.Chapter = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    subchapters: DS.hasMany('subchapter', {async: true}),
    slides: DS.attr('string'),
    kapittel: DS.attr('number'),
    oneliner: DS.attr('string'),
    intro: DS.attr('string'),

    slideUrl: function() {
        return '/reveal.html?ids%5B%5D=' + this.get('id');
    }.property('id'),

    chapterTittel: function() {
        return this.get('kapittel') + ". " + this.get('tittel');
    }.property('kapittel', 'tittel'),

    sortedSubchapters: function() {
        var subchapters = this.get('subchapters');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:subchapters, sortProperties: ['kapittel'] }
        );

        return sortedResult;
    }.property('subchapters.length')
});