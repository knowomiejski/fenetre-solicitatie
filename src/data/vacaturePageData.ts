import bannerBackground from '@/assets/fenêtre-online-solutions.jpg'
import type FenetrePage from '@/models/FenetrePage'

const vacaturePage:FenetrePage = {
    pageName: 'Vue vacature',
    pageTitle: 'Heeft Vue.js geen geheim voor jou?',
    pageDescription: 'kom bij werken voor mooie klanten en uitdagende projecten!',
    bannerPicture: bannerBackground,
    sections: [
        {
            title: 'Word jij onze Front-end developer (Vue.js)?',
            description: 'Wil jij gebruikers een unieke digitale ervaring bezorgen? En snapt hoe je gebruikers een prettige UX ervaring kunt geven met behulp van JavaScript frameworks? Dan is deze vacature precies wat je zoekt. Fenêtre garandeert je leuk werk voor diverse klanten.',
            callToAction: 'Soliciteer via e-mail',
        },
        {
            description: 'Je houdt je voornamelijk bezig met het ontwikkelen front-end applicaties voor onze business webapplicaties. Ook geef je aan wat de technische (on)mogelijkheden aan bij de functioneel ontwerpers, onze andere developers, testers en de grafisch vormgevers. Je bent dus een belangrijke schakel in het proces.'
        },
        {
            title: 'Dit vind je leuk om te doen:',
            list: [
                'Ontwikkelen in Vue.js.',
                'Werken in een scrumteams verschillende desciplines.',
                'Omgaan met nieuwe software en bijbehorende toepassingen.',
                'Werken aan uitdagende projecten met ieder zijn eigen dynamiek.',
            ]
        },
        {
            title: 'Wie zoeken we?',
            description: 'Je bent werkt nauw samen met onze backend developers. Onze business applicaties zijn o.a. ontwikkeld in Vue.js. We gebruiken hiervoor ons eigen ontwikkeld Silicon Low code platform, waarbij Vue.js technologie voor de frontend wordt gebruikt en .NET Core voor de backend.',
            list: [
                'Ontwikkelen in Vue.js.',
                'Werken in een scrumteams verschillende desciplines.',
                'Omgaan met nieuwe software en bijbehorende toepassingen.',
                'Werken aan uitdagende projecten met ieder zijn eigen dynamiek.',
            ]
        },
        {
            title: 'Daarnaast zou het helemaal geweldig zijn als je:',
            list: [
                'Bekend bent met andere JavaScript frameworks.',
                'Kennis hebt van .NET Core?',
                'Gevoel hebt voor UX en design.',
                'Kunt bowlen, borrelen en van stedentripjes houdt.',
            ]
        },
        {
            title: 'Wat we je bieden',
            list: [
                'Een goed uitgeruste werkplek in de CabFab in Den Haag of in HNK in Utrecht West.',
                'Supersnelle PC.',
                'Regelmatig kennissessies en goede ondersteuning om je persoonlijk te ontwikkelen.',
                'Afwisselend werk voor diverse klanten en in teamverband met slimme en leuke collega\'s.',
                'Uitstekend salaris, passend bij je opleiding en werkervaring.',
                'Persoonlijk opleidingsbudget, een bonusregeling en pensioenopbouw.',
                '25 vakantiedagen en 8% vakantiegeld.',
                'Flexibele werktijden.',
                'Een dagelijkse lunch.',
                'Een wekelijkse vrijdagmiddagborrel.',
                'Maandelijks met je collega\'s uit eten.',
                'Ieder jaar met iedereen een weekend er op uit.',
                'Werken bij een innovatieve, groeiende en solide organisatie.'
            ]
        },
        {
            description: 'Heb je andere wensen, dan kun je die kenbaar maken. We nemen jouw wensen serieus en kijken samen naar de mogelijkheden.'
        },
        {
            title: 'WAAROM WERKEN BIJ FENÊTRE?',
            description: 'Er heerst een informele werksfeer, waardoor je met plezier naar je werk gaat. Er is een efficiënte en flexibele bedrijfscultuur waar beslissingen snel worden genomen. Geen langdradige en overbodige procedures maar duidelijke afspraken. Alle medewerkers zijn ervaren op hun vakgebied en houden ervan mooie oplossingen te realiseren: de focus ligt op lekker werken met resultaat voor onszelf en de klant. Daarnaast is er elke dag verse koffie, een lunch die jezelf maakt, een vrijmibo op vrijdag en eind van de maand een kennissessie met afsluitend een diner.',
            linkHref: 'http://kubasplantje.nl',
            link: 'Lees verder over werken bij Fenêtre >'
        }
    ]
}

export {vacaturePage}