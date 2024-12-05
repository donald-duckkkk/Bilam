// Wartet, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    console.log("Perlinen-Produkte werden geladen...");
    loadProducts(); // Ruft die Funktion auf, um Produkte zu laden
});

// Funktion, um Produkte zu laden
function loadProducts() {
    // Beispiel-Daten für die Produkte
    const products = [
        {
            name: "Perlinen-Balken",
            description: "Hochwertige Perlinen-Holzbalken für Bauprojekte.",
          
            price: "€150 pro m³"
        },
        {
            name: "Perlinen-Platten",
            description: "Stabile Platten für industrielle Anwendungen.",
            
            price: "€200 pro m³"
        }
    ];

    // Container-Element
    const container = document.querySelector('.product-container');
    if (!container) {
        console.error("Produkt-Container nicht gefunden!");
        return;
    }

    // Dynamisch Produkte hinzufügen
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button>Details anzeigen</button>
        `;
        container.appendChild(productCard);
    });

    console.log("Perlinen-Produkte erfolgreich geladen.");
}
