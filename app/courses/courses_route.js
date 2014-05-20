Kodegenet.CoursesRoute = Ember.Route.extend({
    model: function() {
        /*var courses = [];

        courses.pushObject(Ember.Object.create({
            id: "raspi",
            title: "Raspberry Pi",
            intro: "I løpet av denne boken skal vi bygge en radiostyrt bil. I tillegg til å bygge selve bilen, skal vi også installere et linux-basert operativsystem på en liten mini-datamaskin, kalt RaspberryPi. Deretter skal vi lære nok om Linux slik at vi kan bruke operativsystemet fra kommandolinjen. Vi skal konfigurere RaspberryPi datamaskinen som et trådløst aksesspunkt før vi skal lære hvordan vi kan bruke programmeringsspråket JavaScript for å kunne kommunisere med den radiostyrte bilen via en hvilken som helst enhet utstyrt med en nettleser og mulighet til å koble seg til et trådløst nettverk.",
            imageSrc: "/images/raspi_course_logo.png"
        }));

        return courses;*/

        return this.store.find('course');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        if (ga) ga('send', 'pageview', '/courses');

        document.title = 'Kursoversikt - Kodegenet';
    }
});