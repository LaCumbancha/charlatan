const whatsappURL = 'https://wa.me?+{country}{number}';

// Initialize elements
let phoneInput = document.getElementById("phone-number");
let countrySelector = document.getElementById("phone-code");
let goButton = document.getElementById("go-button");

let countryCode = countrySelector.selectedOptions[0].value;
let phoneNumber = "";

countrySelector.addEventListener("change", async () => {
    countryCode = countrySelector.selectedOptions[0].value
});

phoneInput.addEventListener("input", async () => {
    phoneNumber = phoneInput.value
});

goButton.addEventListener("click", async () => {
    let newURL = whatsappURL.replace('{country}', countryCode).replace('{number}', phoneNumber)
    console.log(newURL)
    chrome.tabs.create({ url: newURL });
});
