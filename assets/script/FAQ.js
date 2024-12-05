// Wartet, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    console.log("FAQ-Seite wird geladen...");
    loadFAQs();
});

// Funktion zum Laden der FAQs
function loadFAQs() {
    const faqs = [
        {
            question: "Was ist Bilam-Holz?",
            answer: "Bilam-Holz ist ein hochwertiges Holzprodukt, das speziell für Bau- und Möbelkonstruktionen entwickelt wurde. Es kombiniert Stabilität, Nachhaltigkeit und Ästhetik."
        },
        {
            question: "Wie kann ich ein Angebot anfordern?",
            answer: "Klicken Sie auf unserer Website auf die Schaltfläche 'Angebot anfordern', um das Formular auszufüllen. Alternativ können Sie uns per E-Mail kontaktieren."
        },
        {
            question: "Bietet Bilam maßgeschneiderte Lösungen?",
            answer: "Ja, wir bieten maßgeschneiderte Holzlösungen, die speziell auf Ihre Anforderungen zugeschnitten sind. Kontaktieren Sie uns für weitere Informationen."
        },
        {
            question: "Sind Bilam-Produkte nachhaltig?",
            answer: "Ja, Bilam-Holz stammt aus nachhaltig bewirtschafteten Wäldern und wird mit umweltfreundlichen Verfahren produziert."
        },
        {
            question: "Wie lange dauert die Lieferung?",
            answer: "Die Lieferzeit hängt von Ihrer Bestellung ab. Normalerweise dauert es 5-10 Werktage."
        }
    ];

    const container = document.querySelector('.faq-container');
    if (!container) {
        console.error("FAQ-Container nicht gefunden!");
        return;
    }

    // Dynamisch FAQ-Einträge hinzufügen
    faqs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        faqItem.innerHTML = `
            <div class="faq-question">${faq.question}</div>
            <div class="faq-answer hidden">${faq.answer}</div>
        `;

        // Toggle-Funktion für die Antwort
        faqItem.querySelector('.faq-question').addEventListener('click', () => {
            const answer = faqItem.querySelector('.faq-answer');
            answer.classList.toggle('hidden');
        });

        container.appendChild(faqItem);
    });

    console.log("FAQs erfolgreich geladen.");
}
