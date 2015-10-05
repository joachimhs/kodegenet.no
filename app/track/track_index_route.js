Kodegenet.TrackIndexController = Ember.ObjectController.extend({
    colClass: function() {
        var colclass = "col-md-12";

        if (this.get('courses.length') > 1) {
            colclass = "col-md-6";
        }

        return colclass;
    }.property('courses.length')
});