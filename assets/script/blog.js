// Wartet, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog wird geladen...");
    loadBlogPosts();
});

// Funktion zum Laden von Blogeinträgen
function loadBlogPosts() {
    // Beispiel-Daten für Blogeinträge
    const blogPosts = [
        {
            title: "Nachhaltige Bauprojekte mit Bilam-Holz",
            summary: "Erfahren Sie, wie Bilam-Holz in nachhaltigen Bauprojekten eingesetzt wird.",
            image: "assets/images/blog1.jpg",
            date: "01. Dezember 2024"
        },
        {
            title: "Vorteile von Bilam im modernen Holzbau",
            summary: "Warum Architekten und Bauherren immer häufiger auf Bilam setzen.",
            image: "assets/images/blog2.jpg",
            date: "24. November 2024"
        },
        {
            title: "Industrielle Holzlösungen für die Zukunft",
            summary: "Innovative Holzprodukte, die die Bauindustrie revolutionieren.",
            image: "assets/images/blog3.jpg",
            date: "15. November 2024"
        }
    ];

    // Container für die Blogeinträge
    const container = document.querySelector('.blog-container');
    if (!container) {
        console.error("Blog-Container nicht gefunden!");
        return;
    }

    // Dynamisch Blogkarten hinzufügen
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-summary">${post.summary}</p>
                <p class="blog-date">${post.date}</p>
            </div>
        `;

        container.appendChild(blogCard);
    });

    console.log("Blogeinträge erfolgreich geladen.");
}
