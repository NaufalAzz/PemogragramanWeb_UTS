// Menambahkan data produk ke tabel
document.addEventListener("DOMContentLoaded", function () {
    const produkForm = document.getElementById("produkForm");
    if (produkForm) {
        produkForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            let nama = document.getElementById("produkNama").value;
            let harga = document.getElementById("produkHarga").value;
            let stok = document.getElementById("produkStok").value;

            let table = document.getElementById("produkTable");
            let newRow = table.insertRow(-1);

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = harga;
            newRow.insertCell(2).textContent = stok;

            produkForm.reset(); // Reset form setelah submit
        });
    }

    // Menambahkan data pelanggan ke tabel
    const pelangganForm = document.getElementById("pelangganForm");
    if (pelangganForm) {
        pelangganForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let nama = document.getElementById("pelangganNama").value;
            let alamat = document.getElementById("pelangganAlamat").value;
            let telepon = document.getElementById("pelangganTelepon").value;

            let table = document.getElementById("pelangganTable");
            let newRow = table.insertRow(-1);

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = alamat;
            newRow.insertCell(2).textContent = telepon;

            pelangganForm.reset();
        });
    }

    // Menambahkan transaksi ke tabel
    const transaksiForm = document.getElementById("transaksiForm");
    if (transaksiForm) {
        transaksiForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let produk = document.getElementById("transaksiProduk").value;
            let jumlah = document.getElementById("transaksiJumlah").value;
            let pelanggan = document.getElementById("transaksiPelanggan").value;

            let table = document.getElementById("transaksiTable");
            let newRow = table.insertRow(-1);

            newRow.insertCell(0).textContent = produk;
            newRow.insertCell(1).textContent = jumlah;
            newRow.insertCell(2).textContent = pelanggan;

            transaksiForm.reset();
        });
    }
});
