Kodegenet.PortfolioImagesComponent = Ember.Component.extend({
    init: function() {
        this._super();
        Ember.run.schedule('afterRender', function() {
            Ember.$(".insta-area").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                dots: true
            });
        });
    }
});