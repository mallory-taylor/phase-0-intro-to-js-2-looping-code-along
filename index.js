for (let age = 30; age < 40; age++) {
    console.log(`I\'m ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(names, event) {
    let messageNames = [];
    for (let i = 0; i < names.length; i++) {
       messageNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messageNames;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown() {
    let countDown = 10;
    while (countDown > 0) {
        console.log(countDown--);
    }
    console.log(countDown);
}