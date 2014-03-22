Kodegenet.ChapterMenuItemView = Ember.View.extend({
    templateName: 'chapter-menu-item',

    isSelected: function() {
        return this.get('chapter.id') === this.get('controller.controllers.chapter.model.id');
    }.property('controller.controllers.chapter.model.id', 'chapter.id')
});