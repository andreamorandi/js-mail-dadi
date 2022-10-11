const mailsArray = ["pippopluto123@gmail.com", "plutopippo345@gmail.com", "papepluto567@gmail.com", "papepippo789@gmail.com"];
let found = false;

const userMail = prompt("Inserici la tua mail");

for (let i = 0; i < mailsArray.length; i++) {
    const thisElement = mailsArray[i];
    if (userMail === thisElement) {
        found = true;
    }
}

if (found) {
    alert("Puoi accedere");
} else {
    alert("Non puoi accedere");
}