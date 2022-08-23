let firstCard = 6;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");

function startGane() {
  draw();
}

function draw() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "WOHOO! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent += sum;
  cardsEl.textContent += cards[0] + " " + cards[1];
}

function newCard() {
  let card = 11;
  sum += card;
  cards.push(card);
  draw();
}

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}
