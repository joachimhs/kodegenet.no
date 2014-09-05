Kodegenet.Course = DS.Model.extend({
    chapters: DS.hasMany('chapter', {async: true}),
    name: DS.attr('string'),
    title: DS.attr('string'),
    intro: DS.attr('string'),
    imageSrc: DS.attr('string'),
    content: DS.attr('string'),
    submenuContent: DS.attr('string'),
    shortIntro: DS.attr('string'),
    sortIndex: DS.attr('number'),
    visible: DS.attr('boolean'),
    largeImage: DS.attr('string'),

    sortedChapters: function() {
        var chapters = this.get('chapters');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:chapters, sortProperties: ['kapittel'] }
        );

        return sortedResult;
    }.property('chapters.length')
});