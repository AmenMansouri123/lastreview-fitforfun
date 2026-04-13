// ===============================
// DATA (meer lessen)
// ===============================
const lessen = [
    { titel: "Yoga", prijs: 10 },
    { titel: "Bootcamp", prijs: 15 },
    { titel: "Crossfit", prijs: 30 },
    { titel: "Zumba", prijs: 12 },
    { titel: "Kickboksen", prijs: 25 },
    { titel: "Pilates", prijs: 20 },
    { titel: "Spinning", prijs: 18 },
    { titel: "Personal Training", prijs: 40 },
    { titel: "HIIT Training", prijs: 22 },
    { titel: "Stretching", prijs: 8 }
];

// ===============================
// FORM
// ===============================
document.getElementById("zoekForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let min = parseFloat(document.getElementById("min").value);
    let max = parseFloat(document.getElementById("max").value);
    let resultatenDiv = document.getElementById("resultaten");

    resultatenDiv.innerHTML = "";

    // Validatie
    if (min > max) {
        resultatenDiv.innerHTML = `
            <div class="melding">
                ❌ Min prijs mag niet hoger zijn dan max prijs.
            </div>
        `;
        return;
    }

    // Filter
    let resultaten = lessen.filter(les => les.prijs >= min && les.prijs <= max);

    // Resultaten
    if (resultaten.length > 0) {

        resultatenDiv.innerHTML = `
            <div class="success">
                ✅ ${resultaten.length} lessen gevonden
            </div>
        `;

        resultaten.forEach(les => {
            let div = document.createElement("div");
            div.classList.add("les");

            div.innerHTML = `
                <a href="#">${les.titel}</a>
                <div class="prijs">€${les.prijs}</div>
            `;

            resultatenDiv.appendChild(div);
        });

    } else {

        resultatenDiv.innerHTML = `
            <div class="melding">
                ❌ Geen lessen gevonden binnen deze prijs.<br><br>
                    Probeer bijvoorbeeld €10 - €30.
            </div>
        `;
    }

});