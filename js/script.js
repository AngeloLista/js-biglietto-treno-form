console.log('JS OK');

// Recupero informazioni DOM
// Form
const name = document.getElementById("name");

const distance = document.getElementById("distance");

const age = document.getElementById("age");
const generateButton = document.getElementById("generate");
const cancelButton = document.getElementById("cancel");

// Ticket
const ticketSection =document.getElementById("ticket")
const namePlaceholder =document.getElementById("display-name")
const discountPlaceholder =document.getElementById("display-discount")
const carriagePlaceholder =document.getElementById("carriage")
const cpPlaceholder =document.getElementById("cp")
const pricePlaceholder =document.getElementById("display-price")

// Lego un evento al bottone

generateButton.addEventListener('click', function() {
    // Recupero i value
    const nameValue = name.value;
    const distanceValue = parseInt(distance.value);
    const ageValue = age.value;

    // Calcolo il prezzo
    let price = 0.21 * distance.value;
    let discountType = 'Tariffa ordinaria';
    console.log(price)
    console.log(age.value)

    // Calcolo lo sconto
    if (age.value === "over65") {
        price = price * 0.6;
        discountType = 'Tariffa Senior'
    } else if (age.value === "under18") {
        price = price * 0.8;
        discountType = 'Tariffa Giovani'
    }

    // Randomizzamiano la carrozza
    const carNum = Math.floor(Math.random() * 12) + 1;

    // Randomizziamo il CP
    const cpNum = Math.floor(Math.random() * (100000 - 90000))+ 90000; // Numero da 90000 a 99999

    //Math.floor(Math.radom() (max - min)) + min

    // Display result
    namePlaceholder.innerText = nameValue;
    pricePlaceholder.innerText = price.toFixed(2) + '€';
    discountPlaceholder.innerText = discountType;
    carriagePlaceholder.innerText = carNum;
    cpPlaceholder.innerText = cpNum;

    // Ticket visible add
    ticket.classList.add('visible');
})

cancelButton.addEventListener('click', function() {
    // Resetto i valori

    const fields = document.querySelectorAll('.form-field');



    name.value = '';
    age.value = 'over18';
    distance.value = 10;

    // Ticket visible remove
    ticket.classList.remove('visible');

})