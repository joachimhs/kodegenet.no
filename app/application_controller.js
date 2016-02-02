Kodegenet.ApplicationController = Ember.ObjectController.extend({
    sortProperties: ['publishedDate'],
    sortAscending: false,

    init: function() {
        console.log('Application Controller init');

        var controller = this;

        this.store.find('setting').then(function(data) {
            console.log(data.content);
            data.content.forEach(function(setting) {
                console.log(setting);
                var id = setting.id;
                var value = setting._data.settingsValue;

                console.log(id + " ::: " + value);
                controller.settings.set(setting.id,  value);
            });
        });

        this.reuseOrGenerateNewSession();
    },

    actions: {
        acceptCookies: function() {

            $.ajax({
                type: 'POST',
                url: '/kodegenet/acceptCookies',
                success: function(res, status, xhr) {

                },
                error: function(xhr, status, err) {

                }

            });
        },

        doLogOut: function() {
            var self = this;
            $.ajax({
                type: 'POST',
                url: '/kodegenet/auth/logout',

                success: function (res, status, xhr) {
                    Kodegenet.eraseCookie("uuid");
                    self.set('session.session', null);
                    self.set('session.shoppingCart', null);
                }
            });
        }
    },

    reuseOrGenerateNewSession: function() {
        var self = this;

        $.ajax({
            type: 'POST',
            url: '/kodegenet/createSession',

            success: function(res, status, xhr) {
                console.log(res.session.id);
                //if (res.session.authenticated === true) {
                    Kodegenet.createCookie("uuid", res.session.id, 30);
                    console.log('accepts cookies:');
                    console.log(res.session.acceptedCookies);

                    var payload = res.session;
                    var sessionObject = self.store.push('session', payload);
                    self.set('session.session', sessionObject);

                    //self.set('controller.session.acceptedCookies', res.session.acceptedCookies === true );

                    self.store.find('shoppingCart', res.session.id).then(function(data) {
                        self.set('session.shoppingCart', data);
                    });
                //}
            },
            error: function(xhr, status, err) { console.log("error: " + status + " error: " + err); }
        });
    },

    coursesObserver: function() {
        if (this.get('model.courses')) {
            var sortedCourses = Em.ArrayProxy.createWithMixins(
                Ember.SortableMixin,
                { content:this.get('model.courses'), sortProperties: ['sortIndex'], sortAscending: true }
            );

            this.set('model.sortedCourses', sortedCourses);
        }
    }.observes('model.courses'),

    tracksObserver: function() {
        if (this.get('model.tracks')) {
            var sortedTracks= Em.ArrayProxy.createWithMixins(
                Ember.SortableMixin,
                { content:this.get('model.tracks'), sortProperties: ['sortIndex'], sortAscending: true }
            );

            this.set('model.sortedTracks', sortedTracks);
        }
    }.observes('model.tracks'),

    sortedEvents: function() {
        var events = this.get('events');

        var sortedResult = Em.ArrayProxy.createWithMixins(
            Ember.SortableMixin,
            { content:events, sortProperties: ['date'] }
        );

        return sortedResult;
    }.property('events.@each.date'),

    futureEvents: function() {
        var events = [];

        this.get('sortedEvents').forEach(function(event) {
            if (event.get('isInFuture') && event.get('isVisible')) {
                events.pushObject(event);
            }
        });

        return events;
    }.property('sortedEvents')
});