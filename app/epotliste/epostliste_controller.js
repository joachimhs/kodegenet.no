Kodegenet.EpostlisteController = Ember.ObjectController.extend({
    init: function() {
        this.set('model', this.store.find('page', 'epostlister'));
    }
});