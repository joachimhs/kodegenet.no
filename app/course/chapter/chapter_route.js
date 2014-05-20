Kodegenet.ChapterRoute = Ember.Route.extend({
    model: function(chapter) {
        return this.store.find('chapter', chapter.chapter_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/chapter' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});