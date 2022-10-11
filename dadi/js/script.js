const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

if (userNumber > computerNumber) {
    alert("Hai vinto!");
} else if (computerNumber > userNumber) {
    alert("Ha vinto il computer");
} else {
    alert("Pareggio");
}