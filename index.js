const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù£¨%µ?,;.:/!§";
const value = document.querySelector("#password-length");
const output = document.querySelector("#password-output");
let password = "";

function generatePassword() {
    let data = [];

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez sélectionner des critères");
        return;
    }

    for (i = 0; i < value.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    output.value = password;
    password = "";
    // console.log(value.value);

    // console.log(data[Math.floor(Math.random() * data.length)]);
}

generateButton.addEventListener("click", generatePassword);

output.addEventListener("mousedown", () => {
    navigator.clipboard.writeText(output.value);
    output.style.transform = "scale(1.3)";
    generateButton.textContent = "Copié !";
    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe";
    }, 2000);
});

output.addEventListener("mouseup", () => {
    output.style.transform = "scale(1)";
});
