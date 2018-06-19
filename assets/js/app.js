/*
 * List that holds all cards
 */
const deck = [
  'fa fa-diamond',
  'fa fa-paper-plane-o',
  'fa fa-anchor',
  'fa fa-bolt',
  'fa fa-cube',
  'fa fa-anchor',
  'fa fa-leaf',
  'fa fa-bicycle',
  'fa fa-diamond',
  'fa fa-bomb',
  'fa fa-leaf',
  'fa fa-bomb',
  'fa fa-bolt',
  'fa fa-bicycle',
  'fa fa-paper-plane-o',
  'fa fa-cube'
];

// Get deck playing field
const deckField = document.querySelector('.deck');
const restartGame = document.querySelector('.restart');
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
const allCards = document.querySelector('.card');
let addOpenCards = [];
let addMatchCards = [];
let moves = 0;
const movesNumber = document.querySelector('.moves');
const stars = document.querySelector('.stars');
let min = 0;
let sec = 0;
let timer;
const time = document.querySelector('.timer-output');
let timeRunning = false;
const clock = '<i class="fa fa-clock-o"></i>';

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(deck);

// Deal cards to initialize the game
function deal() {
  for (const item of deck) {
    const li = document.createElement('li');
    const icons = item;
    li.classList.add('card');
    li.innerHTML = `<i class="${icons}">`;
    deckField.appendChild(li);
  }
}

deal();

// Restart game
restartGame.addEventListener('click', () => {
  deckField.innerHTML = '';
  stopTimer();
  shuffle(deck);
  deal();
  addMatchCards = [];
  moves = 0;
  movesNumber.innerHTML = 0;
  stars.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
});

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


// Reveal card and icon symbol when click
deckField.addEventListener('click', e => {
  const target = e.target;
  if (
    target.classList.contains('card') &&
    addOpenCards.length < 2 &&
    !addOpenCards.includes(target)
  ) {
    target.classList.add('open');
    target.classList.add('show');
    addCard(target);
    if (addOpenCards.length == 2) {
      match();
      moveCounter();
    }
  }
  startTimer();
});

// Move counter
function moveCounter() {
  moves++;
  movesNumber.innerHTML = moves;
  ratingStars();
}

// Game star ratings
function ratingStars(params) {
  switch (moves) {
    case 16:
      stars.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
      break;
    case 20:
      stars.innerHTML = `<li><i class="fa fa-star"></i></li>`;
      break;
    case 25:
      stars.innerHTML = ``;
  }
}

// Game timer
function startTimer() {
  if (timeRunning == false) {
    timer = setInterval(insertTime, 1000);
    timeRunning = true;
  } else {
    return;
  }
}

function stopTimer() {
  clearInterval(timer);
  sec = 0;
  min = 0;
  timeRunning = false;
  time.innerHTML = `<p>00 : 00</p>`;
}

function insertTime() {
  sec++;
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (sec >= 60) {
    min++
    sec = '00';
  }
  time.innerHTML = `<p>0${min} : ${sec} ${clock}</p>`;
}

// Check win
function win() {
  if (addMatchCards.length == 16) {
    alert('You the winner!');
  }
}

// Add open cards to new array
function addCard(target) {
  addOpenCards.push(target);
}

// Check for match
function match() {
  if (addOpenCards[0].innerHTML == addOpenCards[1].innerHTML) {
    addOpenCards[0].classList.add('match');
    addOpenCards[1].classList.add('match');
    addMatchCards.push(addOpenCards[0]);
    addMatchCards.push(addOpenCards[1]);
    addOpenCards = [];
    win();
  } else {
    setTimeout(() => {
      addOpenCards.forEach(card => {
        card.classList.remove('open', 'show');
      });
      addOpenCards = [];
    }, 1000);
  }
}
