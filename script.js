let choices = [];
let randomStop;

function addChoice() {
    const choiceInput = document.getElementById("choiceInput");
    const choice = choiceInput.value.trim();
    if (choice !== "") {
        choices.push(choice);
        choiceInput.value = "";
        renderChoices();
    }
}

function renderChoices() {
    const choicesContainer = document.getElementById("choicesContainer");
    choicesContainer.innerHTML = "";
    choices.forEach((choice, index) => {
        const choixDiv = document.createElement("div");
        choixDiv.classList.add("choix");
        choixDiv.textContent = choice;
        
        choicesContainer.appendChild(choixDiv);
    });
}

function confirmChoices() {
    if (choices.length === 0) {
        alert("Veuillez ajouter au moins un choix.");
        return;
    }
    randomStop = Math.floor(Math.random() * choices.length);
    highlightChoix(randomStop);
}

function highlightChoix(index) {
    const choixDivs = document.querySelectorAll(".choix");
    choixDivs.forEach((choixDiv, i) => {
        choixDiv.classList.remove("selected");
        if (i === index) {
            choixDiv.classList.add("selected");
        }
    });
    if (index === randomStop) {
        alert("Arrêt! Le choix est : " + choices[index]);
    }
}
function redoChoice() {
    const choicesContainer = document.getElementById("choicesContainer");
    choicesContainer.innerHTML = "";
    choices = [];
}


