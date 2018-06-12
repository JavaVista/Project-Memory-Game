# Project: Memory Game

## Overview

Udacity Front-End Developer Nanodegree project.

### Task

Used what I learned about HTML and CSS to convert an initial design into a functional web page!

## Game Instructions

The board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down.

* Flip over two hidden cards at a time to locate the ones that match!

**Each turn**:

* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.
* The game ends once all cards have been correctly matched.

### Technologies Used

* [HTML5 semantic (structural) elements]("https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#Enter_HTML5_structural_elements") and responsive images
* CSS with advance features such as flexbox and responsive design


## Project Instructions

To view the code and make changes:

1. Fork the repository.
2. Download the repository to your computer.
3. Locate the `index.html` file and open with an internet browser or favorite editor.

### Demo

[Memory Game](https://?url-/)

## Contact / Social Media

* Twitter – [@seetechnologic](https://twitter.com/seetechnologic)
* GitHub - [https://github.com/JavaVista/](https://github.com/JavaVista/)
* Personal Site - [Resume](http://www.techno-logic.us/)
* LinkedIn - [Javier Carrion](https://www.linkedin.com/in/technologic)

### License

Distributed under the MIT License. See [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
for more information.

---
# My Instruction (Erase Section when done)

There are a couple of interactions that you'll need to handle:

* Flipping cards
* What happens when cards match
* What happens when cards do not match
* When the game finishes

The following are just some of the questions that you'll experience along the way:

* What's the ideal workflow?
* How many files do I need?
* Do I modify the HTML first or the CSS?
* How many JavaScript functions do I need?
* Should my function be this many lines of code?


## Resources
Memory Game Programming Tutorial =
http://www.developphp.com/video/JavaScript/Memory-Game-Programming-Tutorial

Example: https://github.com/SarahEW1206/fend-project-memory-game

Videos : https://www.youtube.com/results?search_query=udacity+memory+game

### Development Strategy
It's very important that you plan your project before you start writing any code. Break your project down into small pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick by brick.

* Start by building a very simple grid of cards.
    * Don't worry about styling, just get something clickable on the page.
    * Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?
* Add the functionality to handle clicks.
    * This should reveal the hidden side of each card.
* Work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?
* Work on the winning condition. How does your game “know” if a player has won?
* We recommend saving styling until the very end. Allow your game logic and functionality to dictate the styling.

## Project Rubric - PROJECT SPECIFICATION

### Game Behavior

1. **Memory Game Logic** - The game randomly shuffles the cards. A user wins once all cards have successfully been matched
2. **Congratulations Popup** - When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.
3. **Restart Button** - A restart button allows the player to reset the game board, the timer, and the star rating.
4. **Star Rating** - The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1). The number of moves needed to change the rating is up to you, but it should happen at some point.
5. **Timer** - When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.
6. **Move Counter** - Game displays the current number of moves a user has made.

### Interface Design

* Styling - Application uses CSS to style components for the game.
* Usability - All application components are usable across modern desktop, tablet, and phone browsers.

### Documentation

* README - A README file is included detailing the game and all dependencies.
* Comments - Comments are present and effectively explain longer code procedure when necessary.
* Code Quality - Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.

#### Suggestions to Make Your Project Stand Out!
- Add CSS animations when cards are clicked, unsuccessfully matched, and successfully matched.
- Add unique functionality beyond the minimum requirements (**Implement a leaderboard (Maybe https://www.google.com/search?rlz=1C1CAFA_enUS774US774&ei=Mz4gW8C-NI6vzwL61pLoCQ&q=javascript+Implement+a+leaderboard&oq=javascript+Implement+a+leaderboard&gs_l=psy-ab.3...3229.5419.0.5659.11.11.0.0.0.0.107.810.10j1.11.0....0...1.1.64.psy-ab..0.2.145...35i39k1.0.EYyt50ba1BY )**, **store game state using local storage (MAYBE https://www.google.com/search?q=store+game+state+using+local+storage&rlz=1C1CAFA_enUS774US774&oq=store+game+state+using+local+storage&aqs=chrome..69i57&sourceid=chrome&ie=UTF-8)**, etc.
- Implement additional optimizations that improve the performance and user experience of the game (keyboard shortcuts for gameplay, etc). Press R to reset https://stackoverflow.com/questions/27425990/how-can-i-restart-my-game-when-i-press-enter


Udacity Style Guides
You should write your code and markup to meet the specifications provided in these style guides:

* CSS Style Guide - http://udacity.github.io/frontend-nanodegree-styleguide/css.html
* HTML Style Guide - http://udacity.github.io/frontend-nanodegree-styleguide/index.html
* JavaScript Style Guide - http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
* Git Style Guide - https://udacity.github.io/git-styleguide/