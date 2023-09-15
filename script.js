// Define a variable to store the selected language (default to English)
let currentLanguage = 'en';

// Function to change the language
function changeLanguage(language) {
    currentLanguage = language;
    translatePage();
}

// Function to translate the page content
function translatePage() {
    fetch(`${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            // Replace content with translated text
            document.getElementById('welcome_message').textContent = data.welcome_message;
            document.getElementById('about_us').textContent = data.about_us;
            document.getElementById('contact_us').textContent = data.contact_us;
            // Add more elements as needed
        });
}

// Initialize translation
translatePage();
