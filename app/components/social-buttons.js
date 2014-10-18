Kodegenet.SocialButtonsComponent = Ember.Component.extend({
    classNames: ['fb-like'],
    attributeBindings: ['dataHref:data-href', "dataLayout:data-layout", "dataAction:data-action", "dataShowFaces:data-show-faces", "dataShare:data-share", "dataKidDirectedSite:data-kid-directed-site", "dataRef:data-ref"],
    dataHref: window.location.href,
    dataLayout: 'button',
    dataAction: 'like',
    dataShowFaces: 'true',
    dataShare: 'true',
    dataKidDirectedSite: "true",
    dataRef: "kodegenet_fb_referral",

    didInsertElement: function() {
        var self = this;

        console.log('didInsertElement: Social Buttons:' + this.get('currentPath'));
        //Ember.run.schedule('afterRender', this.rerender());
    },

    setupFbLike: function(){
        FB.XFBML.parse();
    }.on('didInsertElement'),

    currentPathObserver: function() {
        var self  = this;

        Ember.run.later(function() {
            console.log('New URL: ' + window.location.href);
            self.set('dataHref', window.location.href);
            self.rerender();
        }, 500);
    }.observes('model')

    //<div class="fb-like" data-href="/" data-layout="button" data-action="" data-show-faces="" data-share="true"></div>
});
