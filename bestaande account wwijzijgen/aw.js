// ===============================
// DATA
// ===============================
let accounts = [];
let editIndex = -1;

// ===============================
// FORM
// ===============================
document.getElementById("accountForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let naam = document.getElementById("naam").value.trim();
    let email = document.getElementById("email").value.trim();
    let wachtwoord = document.getElementById("wachtwoord").value.trim();

    let melding = document.getElementById("melding");

    melding.innerHTML = "";

    // VALIDATIE
    if (naam === "" || email === "" || wachtwoord === "") {
        melding.innerHTML = `<div class="melding error">❌ Vul alle velden in.</div>`;
        return;
    }

    if (!email.includes("@")) {
        melding.innerHTML = `<div class="melding error">❌ Ongeldig e-mailadres.</div>`;
        return;
    }

    if (wachtwoord.length < 6) {
        melding.innerHTML = `<div class="melding error">❌ Wachtwoord moet minimaal 6 tekens zijn.</div>`;
        return;
    }

    // OPSLAAN / WIJZIGEN
    if (editIndex === -1) {
        accounts.push({ naam, email, wachtwoord });
    } else {
        accounts[editIndex] = { naam, email, wachtwoord };
        editIndex = -1;
    }

    renderTable();

    melding.innerHTML = `
        <div class="melding success">
            ✅ Gegevens succesvol opgeslagen!
        </div>
    `;

    document.getElementById("accountForm").reset();
});

// ===============================
// TABEL RENDEREN
// ===============================
function renderTable() {
    let tableBody = document.querySelector("#accountTable tbody");
    tableBody.innerHTML = "";

    accounts.forEach((acc, index) => {
        let row = `
            <tr>
                <td>${acc.naam}</td>
                <td>${acc.email}</td>
                <td>${acc.wachtwoord}</td>
                <td>
                    <button class="edit-btn" onclick="bewerkAccount(${index})">Wijzigen</button>
                    <button class="delete-btn" onclick="verwijderAccount(${index})">Verwijderen</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// ===============================
// BEWERKEN
// ===============================
function bewerkAccount(index) {
    let acc = accounts[index];

    document.getElementById("naam").value = acc.naam;
    document.getElementById("email").value = acc.email;
    document.getElementById("wachtwoord").value = acc.wachtwoord;

    editIndex = index;
}

// ===============================
// VERWIJDEREN
// ===============================
function verwijderAccount(index) {
    accounts.splice(index, 1);
    renderTable();
}