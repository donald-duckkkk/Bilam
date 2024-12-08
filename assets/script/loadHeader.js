// Aktuelle Sprache aus URL ermitteln (z. B. index_en.html für Englisch)
const isEnglish = window.location.pathname.includes("_en");

// Header-Pfad setzen basierend auf Sprache
const headerPath = isEnglish ? "components/Header_en.html" : "components/Header_de.html";

// Header laden und einfügen
fetch(headerPath)
  .then(response => {
    if (!response.ok) throw new Error("Header konnte nicht geladen werden.");
    return response.text();
  })
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
  })
  .catch(error => console.error("Fehler beim Laden des Headers:", error));







