export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
        en: {
            id: 'Identifier',
            openingHours: {
                missing: 'Missing Opening Hours',
                name: 'Opening Hours'
            },
            meetups: 'Meetups'
        },
        fr: {
            id: 'Identifiant',
            openingHours: {
                missing: "Heures d'ouverture manquantes",
                name: "Heures d'ouverture"
            },
            meetups: 'Rencontres'
        }
    }
}))