// Aktuelle URL prüfen
const pathname = window.location.pathname;
let headerPath = "components/Header.html"; // Standard: Deutsch

// Header für die entsprechende Sprache laden
if (pathname.includes("_en")) {
    headerPath = "/components/Header_en.html";
} else if (pathname.includes("_it")) {
    headerPath = "/components/Header_it.html";
}

// Header laden
fetch(headerPath)
    .then(response => {
        if (!response.ok) throw new Error("Header konnte nicht geladen werden.");
        return response.text();
    })
    .then(html => {
        document.getElementById("header-container").innerHTML = html;
    })
    .catch(error => console.error("Fehler beim Laden des Headers:", error));








