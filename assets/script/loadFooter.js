// Bestimme, ob die Seite englisch ist
const isEnglishFooter = window.location.pathname.includes("_en");

// Wähle den passenden Footer aus
const footerPath = isEnglishFooter ? "components/Footer_en.html" : "components/Footer.html";

// Footer laden und einfügen
fetch(footerPath)
  .then(response => {
    if (!response.ok) throw new Error("Footer konnte nicht geladen werden.");
    return response.text();
  })
  .then(html => {
    document.getElementById("footer-placeholder").innerHTML = html;
  })
  .catch(error => console.error("Fehler beim Laden des Footers:", error));

  