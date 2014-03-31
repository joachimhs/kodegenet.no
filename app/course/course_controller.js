Kodegenet.CourseController = Ember.ObjectController.extend({
    needs: ['chapter','courses','chapterOppgave'],
    coursePopoverShowing: false,
    chapterPopoverShowing: false,
    subchapterPopoverShowing: false,

    actions: {
        toggleCoursePopover: function() {
            this.set('chapterPopoverShowing', false);
            this.set('subchapterPopoverShowing', false);
            this.toggleProperty('coursePopoverShowing');
        },

        toggleChapterPopover: function() {
            this.set('coursePopoverShowing', false);
            this.set('subchapterPopoverShowing', false);
            this.toggleProperty('chapterPopoverShowing');
        },

        toggleSubchapterPopover: function() {
            this.set('chapterPopoverShowing', false);
            this.set('coursePopoverShowing', false);
            this.toggleProperty('subchapterPopoverShowing');
        },

        selectChapter: function(chapter) {
            this.hidePopovers();
            this.set('selectedSubchapter', null);
            this.transitionToRoute('chapter', chapter);
        },

        selectCourse: function(course) {
            this.hidePopovers();
            this.set('selectedSubchapter', null);
            this.set('controllers.chapter.model', null);
            this.transitionToRoute('course', course);
        },

        scrollToSubchapter: function(subchapter) {
            this.set('selectedSubchapter', subchapter);
            this.hidePopovers();

            var anchor = subchapter.get('id');

            if (anchor) {
                var elem = $('#' + anchor);
                if (elem && elem.offset()) {
                    $('body').scrollTop(elem.offset().top - 60);
                }
            }
        }
    },

    hidePopovers: function() {
        this.set('chapterPopoverShowing', false);
        this.set('coursePopoverShowing', false);
        this.set('subchapterPopoverShowing', false);
    },

    coursePopoverShowingObserver: function() {
        if (this.get('coursePopoverShowing')) {
            $('#coursePopover').removeClass('popnomore');
        } else {
            $('#coursePopover').addClass('popnomore');
        }


    }.observes('coursePopoverShowing'),

    chapterPopoverShowingObserver: function() {
        if (this.get('chapterPopoverShowing')) {
            $('#chapterPopover').removeClass('popnomore');
        } else {
            $('#chapterPopover').addClass('popnomore');
        }
    }.observes('chapterPopoverShowing'),

    subchapterPopoverShowingObserver: function() {
        if (this.get('subchapterPopoverShowing')) {
            $('#subchapterPopover').removeClass('popnomore');
        } else {
            $('#subchapterPopover').addClass('popnomore');
        }

    }.observes('subchapterPopoverShowing')
});