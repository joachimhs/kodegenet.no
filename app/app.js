var Kodegenet = Ember.Application.create();

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Kodegenet.Store = DS.Store.extend({
    adapter:  "DS.RESTAdapter"
});