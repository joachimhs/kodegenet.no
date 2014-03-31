var Kodegenet = Ember.Application.create();

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Kodegenet.Adapter = DS.RESTAdapter.extend();

Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');

Kodegenet.Store = DS.Store.extend({
    adapter:  "Kodegenet.Adapter"
});

Kodegenet.UpdateAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.PageAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});
Kodegenet.ChapterController = Ember.ObjectController.extend({

});
Kodegenet.ChapterIndexController = Ember.ObjectController.extend({
    actions: {
        visAlleOppgaverAction: function() {
            this.set('visAlleOppgaver', true);
        },

        skjulAlleOppgaverAction: function() {
            this.set('visAlleOppgaver', false);
        },

        visSlidesAction: function() {
            this.set('visSlides', true);
        },

        skjulSlidesAction: function() {
            this.set('visSlides', false);
        }
    }
});
Kodegenet.ChapterIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('chapter');
    }
});
Kodegenet.ChapterRoute = Ember.Route.extend({
    model: function(chapter) {
        return this.store.find('chapter', chapter.chapter_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/chapter' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});
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
Kodegenet.CourseIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('course');
    }
});
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


Kodegenet.ChapterOppgaveController = Ember.ObjectController.extend({

});
Kodegenet.ChapterOppgaveRoute = Ember.Route.extend({
    model: function(oppgave) {
        console.log('ChapterOppgaveRoute: ');
        console.log(oppgave);
        return this.store.find('oppgave', oppgave.oppgave_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/oppgave' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});
Kodegenet.CoursesIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('courses');
    }
});
Kodegenet.CoursesRoute = Ember.Route.extend({
    model: function() {
        /*var courses = [];

        courses.pushObject(Ember.Object.create({
            id: "raspi",
            title: "Raspberry Pi",
            intro: "I løpet av denne boken skal vi bygge en radiostyrt bil. I tillegg til å bygge selve bilen, skal vi også installere et linux-basert operativsystem på en liten mini-datamaskin, kalt RaspberryPi. Deretter skal vi lære nok om Linux slik at vi kan bruke operativsystemet fra kommandolinjen. Vi skal konfigurere RaspberryPi datamaskinen som et trådløst aksesspunkt før vi skal lære hvordan vi kan bruke programmeringsspråket JavaScript for å kunne kommunisere med den radiostyrte bilen via en hvilken som helst enhet utstyrt med en nettleser og mulighet til å koble seg til et trådløst nettverk.",
            imageSrc: "/images/raspi_course_logo.png"
        }));

        return courses;*/

        return this.store.find('course');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/courses');

        document.title = 'Kursoversikt - Kodegenet';
    }
});
Kodegenet.HeaderController = Ember.Controller.extend({
    init: function() {
        this._super();

        var pages = [];

        pages.pushObject(Ember.Object.create({
            id: 'home',
            name: "Home",
            route: 'index'
        }));

        pages.pushObject(Ember.Object.create({
            id: 'om',
            name: "Om Kodegenet",
            route: 'om'
        }));

        pages.pushObject(Ember.Object.create({
            id: 'courses',
            name: "Kurs",
            route: 'courses'
        }));

        this.set('pages', pages);
    }
});
Ember.Handlebars.registerBoundHelper('dmy', function(property) {
    if (property !== null) {
        var parsedDate = moment(property);
        return parsedDate.format("DD-MM-YYYY");
    }
});




Ember.Handlebars.registerBoundHelper('rawhtml', function(property) {
    console.log("rawhtml: " + property);
    if (property !== null) {
        return new Handlebars.SafeString(property);
    }
});
Ember.Handlebars.registerBoundHelper('markdown', function(property) {
    var converter = new Showdown.converter();
    if (property !== null) {
        Ember.run.schedule('afterRender', this, function(){
            console.log('scheduling to after render');
            Rainbow.color();
        }, 200);

        return new Handlebars.SafeString(converter.makeHtml(property));
    }
});
Kodegenet.IndexController = Ember.ArrayController.extend({
    needs: ['header'],

    contentObserver: function() {
        console.log('INDEX CONTROLLER OBSERVER');
        var pages = this.get('content');

        if (pages) {
            this.set('controllers.header.pages', pages);
        }

    }.observes('content.length')
});
Kodegenet.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/');

        document.title = 'Kodegenet Hjem';
    }
});
Kodegenet.IndexController = Ember.ArrayController.extend({
    sortProperties: ['publishedDate'],
    sortAscending: false
});
Kodegenet.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('update');
    }
    /*setupController: function(controller) {
        var updates = this.store.find('update');
        controller.set('updates', updates);
    }*/

});
Kodegenet.Chapter = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    oppgaver: DS.hasMany('oppgave', {async: true}),
    slides: DS.attr('string'),
    kapittel: DS.attr('number'),

    slideUrl: function() {
        return '/reveal.html?ids%5B%5D=' + this.get('id');
    }.property('id'),

    chapterTittel: function() {
        return this.get('kapittel') + ". " + this.get('tittel');
    }.property('kapittel', 'tittel')
});
Kodegenet.Course = DS.Model.extend({
    chapters: DS.hasMany('chapter', {async: true}),
    name: DS.attr('string'),
    title: DS.attr('string'),
    intro: DS.attr('string'),
    imageSrc: DS.attr('string'),
    content: DS.attr('string'),
    submenuContent: DS.attr('string')
});
Kodegenet.Oppgave = DS.Model.extend({
    tittel: DS.attr('string'),
    kapittel: DS.attr('number'),
    content: DS.attr('string'),
    screencastbox: DS.attr('string'),

    anchorid: function() {
        return "#" + this.get('id');
    }.property('id'),

    oppgaveTittel: function() {
        return this.get('kapittel') + ". " + this.get('tittel');
    }.property('kapittel', 'tittel')
});
Kodegenet.Page = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    visible: DS.attr('boolean')
});
Kodegenet.Update = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    route: DS.attr('string'),
    publishedDate: DS.attr('string'),
    image:  DS.attr('string')
});
Kodegenet.OmRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('page', "om");
    }
});
Kodegenet.RevealFrameView = Ember.View.extend({
    tagName: "iframe",
    content: null,
    attributeBindings: ["width", "height", "src"],
    width: 700,
    height: 500
});
Kodegenet.Router = Ember.Router.extend({
    location: 'history'
});

Kodegenet.Router.map(function() {
    this.resource('index', {path: "/"}, function() { });
    this.resource('courses', {path: "/courses"}, function() {
        this.resource('course', {path: "/:course_id"}, function() {
            this.resource('chapter', {path: "/chapter/:chapter_id"}, function() {
                this.route('oppgave', {path: "/oppgave/:oppgave_id"});
            });
        });
    });
    this.route('om');
});
Kodegenet.ChapterMenuItemView = Ember.View.extend({
    templateName: 'chapter-menu-item',

    isSelected: function() {
        return this.get('chapter.id') === this.get('controller.controllers.chapter.model.id');
    }.property('controller.controllers.chapter.model.id', 'chapter.id')
});