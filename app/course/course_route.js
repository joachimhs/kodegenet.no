Kodegenet.CoursesCourseRoute = Ember.Route.extend({
    model: function(course) {
        return this.store.find('course', course.course_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/courses' + model.get('id'));

        document.title = 'Kodegenet Kurs - ' + model.get('title');


    }
});