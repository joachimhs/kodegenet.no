Kodegenet.InstagramPhoto = DS.Model.extend({
    "thumbnail": DS.attr('string'),
    "lowResolution": DS.attr('string'),
    "createdTime": DS.attr('number'),
    "postedBy": DS.attr('string'),
    "postedByPicture": DS.attr('string'),
    "caption": DS.attr('string'),
    "link": DS.attr('string'),

    usernameLink: function() {
        return "http://instagram.com/" + this.get("postedBy");
    }.property('postedBy')
});