i18next.init({
  lng: 'en', // Set the default language
  resources: {
    en: {
      translation: {
        // Load English translations from en.json
      }
    },
    es: {
      translation: {
        // Load Spanish translations from es.json
      }
    }
  }
});
// Change the language when a user selects a different option
document.getElementById('language-selector').addEventListener('change', function () {
  const selectedLanguage = this.value;
  i18next.changeLanguage(selectedLanguage);
});

i18next.on('languageChanged', (lng) => {
  document.getElementById('welcome_message').textContent = i18next.t('welcome_message');
  document.getElementById('about_us').textContent = i18next.t('about_us');
  document.getElementById('contact_us').textContent = i18next.t('contact_us');
  // Update other elements as needed
});
