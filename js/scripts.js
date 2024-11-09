const rootStyles = document.documentElement.style;
const ownScoreElement = document.getElementById('own-score');
const houseScoreElement = document.getElementById('house-score');
const allButtonsElement = document.getElementById('buttons');
const buttonPaperElement = document.getElementById('button-paper');
const buttonScissorsElement = document.getElementById('button-scissors');
const buttonRockElement = document.getElementById('button-rock');
const ownSelectionElement = document.getElementById('own-selection');
const houseSelectionElement = document.getElementById('house-selection');
const winOrLooseTextElement = document.getElementById('win-or-loose');
const playAgainElement = document.getElementById('play-again');
const showRulesElement = document.getElementById('show-rules');
const hideRulesElement = document.getElementById('hide-rules');
const rulesElement = document.getElementById('modal-simple')

const openRules = () => {
    rulesElement.classList.replace('hide', 'show');
}
showRulesElement.addEventListener('click', openRules)

const closeRules = () => {
    rulesElement.classList.replace('show', 'hide');
}
hideRulesElement.addEventListener('click', closeRules)

const checkbutton = event => {
}

allButtonsElement.addEventListener('click', checkbutton)