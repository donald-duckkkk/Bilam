// Aktuelle URL prüfen
const pathnameFooter = window.location.pathname;
let footerPath = "components/Footer.html"; // Standard: Deutsch

// Footer für die entsprechende Sprache laden
if (pathnameFooter.includes("_en")) {
    console.log("loading english footer")
    footerPath = "/components/Footer_en.html";
} else if (pathnameFooter.includes("_it")) {
    footerPath = "/components/Footer_it.html";
}

// Footer laden
fetch(footerPath)
    .then(response => {
        if (!response.ok) throw new Error("Footer konnte nicht geladen werden.", response.status);
        return response.text();
    })
    .then(html => {
        document.getElementById("footer-placeholder").innerHTML = html;
    })
    .catch(error => console.error("Fehler beim Laden des Footers:", error));

  