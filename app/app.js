var Kodegenet = Ember.Application.create({
    ready: function() {
        this.register('session:setting', Kodegenet.SettingController, {singleton: true});
        this.register('session:session', Kodegenet.SessionController, {singleton: true});
        this.inject('controller', 'settings', 'session:setting');
        this.inject('controller', 'session', 'session:session');
        this.inject('controller:setting', 'store', 'store:main');
        this.inject('component:shopping-cart', 'session', 'session:session');
    },

    createCookie: function(name, value, days) {
        var expires = null;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    },

    readCookie:function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    eraseCookie:function (name) {
        this.createCookie(name, "", -1);
    }
});

DS.RESTAdapter.reopen({
    namespace: 'json'
});

Kodegenet.Adapter = DS.RESTAdapter.extend();

Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');
Ember.Inflector.inflector.irregular('productCategory', 'productCategories');
Ember.Inflector.inflector.irregular('figur', 'figurer');
Ember.Inflector.inflector.irregular('sms', 'smses');

Kodegenet.ApplicationStore = DS.Store.extend({
    adapter:  "Kodegenet.Adapter"
});

Kodegenet.UpdateAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.PageAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.SettingAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.EventAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ProductCategoryAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ProductAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.TrackAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.FigurAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.CourseAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ChapterAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.SubchapterAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});

Kodegenet.ShoppingCartAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.CartProductAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.UserAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.OrderAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.InstagramPhotoAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.EventParticipantAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.EventAdapter = Kodegenet.Adapter.extend({
    namespace: 'kodegenet'
});

Kodegenet.SmsAdapter = Kodegenet.Adapter.extend({
    namespace: 'json/data'
});
