Kodegenet.ChapterController = Ember.ObjectController.extend({
    queryParams: ['oppgave'],

    oppgaveObserver: function() {
        var oppgave = this.get('oppgave');

        console.log('Oppgave: ') ;
        console.log(this.get('oppgave'));


        if (oppgave) {
            var controller = this;
            setTimeout(function() {
                Ember.run.schedule('afterRender', this, function(){
                    console.log('scrolling in after render');
                    controller.scrollToSubchapter(oppgave);
                }, 1);
            }, 1000);
        }
    }.observes('oppgave'),

    scrollToSubchapter: function(subchapter) {
        this.set('selectedSubchapter', subchapter);
        //this.hidePopovers();

        var anchor = subchapter;

        console.log('scrolling to subchapter: ' + subchapter);
        console.log(anchor);

        if (anchor) {
            var elem = $('#' + anchor);
            if (elem && elem.offset()) {
                $('body').scrollTop(elem.offset().top - 60);
            }
        }
    }
});