Kodegenet.ValidatingTextfieldComponent = Ember.TextField.extend({
    valueEntered: false,
    valueTyping: false,

    focusOut: function() {
        this.set('valueEntered', true);
        this.set('valueTyping', false);
    },

    keyDown: function() {
        this.set('valueEntered', false);
        this.set('valueTyping', true);
    },

    valueValidObserver: function() {
        var valid = false;

        if (this.get('minLength') && this.get('valueEntered') === true) {
            valid = this.get('value.length') >= this.get('minLength');
        } else {
            valid = true;
        }

        this.set('valueValid', valid);
    }.observes('valueEntered', 'value', 'minLength').on('init')

});