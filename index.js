let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");

function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  isAlive = true;
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  draw();
}

function draw() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
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
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    draw();
  }
}

function getRandomCard() {
  return Math.floor(Math.random() * 11) + 1;
}

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  shosSoution();
}
