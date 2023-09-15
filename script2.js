function changeLanguage(language) {
    i18next.changeLanguage(language);
}

i18next.init({
    lng: 'en', // Set the default language
    resources: {
        en: {
            translation: {
                welcome_message: 'Welcome to our website!',
                about_us: 'About Us',
                contact_us: 'Contact Us',
                // Add more translations for English
            }
        },
        es: {
            translation: {
                welcome_message: 'Bienvenidos a nuestro sitio web!',
                about_us: 'Sobre nosotros',
                contact_us: 'Contáctenos',
                // Add more translations for Spanish
            }
        }
    }
}, function(err, t) {
    // Initialize translations
    updateContent();
});

function updateContent() {
    document.getElementById('welcome_message').textContent = i18next.t('welcome_message');
    document.getElementById('about_us').textContent = i18next.t('about_us');
    document.getElementById('contact_us').textContent = i18next.t('contact_us');
    // Update more content as needed
}
