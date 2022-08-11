const whatsappURL = 'https://wa.me/+{country}{number}';

// Initialize elements
let phoneInput = document.getElementById("phone-number");
let countrySelector = document.getElementById("phone-code");
let goButton = document.getElementById("go-button");

let countryCode = countrySelector.selectedOptions[0].value;
let phoneNumber = "";

countrySelector.addEventListener("change", async () => {
    countryCode = countrySelector.selectedOptions[0].value;
    phoneInput.focus();
});

countrySelector.addEventListener("close", async () => {
    blur.call(document.querySelectorAll('#phone-code'));
});

phoneInput.addEventListener("input", async () => {
    phoneNumber = phoneInput.value;
});

goButton.addEventListener("click", async () => {
    if (phoneNumber !== "") {
        let newURL = whatsappURL.replace('{country}', countryCode).replace('{number}', phoneNumber);
        //console.log(newURL);
        chrome.tabs.create({ url: newURL });
    }
});

function focus() {
    [].forEach.call(this.options, function(opt) {
        opt.textContent = opt.getAttribute('data-flag') + ' ' + opt.getAttribute('data-name') + ' (+' + opt.getAttribute('value') + ')';
    });
}

function blur() {
    [].forEach.call(this.options, function(opt) {
        opt.textContent = opt.getAttribute('data-flag') + ' +' + opt.getAttribute('value');
    });
}

[].forEach.call(document.querySelectorAll('#phone-code'), function(s) {
    s.addEventListener('focus', focus);
    s.addEventListener('blur', blur);
    blur.call(s);
});
