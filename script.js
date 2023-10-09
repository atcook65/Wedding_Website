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
            document.getElementById('DATE').textContent = data.DATE;
            document.getElementById('WELCOME').textContent = data.WELCOME;
            document.getElementById('DATE2').textContent = data.DATE2;
            document.getElementById('WEDDING').textContent = data.WEDDING;
            document.getElementById('DATE3').textContent = data.DATE3;
            document.getElementById('RECEPTION').textContent = data.RECEPTION;
            document.getElementById('HOTEL').textContent = data.HOTEL;
            document.getElementById('WEDDING_DAY').textContent = data.WEDDING_DAY;
            document.getElementById('PERU').textContent = data.PERU;
            document.getElementById('CUSCO').textContent = data.CUSCO;
            document.getElementById('ABOUT_US').textContent = data.ABOUT_US;
            // Add more elements as needed
        });
}

// Initialize translation
translatePage();
