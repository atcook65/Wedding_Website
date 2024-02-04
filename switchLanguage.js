let currentLang = 'en'; // Default language

function switchLanguage(lang) {
    currentLang = lang;
    const script = document.createElement('script');
    script.src = `${lang}3.js`; // Load the appropriate language file
    document.head.appendChild(script);
    script.onload = () => {
        updateTexts();
    };
}

function updateTexts() {
    document.getElementById('pageTitle').textContent = texts.pageTitle;
    document.getElementById('rsvpHeader').textContent = texts.rsvpHeader;
    document.getElementById('celebrateWithUs').textContent = texts.celebrateWithUs;
    document.getElementById('fillDetails').textContent = texts.fillDetails;
    document.getElementById('labelFullName').textContent = texts.labelFullName;
    document.getElementById('labelEmailAddress').textContent = texts.labelEmailAddress;
    document.getElementById('labelAttendance').textContent = texts.labelAttendance;
    document.getElementById('selectOption').textContent = texts.selectOption;
    document.getElementById('optionYes').textContent = texts.optionYes;
    document.getElementById('optionNo').textContent = texts.optionNo;
    document.getElementById('optionMaybe').textContent = texts.optionMaybe;
    document.getElementById('labelGuests').textContent = texts.labelGuests;
    document.getElementById('labelMessage').textContent = texts.labelMessage;
    document.getElementById('submitBtn').textContent = texts.submitBtn;
    // Add more elements as needed
}

// Initially load the default language
switchLanguage(currentLang);
