Kodegenet.MypageSmsIndexController = Ember.Controller.extend({
   actions: {
       sendSms: function() {
           var newSmsMessage = this.get('newSmsMessage');
           var newSmsName = this.get('newSmsName');
           var newSmsRecipients = this.get('newSmsRecipients');

           if (newSmsMessage && newSmsName && newSmsRecipients) {
                var payload = {
                    smsMessage: newSmsMessage,
                    name: newSmsName,
                    smsRecipients: newSmsRecipients
                };

               $.ajax({
                   type: "POST",
                   url: '/kodegenet/sendSms',
                   data: JSON.stringify(payload),
                   success: function(data, textStatus, jqXHR) {
                    console.log('SUCCESS!');
                   },
                   dataType: 'application/json'
               });
           }
       }
   }
});