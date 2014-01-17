Kodegenet.Router.map(function() {
    this.resource('index', {path: "/"}, function() { });
    this.resource('courses', {path: "/courses"}, function() {
        this.resource('course', {path: "/:course_id"}, function() {
            this.route('chapter', {path: "/chapter/:chapter_id"});
        });

    });
    this.route('om');
});