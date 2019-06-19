// En funktion ved navn mere
function mere(titelTekst, pris, billede) {
    Swal.fire({
        title: titelTekst,
        text: pris,
        imageUrl: billede,
        imageAlt: titelTekst,
    })
};

// Vores funktion til at beregne pris
function beregnPris() {
    // Bed om pris i en prompt
    var pris = prompt("Hvor meget vil du købe for?", "100");
    // Tjek om pris er gyldig
    if (pris != null && pris != '') {
        // Vi kalder på vores validationPris funktion og vier den 'pris'
        validationPris(pris);
    } else {
        alert("Indtast venligst noget!");
    }
};

function validationPris(pris) {
    // Tjek om pris er et tal
    if (Number.isInteger(Number(pris)) == true) {
        // Er pris under 200 ?
        if (pris <= 200) {
            alert("Du skal betale 30 kr. i fragt");
        // Er pris større end 200 ? 
        } else if (pris > 200) {
            alert("Du får gratis fragt!");
        // Ellers returner ingenting        
        } else {
            return;
        }
    // Ellers bed om et tal    
    } else {
        alert("Indtast venligst et tal!");
    }
}