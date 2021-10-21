// Maak een event-listener vast aan de buttons (the Big Five)
fiveButtons = document.getElementsByClassName("big-five-button");
for (let i = 0; i < fiveButtons.length; i++) {

    fiveButtons[i].addEventListener("click", function (event) {
        // Haal de waarde van de button uit het element
        console.log(event.target.innerHTML);

        // Creëer een nieuw list-item met JavaScript met het dier waarop is geklikt
            // Maak de nieuwe list-item aan
            const newLi = document.createElement("li");

            // Waar de nieuwe list-item moet komen (spotted list)
            const moveToSpotted = document.getElementById("spotted-animals-list");
            moveToSpotted.appendChild(newLi);
            newLi.innerHTML = event.target.innerHTML;
    });
}

// Verwijder het eerste item na klik op de button
removeFirstElement = document.getElementById("remove-first-item-button");
removeFirstElement.addEventListener("click", function () {

    const parentSpotted = document.getElementById("spotted-animals-list");
    const childSpotted = parentSpotted.getElementsByTagName("li")[0];
    const removedSpotted = parentSpotted.removeChild(childSpotted);

});

// Verwijder alle items na klik op de button
removeAllElements = document.getElementById("remove-all-button");
removeAllElements.addEventListener("click", function () {

    const selectUlElements = document.getElementById("spotted-animals-list");
    while (selectUlElements.firstChild) {
        selectUlElements.removeChild(selectUlElements.lastChild)
    }
});
    
