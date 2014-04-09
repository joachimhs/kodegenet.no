Kodegenet.IndexController = Ember.ArrayController.extend({
    needs: ['courses'],

    sortProperties: ['publishedDate'],
    sortAscending: false,

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
            });
        });

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:courses, sortProperties: ['sortIndex'] }
        );

        controller.set('courses', sortedResult);
    }
});