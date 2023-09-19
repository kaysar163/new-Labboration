// Hämta alla länkar på sidan
const links = document.querySelectorAll('a');

// Lägg till en klickhändelselyssnare på varje länk
links.forEach(link => {
    link.addEventListener('click', function (event) {
        // Förhindra standardbeteendet för länken (att ladda om sidan)
        event.preventDefault();

        // Hämta den länkade sidans URL
        const nextPage = this.getAttribute('href');

        // Ladda om sidan med den länkade sidans URL
        window.location.href = nextPage;
    });
});
