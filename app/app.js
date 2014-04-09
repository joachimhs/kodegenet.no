var Kodegenet = Ember.Application.create({
    ready: function() {
        this.register('session:setting', Kodegenet.SettingController, {singleton: true});
        this.inject('controller', 'settings', 'session:setting');
        this.inject('controller:setting', 'store', 'store:main');
    }
});

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

Kodegenet.PageAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.SettingAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});