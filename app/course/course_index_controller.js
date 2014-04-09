Kodegenet.CourseIndexController = Ember.ObjectController.extend({
    actions: {
        navigateToSubchapter: function(chapter, subchapter) {
            console.log('navigating to subchapter: ' + subchapter.get('id'));
            this.transitionToRoute('chapter', chapter);

            if (subchapter) {
                var controller = this;
                setTimeout(function() {
                    Ember.run.schedule('afterRender', this, function(){
                        console.log('scrolling in after render');
                        controller.scrollToSubchapter(subchapter);
                    }, 1);
                }, 250);
            }
        }
    },

    scrollToSubchapter: function(subchapter) {
        this.set('selectedSubchapter', subchapter);
        //this.hidePopovers();

        var anchor = subchapter.get('id');

        if (anchor) {
            var elem = $('#' + anchor);
            if (elem && elem.offset()) {
                var body = $("html, body");
                body.animate({scrollTop:elem.offset().top - 100}, '500', 'swing', function() { });
            }
        }
    }
});