// =======================
// KALKULATOR
// =======================
/* ===========================================
   KALKULATOR PADI
=========================================== */

function hitungKebutuhanPadi() {

    let luas = parseFloat(document.getElementById("luasLahanPadi").value);

    if (isNaN(luas) || luas <= 0) {
        document.getElementById("hasilKalkulatorPadi").innerHTML =
            "<p style='color:red;'>Masukkan luas lahan yang benar!</p>";
        return;
    }

    let benih = luas * 25;          // kg/ha
    let urea = luas * 250;          // kg/ha
    let npk = luas * 300;           // kg/ha
    let organik = luas * 2000;      // kg/ha

    document.getElementById("hasilKalkulatorPadi").innerHTML = `
<div class="alert alert-success shadow-sm rounded-3">

    <h4 class="mb-3">
        🌾 Hasil Perhitungan
    </h4>

    <div class="row text-center g-3">

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Benih</h6>
                <h4 class="text-success">${benih.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk Urea</h6>
                <h4 class="text-success">${urea.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk NPK</h6>
                <h4 class="text-success">${npk.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk Organik</h6>
                <h4 class="text-success">${organik.toFixed(1)} kg</h4>
            </div>
        </div>

    </div>

</div>
`;
}


/* ===========================================
   KALKULATOR CABAI
=========================================== */

function hitungKebutuhanCabai() {

    let luas = parseFloat(document.getElementById("luasLahanCabai").value);

    if (isNaN(luas) || luas <= 0) {
        document.getElementById("hasilKalkulatorCabai").innerHTML =
            "<p style='color:red;'>Masukkan luas lahan yang benar!</p>";
        return;
    }

    let bibit = luas * 18000;          // tanaman/ha
    let kandang = luas * 10000;        // kg/ha
    let npk = luas * 500;              // kg/ha
    let dolomit = luas * 1000;         // kg/ha

    document.getElementById("hasilKalkulatorCabai").innerHTML = `
<div class="alert alert-danger shadow-sm rounded-3">

    <h4 class="mb-3">
        🌶️ Hasil Perhitungan
    </h4>

    <div class="row text-center g-3">

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Bibit Cabai</h6>
                <h4 class="text-danger">${bibit.toLocaleString()} Tanaman</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk Kandang</h6>
                <h4 class="text-danger">${kandang.toLocaleString()} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Pupuk NPK</h6>
                <h4 class="text-danger">${npk.toFixed(1)} kg</h4>
            </div>
        </div>

        <div class="col-md-6">
            <div class="border rounded-3 p-3 h-100">
                <h6>Dolomit</h6>
                <h4 class="text-danger">${dolomit.toFixed(1)} kg</h4>
            </div>
        </div>

    </div>

</div>
`;
}

