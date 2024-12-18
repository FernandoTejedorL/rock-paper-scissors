const rootStyles = document.documentElement.style;
const ownScoreElement = document.getElementById('own-score');
const houseScoreElement = document.getElementById('house-score');
const allButtonsElement = document.getElementById('buttons');
const buttonPaperElement = document.getElementById('button-paper');
const buttonScissorsElement = document.getElementById('button-scissors');
const buttonRockElement = document.getElementById('button-rock');
const resultDivElement = document.getElementById('resultdiv')
const ownSelectionElement = document.getElementById('own-selection');
const houseSelectionElement = document.getElementById('house-selection');
const winOrLooseTextElement = document.getElementById('win-or-loose');
const playAgainElement = document.getElementById('play-again');
const showRulesElement = document.getElementById('show-rules');
const hideRulesElement = document.getElementById('hide-rules');
const rulesElement = document.getElementById('modal-simple');
const houseChoiceElement = {
    children: [
        {
            classList: ['button', 'paper'],
        },
        {
            classList: ['button', 'scissors'],
        },
        {
            classList: ['button', 'rock']
        }
    ]
}

let ownScore = 0;
let houseScore = 0;
const addChoiceClasses = event => {
    const classButton = event.target.classList[0];
    const classButtonChoice = event.target.classList[1];
    const randomChoice = Math.floor(Math.random() * houseChoiceElement.children.length);
    const houseChoice = houseChoiceElement.children[randomChoice].classList[0];
    const houseChoice2 = houseChoiceElement.children[randomChoice].classList[1];
    allButtonsElement.classList.add('hidediv');
    ownSelectionElement.classList.remove('empty-result');
    ownSelectionElement.classList.add(classButtonChoice, classButton);
    houseSelectionElement.classList.remove('empty-result');
    houseSelectionElement.classList.add(houseChoice, houseChoice2);
    resultDivElement.classList.remove('hidediv');
    const ownElection = ownSelectionElement.classList[0];
    const houseElection = houseSelectionElement.classList[1];
    if (ownElection === 'paper' && houseElection === 'rock' ||
        ownElection === 'rock' && houseElection === 'scissors' ||
        ownElection === 'scissors' && houseElection === 'paper') {
        winOrLooseTextElement.textContent = 'YOU WIN';
        ownScore += 1;
    } else if (ownElection === 'paper' && houseElection === 'paper' ||
        ownElection === 'rock' && houseElection === 'rock' ||
        ownElection === 'scissors' && houseElection === 'scissors') {
        winOrLooseTextElement.textContent = 'TIE'
    } else if (ownElection === 'paper' && houseElection === 'scissors' ||
        ownElection === 'rock' && houseElection === 'paper' ||
        ownElection === 'scissors' && houseElection === 'rock') {
        winOrLooseTextElement.textContent = 'YOU LOSE';
        houseScore += 1;
    }
    ownScoreElement.textContent = ownScore;
    houseScoreElement.textContent = houseScore;
}
allButtonsElement.addEventListener('click', addChoiceClasses)

const restart = event => {
    ownSelectionElement.classList.remove(ownSelectionElement.classList[0], ownSelectionElement.classList[1]);
    ownSelectionElement.classList.add('empty-result')
    houseSelectionElement.classList.remove(houseSelectionElement.classList[0], houseSelectionElement.classList[1]);
    houseSelectionElement.classList.add('empty-result')
    allButtonsElement.classList.remove('hidediv')
    resultDivElement.classList.add('hidediv')
}
playAgainElement.addEventListener('click', restart)

const openRules = () => {
    rulesElement.classList.replace('hide', 'show');
}
showRulesElement.addEventListener('click', openRules);

const closeRules = () => {
    rulesElement.classList.replace('show', 'hide');
}
hideRulesElement.addEventListener('click', closeRules);
