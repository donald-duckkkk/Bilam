fetch('/components/Footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Footer konnte nicht geladen werden: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  })
  .catch(error => console.error('Fehler beim Laden des Footers:', error));
