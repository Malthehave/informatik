// En funktion ved navn mere
function mere(titelTekst, pris, billede) {
    Swal.fire({
        title: titelTekst,
        text: pris,
        imageUrl: billede,
        imageAlt: titelTekst,
    })
};

function beregnPris() {
    var pris = prompt("Hvor meget vil du købe for?", "100");
    if (pris != null && pris != '') {
        if (Number.isInteger(Number(pris)) == true) {
            if(pris <= 200) {
                alert("Du skal betale 30 kr. i fragt");
            } else if (pris > 200) {
                alert("Du får gratis fragt!");
            } else {
                return;
            }
        } else {
            alert("Indtast venligst et tal!");
        }
    } else {
        alert("Indtast venligst noget!");
    }
};
