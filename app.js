let secretNumber;
let counter;
let secretNumbers = [];
let maxLimit = 10;
let maxGames = 5;

function assignTextToElement(element, text) {
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;

    return;
}

function clearBox() {
    document.querySelector("#inputNumber").value = "";
}

function disableNewGameButton() {
    document.getElementById("reiniciar").att;
}

function runInitialTasks() {
    console.log("New game");

    // Set title and paragraph texts
    assignTextToElement("h1", "Número secreto");
    assignTextToElement("p", `Indica un número del 1 al ${maxLimit}`);

    // Generate secret number and start counter
    secretNumber = generateSecretNumber();
    counter = 1;

    // Disable new game button
    disableButton("reiniciar");

    // Enable try button
    enableButton("try");

    console.log(`secretNumber: ${secretNumber}`);
}

function verifyAttempt() {
    console.log(`counter ${counter}`);

    let userInput = parseInt(document.getElementById("inputNumber").value);
    let attempts = counter == 1 ? "intento" : "intentos"; // Ternary

    console.log(`userInput ${userInput}`);

    // Compare logic
    if (userInput === secretNumber) {
        assignTextToElement("p", `Acertaste el número secreto en ${counter} ${attempts}`);
        clearBox();
        disableButton("try");
        enableButton("reiniciar");
    } else if (userInput > secretNumber) {
        assignTextToElement("p", "El número secreto es menor");
        clearBox();
    } else {
        assignTextToElement("p", "El número secreto es mayor");
        clearBox();
    }
    counter++;

    return;
}

function generateSecretNumber() {
    let generatedNumber = 1 + Math.floor(Math.random() * 10);
    console.log(`generatedNumber: ${generatedNumber}`);

    // Check if the game has used all the available numbers
    if (secretNumbers.length == maxLimit) {
        assignTextToElement("p", `Ya se han usado todos los números posibles`);
    } else if (secretNumbers.length == maxGames) { // Max games limit
        assignTextToElement("p", `Has llegado al límite de juegos posibles`);
    } else {
        if (secretNumbers.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            secretNumbers.push(generatedNumber);
            console.log(`Secret numbers: ${secretNumbers}`);
            return generatedNumber;
        }  
    } 
}

function checkDuplicateSecretNumbers(number) {
    let foundDuplicate = secretNumbers.includes(number);

    // Store if not found
    if (!foundDuplicate) {
        secretNumbers.push(number);
    }

    return foundDuplicate;
}

function enableButton(buttonId){
    document.getElementById(buttonId).removeAttribute("disabled");
}

function disableButton(buttonId) {
    document.getElementById(buttonId).setAttribute("disabled", true);
}

function startNewGame() {
    clearBox();
    runInitialTasks();
}

runInitialTasks();