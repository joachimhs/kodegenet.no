Kodegenet.CoursesIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('courses');
    }
});