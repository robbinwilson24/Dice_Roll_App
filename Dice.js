const diceNumberSelect = document.getElementById("diceNoSelector");
const diceContainer = document.querySelector(".diceContainer");
const rollButton = document.querySelector("#rollButton");
const rolledTotalNumber = document.querySelector("#rolledTotalNumber");
const totalDisplay = document.querySelector("#totalDisplay");

totalDisplay.classList.add("totalDisplayInvisible");


function createDice(idx = 0) {
    const newDiceImage = document.createElement("img");
    newDiceImage.src = diceSides[idx].image;
    newDiceImage.alt = "Dice side with " + diceSides[idx].value;
    newDiceImage.classList.add("diceImage");
    return newDiceImage;
}

function diceContainerClassChecker() {
    let noOfDice = diceNumberSelect.value;

    if (noOfDice >= 4) {
        if (diceContainer.classList.contains("dice-column")) {
            diceContainer.classList.remove("dice-column");
            diceContainer.classList.add("diceContainer");
        }
    } else if (noOfDice < 4) {
        if (diceContainer.classList.contains("diceContainer")) {
            diceContainer.classList.remove("diceContainer");
            diceContainer.classList.add("dice-column");
        }
        else {
        }
    }
}

diceContainerClassChecker();


const diceSides = [
    { id: 0, value: 0, image: './Images/dice-6-0.png' },
    { id: 1, value: 1, image: './Images/dice-6-1.png' },
    { id: 2, value: 2, image: './Images/dice-6-2.png' },
    { id: 3, value: 3, image: './Images/dice-6-3.png' },
    { id: 4, value: 4, image: './Images/dice-6-4.png' },
    { id: 5, value: 5, image: './Images/dice-6-5.png' },
    { id: 6, value: 6, image: './Images/dice-6-6.png' }
];


function randomNumber() {
    return Math.ceil(Math.random() * 6);
}


function PopulateDice() {
    const selectedValue = diceNumberSelect.value;
    let roundTotal = 0;
    diceContainer.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
        let number = randomNumber();
        roundTotal += number;
        const newDice = createDice(number);
        diceContainer.appendChild(newDice);

        newDice.addEventListener('load', () => {
            newDice.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(720deg)' }
            ], {
                duration: 850, easing: 'ease-out'
            });
        });
    }
    rolledTotalNumber.textContent = roundTotal;
}


diceNumberSelect.addEventListener("change", () => {
    PopulateDice();
    diceContainerClassChecker();
});



rollButton.addEventListener("click", function () {
    PopulateDice();

    totalDisplay.classList.remove("totalDisplayInvisible");
    totalDisplay.classList.add("totalDisplay");
});



