let secretNumber;
let counter;

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
    assignTextToElement("p", "Indica un número del 1 al 10");

    // Generate secret number and start counter
    secretNumber = generateSecretNumber();
    counter = 1;

    // Disable new game button
    document.getElementById("reiniciar").setAttribute("disabled", true);

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
        document.getElementById("reiniciar").removeAttribute("disabled");
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
    return 1 + Math.floor(Math.random() * 10);
}

function startNewGame() {
    clearBox();
    runInitialTasks();
}

runInitialTasks();