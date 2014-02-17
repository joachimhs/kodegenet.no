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