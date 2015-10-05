Kodegenet.BlurTextFieldComponent = Ember.Component.extend({
    tagName: 'input',
    classNames: ['ember-text-field'],
    attributeBindings: ['type', 'value', 'size', 'pattern', 'name', 'min', 'max',
        'accept', 'autocomplete', 'autosave', 'formaction',
        'formenctype', 'formmethod', 'formnovalidate', 'formtarget',
        'height', 'inputmode', 'list', 'multiple', 'pattern', 'step',
        'width'],

    type: "text",

    focusOut: function(event) {
        console.log('<<<<focusOut>>>>>');
        this.sendAction('changedValue');
        console.log(event);
    },

    onBlur: function(event) {
        console.log('<<<<onBlur>>>>>');
        console.log(event);
    }
});