document.addEventListener("DOMContentLoaded", () => {
    // Header einfügen
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        fetch("/components/Header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Header konnte nicht geladen werden.");
                }
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Fehler beim Laden des Headers:", error));
    } else {
        console.error("Header-Platzhalter nicht gefunden!");
    }

    // Footer einfügen
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        fetch("/components/Footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Footer konnte nicht geladen werden.");
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Fehler beim Laden des Footers:", error));
    } else {
        console.error("Footer-Platzhalter nicht gefunden!");
    }
});
