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

            document.getElementById('DATE').innerHTML = data.DATE;
            document.getElementById('WELCOME').innerHTML = data.WELCOME;
            document.getElementById('DATE2').innerHTML = data.DATE2;
            document.getElementById('WEDDING').innerHTML = data.WEDDING;
            document.getElementById('DATE3').innerHTML = data.DATE3;
            document.getElementById('RECEPTION').innerHTML = data.RECEPTION;
            document.getElementById('HOTEL').innerHTML = data.HOTEL;
            document.getElementById('WEDDING_DAY').innerHTML = data.WEDDING_DAY;
            document.getElementById('PERU').innerHTML = data.PERU;
            document.getElementById('RSVP').innerHTML = data.RSVP;
            document.getElementById('ABOUT_US').innerHTML = data.ABOUT_US;
            // Add more elements as needed
        });
}
