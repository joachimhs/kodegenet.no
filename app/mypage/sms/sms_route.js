Kodegenet.MypageSmsRoute = Ember.Route.extend({
   model: function() {
       return Ember.RSVP.hash({
            smses: this.store.find('sms')
       });
   }
});