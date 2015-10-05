Kodegenet.CourseIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('course');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/courses/' + model.get('id'));

        document.title = model.get('title') + " - Kodegenet";


    }
});