Kodegenet.VimeoPlayerComponent = Ember.Component.extend({
    tagName: 'iframe',
    classNames: ['small-vimeo-player'],
    attributeBindings: ['src', 'width', 'height', 'frameborder', 'webkitallowfullscreen', 'mozallowfullscreen', 'allowfullscreen'],
    width: 250,
    height: 140,
    frameborder: true,
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    allowfullscreen: true,

    src: function() {
        if (this.get('vimeoid')) {
            return "//player.vimeo.com/video/" + this.get('vimeoid');
        }
    }.property('vimeoid')
});