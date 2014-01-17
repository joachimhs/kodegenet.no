Kodegenet.CourseChapterRoute = Ember.Route.extend({
    model: function(chapter) {
        return this.store.find('chapter', chapter.chapter_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/chapter' + model.get('id'));

        document.title = 'Kodegenet Kapittel - ' + model.get("tittel");
    }
});