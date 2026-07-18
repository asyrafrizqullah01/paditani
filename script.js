// =======================
// KALKULATOR
// =======================
function hitungKebutuhan() {

    const luas = parseFloat(document.getElementById("luasLahan").value);
    const hasil = document.getElementById("hasilKalkulator");

    if (isNaN(luas) || luas <= 0) {
        hasil.innerHTML = "⚠️ Masukkan luas lahan yang valid!";
        return;
    }

    const benihPerHa = 25;
    const pupukOrganik = 3000;
    const urea = 150;
    const npk = 300;

    const benih = luas * benihPerHa;
    const organik = luas * pupukOrganik;
    const ureaTotal = luas * urea;
    const npkTotal = luas * npk;

    hasil.innerHTML = `
        🌾 <b>Hasil Perhitungan (${luas} Ha)</b><br><br>

        🌱 Benih : <b>${benih.toFixed(1)} kg</b><br>
        🌿 Pupuk Organik : <b>${(organik / 1000).toFixed(2)} ton</b><br>
        🧪 Urea : <b>${ureaTotal.toFixed(1)} kg</b><br>
        🧪 NPK : <b>${npkTotal.toFixed(1)} kg</b><br><br>

        📌 Estimasi ini berdasarkan standar umum budidaya padi modern.
    `;
}

// =======================
// AI CHAT
// =======================
function openAI() {
    document.getElementById("aiModal").style.display = "flex";
}

function closeAI() {
    document.getElementById("aiModal").style.display = "none";
}

function sendQuestion() {

    const input = document.getElementById("userQuestion");
    const chat = document.getElementById("chatMessages");

    const text = input.value.trim();

    if (text === "") return;

    chat.innerHTML += `<div class="user-message">${text}</div>`;

    const response = getAIResponse(text.toLowerCase());

    setTimeout(() => {

        chat.innerHTML += `<div class="bot-message">${response}</div>`;

        chat.scrollTop = chat.scrollHeight;

    }, 500);

    input.value = "";

}

function getAIResponse(q) {

    if (q.includes("urea"))
        return "🌾 Urea berfungsi sebagai sumber nitrogen untuk pertumbuhan daun padi.";

    if (q.includes("wereng"))
        return "🐛 Wereng dapat dikendalikan dengan PHT seperti Beauveria bassiana dan musuh alami.";

    if (q.includes("legowo"))
        return "🌱 Jajar Legowo meningkatkan cahaya dan hasil produksi padi.";

    if (q.includes("pupuk"))
        return "🧪 Gunakan pupuk berimbang: organik + NPK + Urea sesuai fase tanaman.";

    if (q.includes("panen"))
        return "🌾 Panen dilakukan saat 90–95% malai menguning dengan kadar air 20–25%.";

    return "🤖 Maaf, saya masih belajar. Coba tanya tentang pupuk, wereng, legowo, atau panen.";
}

// =======================
// ENTER UNTUK CHAT
// =======================
document.addEventListener("submit", function (e) {

    if (e.target.id === "contactForm") {

        e.preventDefault();

        document
            .getElementById("successPopup")
            .classList.add("show");


        e.target.reset();


        setTimeout(() => {

            document
                .getElementById("successPopup")
                .classList.remove("show");

        }, 4000);

    }

});



function closePopup() {

    document
        .getElementById("successPopup")
        .classList.remove("show");

}