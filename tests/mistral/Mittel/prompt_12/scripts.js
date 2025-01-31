// Funktion zum Suchen von Blog-Beiträgen
function suche(suchbegriff) {
    // Hebt alle Artikel aus der DOM ab
    let artikel = document.querySelectorAll("article");

    // Durchläuft die Liste der Artikel
    for (let i = 0; i < artikel.length; i++) {
        // Sucht den angegebenen Text in jedem Artikel
        if (!artikel[i].textContent.includes(suchbegriff)) {
            // Versteckt den gefundenen Artikel, indem man ihn nicht mehr sichtbar macht
            artikel[i].style.display = "none";
        } else {
            // Zeigt den gefundenen Artikel an
            artikel[i].style.display = "block";
        }
    }
}

// Registriere das Ereignis zum Drucken einer Taste, um die Suchfunktion auszulösen
document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        suche(""); // Löscht alle gefundenen Artikel durch das Eingeben des leeren Strings
    } else {
        suche(event.target.value); // Suche nach dem eingegebenen Suchbegriff
    }
});

// Registriere das Ereignis zum Klicken der Suche-Schaltfläche
document.querySelector("#suche button").addEventListener("click", function () {
    suche(document.querySelector("#suche input").value);
});