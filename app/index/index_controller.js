Kodegenet.IndexController = Ember.ObjectController.extend({
    needs: ['courses', 'application'],

    sortProperties: ['publishedDate'],
    sortAscending: false,

    numVisibleCourses: 0,

    currPhoto: 1,

    actions: {
        scrollToContent: function() {
            var targetOffset= $('#indexContent').offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 750);
        },

        scrollToKurs: function() {
            var targetOffset= $('#indexKurs').offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 750);
        },

        scrollToEpostlister: function() {
            var targetOffset= $('#indexEpostliste').offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 750);
        }
    },

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

        (new Image()).src = '/figurer/forside_karusell1.jpg';
        (new Image()).src = '/figurer/forside_karusell2.jpg';
        (new Image()).src = '/figurer/forside_karusell3.jpg';
        (new Image()).src = '/figurer/forside_karusell4.jpg';
        (new Image()).src = '/figurer/forside_karusell5.jpg';
        (new Image()).src = '/figurer/forside_karusell6.jpg';
        Ember.run.later(function() {
            controller.nextPhoto();
        }, 15000);
    },

    nextPhoto: function() {
        console.log('nextPhoto');
        var controller = this;

        var currPhoto = this.get('currPhoto');

        if (!currPhoto || currPhoto >= 6) {
            currPhoto = 1;
        } else {
            currPhoto++;
        }

        this.set('currPhoto', currPhoto);

        Ember.run.later(function() {
            controller.nextPhoto();
        }, 15000);
    },

    updateBackground: function() {
        console.log('currPhotoObserver');
        var currentPhoto = '/figurer/forside_karusell' + this.get('currPhoto') + '.jpg';

        $('#indexCarousel').fadeOut(450, function() {
            $('#indexCarousel').css('background', 'url("' + currentPhoto + '") 0% 50% no-repeat').css('background-size', 'cover');
            $('#indexCarousel').fadeIn(450);
        });

        //component.set('shortDescription', component.currentPhotoDescription());
    }.observes('currPhoto').on('init'),

    indexColClassName: function() {
        if (this.get('numVisibleCourses') === 1) {
            return "col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-4";
        } else if (this.get('numVisibleCourses') === 2) {
            return "col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-1";
        } else {
            return "col-xs-12 col-sm-6 col-md-4 col-lg-4";
        }
    }.property('numVisibleCourses'),

    sortedUpdates: function() {
        console.log("SORTING UPDATED");
        var updates = this.get('updates');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:updates, sortProperties: ['publishedDate'], sortAscending: false }
        );

        return sortedResult;
    }.property('updates.@each.publishedDate'),

    sortedUpdatesLimited: function() {
        var limited = [];
        if (this.get("sortedUpdates")) {
            limited = this.get('sortedUpdates').toArray().splice(0, 5);
        }
        return limited;
    }.property('sortedUpdates'),

    sortedInstagrams: function() {
        console.log("SORTING Instagram");
        var instagrams = this.get('instagramPhotos');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:instagrams, sortProperties: ['createdTime'], sortAscending: false }
        );

        return sortedResult;
    }.property('updates.@each.publishedDate'),

    sortedInstagramsLimited: function() {
        var limited = [];
        if (this.get("sortedInstagrams")) {
            limited = this.get('sortedInstagrams').toArray().splice(0, 10);
        }
        return limited;
    }.property('sortedInstagrams')
});