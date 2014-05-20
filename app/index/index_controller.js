Kodegenet.IndexController = Ember.ArrayController.extend({
    needs: ['courses'],

    sortProperties: ['publishedDate'],
    sortAscending: false,

    numVisibleCourses: 0,

    init: function() {
        var controller = this;

        this.store.find('page', 'index').then(function(data) {
            console.log('page received');
            console.log(data);
            controller.set('page', data);
        });

        var courses = [];

        this.store.find('course').then(function(data) {
            data.forEach(function(course) {
               courses.pushObject(course);
                if (course.get('visible')) {
                    controller.set('numVisibleCourses', controller.get('numVisibleCourses') + 1);
                }
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:courses, sortProperties: ['sortIndex'] }
        );

        controller.set('courses', sortedResult);
    },

    indexColClassName: function() {
        if (this.get('numVisibleCourses') === 1) {
            return "col-md-5 col-md-offset-4";
        } else if (this.get('numVisibleCourses') === 2) {
            return "col-md-5 col-md-offset-1";
        } else {
            return "col-md-4";
        }
    }.property('numVisibleCourses')
});