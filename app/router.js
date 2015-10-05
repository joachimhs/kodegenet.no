Kodegenet.Router = Ember.Router.extend({
    location: 'history'
});

Kodegenet.Router.map(function() {
    this.resource('index', {path: "/"}, function() { });
    this.resource("track", {path: "/track/:track_id"}, function() {
        this.resource('courses', {path: "/courses"}, function() {
            this.resource('course', {path: "/:course_id"}, function() {
                this.resource('chapter', {path: "/chapter/:chapter_id"}, function() {
                    this.route('oppgave', {path: "/oppgave/:oppgave_id"});
                });
            });
        });
    });

    this.resource('page', {path: '/page/:page_id'});
    this.route('om');
    this.resource('kodeklubb', {path: "/kodeklubb"}, function() {
        this.route('event', {path: "/event/:event_id"});
    });

    this.resource('event', {path: "/event"}, function() {
        this.route('paamelding', {path: "/paamelding/:event_id"});
    });

    this.route("news", {path: "/news/:update_id"});
    this.route("newsIndex", {path: "/news"});

    this.resource("shop", function() {
        this.route('product', {path: '/product/:product_id'});
    });

    this.route('epostliste');
    this.route('emailVerificationTokens');

    this.route('makerspace', function() {
        this.route('event', {path: "/event/:event_id"});
    });
    this.route('medlem');

    this.route('login');
    this.route('userRegistered');
    this.route('passwordReset');

    this.resource('mypage', {path: '/mypage'}, function() {
        this.route('orders', {path: '/orders'}, function() {
            this.route('order', {path: '/confirmation/:order_id'});
        });
    });
});