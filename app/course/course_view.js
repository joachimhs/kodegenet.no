Kodegenet.CourseView = Ember.View.extend({
    didInsertElement: function() {
        Ember.$(window).scroll(function () {
            if (Ember.$(window).scrollTop() > 568) {
                Ember.$('#submenu').addClass('floatingTop');
                //$('#singlelogo').addClass('singlelogoimage');
            } else {
                Ember.$('#submenu').removeClass('floatingTop');
                //$('#singlelogo').removeClass('singlelogoimage');
            }
        });
    }
});

