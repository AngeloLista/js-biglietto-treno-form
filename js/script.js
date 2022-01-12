console.log('JS OK');

// Richiesta informazioni utente
const name = document.getElementById("name").value;
console.log(name);

const distance = document.getElementById("distance").value;
console.log(distance);

const age = document.getElementById("age").value;
console.log(age);

// Calcolo prezzo
let price = distance * 0.21;

// Sconti per età
let priceUnder18 = price * 0.80;
let priceOver65 = price * 0.60;

if (age === "over65") {
    price = priceOver65;
    console.log(`Hai ricevuto lo sconto Over 65. Il prezzo del tuo biglietto è di ${priceOver65}€.`);
} else if (age === "under18") {
    price = priceUnder18;
    console.log(`Hai ricevuto lo sconto Over 18. Il prezzo del tuo biglietto è di ${priceUnder18}€.`);
} else {
    console.log(`Il prezzo del tuo biglietto è di ${price}€.`);
}