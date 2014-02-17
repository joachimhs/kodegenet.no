Kodegenet.RevealFrameView = Ember.View.extend({
    tagName: "iframe",
    content: null,
    attributeBindings: ["width", "height", "src"],
    width: 700,
    height: 500
});