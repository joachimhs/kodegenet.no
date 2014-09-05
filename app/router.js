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
    this.resource('page', {path: '/page/:page_id'});
    this.route('om');
    this.resource('kodeklubb', {path: "/kodeklubb"}, function() {
        this.route('event', {path: "/event/:event_id"});
    });
    this.route('epostliste');
});