Kodegenet.ChapterOppgaveRoute = Ember.Route.extend({
    model: function(oppgave) {
        console.log('ChapterOppgaveRoute: ');
        console.log(oppgave);
        return this.store.find('oppgave', oppgave.oppgave_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/oppgave' + model.get('id'));

        document.title = model.get("tittel") + ' - Kodegenet';
    }
});