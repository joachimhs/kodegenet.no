Kodegenet.EmailVerificationTokensController = Ember.Controller.extend({
    queryParams: ['sptoken'],
    spToken: null,
    tokenVerified: false,

    spTokenObserver: function() {
        var sptoken = this.get('sptoken');

        if (sptoken) {
            console.log("SPTOKEN!!!");
            console.log(sptoken);

            $.ajax({
                type: 'POST',
                url: '/json/emailVerificationTokens',
                data: JSON.stringify(loginData),

                success: function(res, status, xhr) {
                    if (res.verified) {
                        console.log('SUCCESSFUL VERIFICATION');
                        self.set('tokenVerified', true);
                    } else {
                        self.set('tokenVerified', false);
                    }
                },
                error: function(xhr, status, err) {
                    console.log("-------------\nerror: " + status + " error: " + err);
                    self.set('tokenVerified', false);
                }
            });
        }

        return sptoken;
    }.observes('sptoken')
});