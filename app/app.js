var Kodegenet = Ember.Application.create();

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Kodegenet.Adapter = DS.RESTAdapter.extend();

Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');

Kodegenet.Store = DS.Store.extend({
    adapter:  "Kodegenet.Adapter"
});

Kodegenet.UpdateAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});