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