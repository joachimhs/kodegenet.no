Kodegenet.MypageRoute = Ember.Route.extend({
    model: function() {
        var self = this;
        return Ember.RSVP.hash({
            //user: this.store.find('user', Kodegenet.readCookie('uuidToken'))
        });
    } 
});