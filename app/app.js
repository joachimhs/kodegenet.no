var Kodegenet = Ember.Application.create();

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');

Kodegenet.Store = DS.Store.extend({
    adapter:  "DS.RESTAdapter"
});

