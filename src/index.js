// Create your game here!

let bodyElement = document.querySelector("body");

let chosenNumber = 0;

//The Game Name
const gameTitle = document.createElement("div");
gameTitle.setAttribute("class", "gameTitle");
bodyElement.append(gameTitle);

let gameName = document.createElement("h1");
gameName.setAttribute("class", "gameName");
gameName.textContent = "GUESS THE NUMBER";
gameTitle.append(gameName);

// The numbers mainContainer

let mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "mainContainer");
bodyElement.append(mainContainer);

// Numbers Array
let theNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < theNumbers.length; i++) {
  // The Buttons Container.
  let numberBox = document.createElement("div");
  numberBox.setAttribute("class", "numberBox");
  mainContainer.append(numberBox);

  // Buttons to specify the Player Chosen Number.
  let chosenNumber = document.createElement("button");
  chosenNumber.setAttribute("class", "chosenNumber");
  numberBox.append(chosenNumber);
  chosenNumber.textContent = theNumbers[i];
  chosenNumber.addEventListener("click", () => {
    chosenNumber.value = theNumbers[i];

    setTimeout(() => {
      bodyElement.style.backgroundColor = "darkRed";
    }, 3000);
    let computerValue = Math.floor(Math.random(chosenNumber.value) * 10);

    let resultsBox = document.createElement("div");
    resultsBox.setAttribute("class", "resultBox");
    resultsBox.textContent = `You Chose ( ${chosenNumber.value} ) Computer chose ( ${computerValue}) `;
    bodyElement.append(resultsBox);
    //alert(computerValue);
  });
}
