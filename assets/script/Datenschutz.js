// Wartet, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    console.log("Datenschutzseite wird geladen...");

    // Beispiel: Warnung bei Cookie-Benachrichtigung
    showCookieBanner();

    // Weitere Funktionen können hier hinzugefügt werden
});

// Funktion zum Anzeigen eines Cookie-Banners
function showCookieBanner() {
    const banner = document.createElement("div");
    banner.classList.add("cookie-banner");
    banner.innerHTML = `
        <p>Diese Website verwendet Cookies, um Ihnen ein besseres Nutzererlebnis zu bieten.</p>
        <button id="accept-cookies">Akzeptieren</button>
        <button id="decline-cookies">Ablehnen</button>
    `;

    // Banner an den Anfang des Body-Dokuments hinzufügen
    document.body.appendChild(banner);

    // Event-Listener für die Buttons
    document.getElementById("accept-cookies").addEventListener("click", () => {
        console.log("Cookies akzeptiert.");
        banner.style.display = "none";
    });

    document.getElementById("decline-cookies").addEventListener("click", () => {
        console.log("Cookies abgelehnt.");
        banner.style.display = "none";
    });
}
