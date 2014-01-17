var Kodegenet = Ember.Application.create();

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');

Kodegenet.Store = DS.Store.extend({
    adapter:  "DS.RESTAdapter"
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
        }
    }
});
Kodegenet.ChapterIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('chapter');
    }
})
Kodegenet.ChapterRoute = Ember.Route.extend({
    model: function(chapter) {
        return this.store.find('chapter', chapter.chapter_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/chapter' + model.get('id'));

        document.title = 'Kodegenet Kapittel - ' + model.get("tittel");
    }
});
Kodegenet.CourseController = Ember.ObjectController.extend({

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
Kodegenet.OppgaveRoute = Ember.Route.extend({
    model: function(oppgave) {
        return this.store.find('oppgave', oppgave.oppgave_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/oppgave' + model.get('id'));

        document.title = 'Kodegenet Oppgave - ' + model.get("tittel");
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

        document.title = 'Kodegenet Kursoversikt';
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
Ember.Handlebars.registerBoundHelper('markdown', function(property) {
    var converter = new Showdown.converter();
    if (property !== null) {
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
Kodegenet.Chapter = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string'),
    oppgaver: DS.hasMany('oppgave', {async: true})
});
Kodegenet.Course = DS.Model.extend({
    chapters: DS.hasMany('chapter', {async: true}),
    name: DS.attr('string'),
    title: DS.attr('string'),
    intro: DS.attr('string'),
    imageSrc: DS.attr('string')
});
Kodegenet.Oppgave = DS.Model.extend({
    tittel: DS.attr('string'),
    content: DS.attr('string')
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