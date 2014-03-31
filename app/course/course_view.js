Kodegenet.CourseView = Ember.View.extend({
    didInsertElement: function() {
        $(window).scroll( function() {
            if ($(window).scrollTop() > 100) {
                $('#submenu').addClass('floatingTop');
                //$('#singlelogo').addClass('singlelogoimage');
            } else {
                $('#submenu').removeClass('floatingTop');
                //$('#singlelogo').removeClass('singlelogoimage');
            }
        } );
    }
});

