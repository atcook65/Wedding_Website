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
            document.getElementById('HOTEL').textContent = data.HOTEL;
            document.getElementById('PERU').textContent = data.PERU;
            document.getElementById('CUSCO').textContent = data.CUSCO;
            document.getElementById('ABOUT_US').textContent = data.ABOUT_US;

            // Add more elements as needed
        });
}

// Initialize translation
translatePage();
