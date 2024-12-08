fetch('/components/Header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Header konnte nicht geladen werden: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  })
  .catch(error => console.error('Fehler beim Laden des Headers:', error));


 