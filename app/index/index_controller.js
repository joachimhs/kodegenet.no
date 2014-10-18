Kodegenet.IndexController = Ember.ObjectController.extend({
    needs: ['courses'],

    sortProperties: ['publishedDate'],
    sortAscending: false,

    numVisibleCourses: 0,

    init: function() {
        var controller = this;


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
            return "col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-4";
        } else if (this.get('numVisibleCourses') === 2) {
            return "col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-1";
        } else {
            return "col-xs-12 col-sm-6 col-md-4 col-lg-4";
        }
    }.property('numVisibleCourses'),

    sortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'] }
        );

        return sortedResult;
    }.property('events.@each.date'),

    sortedUpdates: function() {
        console.log("SORTING UPDATED");
        var updates = this.get('updates');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:updates, sortProperties: ['publishedDate'], sortAscending: false }
        );

        return sortedResult;
    }.property('updates.@each.publishedDate')
});