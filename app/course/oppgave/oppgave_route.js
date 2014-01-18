Kodegenet.OppgaveRoute = Ember.Route.extend({
    model: function(chapter, oppgave) {
        return this.store.find('oppgave', oppgave.oppgave_id);
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        ga('send', 'pageview', '/oppgave' + model.get('id'));

        document.title = 'Kodegenet Oppgave - ' + model.get("tittel");
    }
});