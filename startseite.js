// Fügt den Footer dynamisch in jede Seite ein
document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html") // Holt den Footer aus der Datei
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data); // Fügt den Footer ans Ende des Body ein
        })
        .catch(error => console.error("Fehler beim Laden des Footers:", error));
});
