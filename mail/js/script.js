const mailsArray = ["pippopluto123@gmail.com", "plutopippo345@gmail.com", "papepluto567@gmail.com", "papepippo789@gmail.com"];
let found = false;

const userMail = prompt("Inserici la tua mail");

if (userMail.includes("@") && userMail.includes(".")) {
    for (let i = 0; i < mailsArray.length; i++) {
        const thisElement = mailsArray[i];
        if (userMail.toLowerCase() === thisElement.toLowerCase()) {
            found = true;
            break;
        }
    }
    if (found) {
        alert("Puoi accedere");
    } else {
        alert("Non puoi accedere");
    }
} else {
    alert("Non hai inserito una mail");
}