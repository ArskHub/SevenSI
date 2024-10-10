// Ambil elemen tombol Sign In di Navbar dan audio Sign In di Navbar
const navbarSigninButton = document.querySelector('.btn-signin');
const navbarSigninSound = document.getElementById('navbarSigninSound');

// Tambah event listener untuk memutar suara saat tombol Sign In di Navbar diklik
navbarSigninButton.addEventListener('click', function(event) {
    event.preventDefault();  // Mencegah halaman langsung berganti sebelum suara diputar
    
    // Cek apakah file audio ada dan siap diputar
    if (navbarSigninSound) {
        navbarSigninSound.play().then(() => {
            // Tunggu suara selesai diputar baru alihkan halaman
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500); // Durasi menunggu sebelum pindah halaman
        }).catch(error => {
            console.error("Gagal memutar audio:", error);
            // Langsung alihkan halaman jika gagal memutar suara
            window.location.href = "login.html";
        });
    } else {
        console.error("Audio tidak ditemukan");
        window.location.href = "login.html"; // Tetap alihkan halaman jika audio tidak ada
    }
});

// Menunggu hingga dokumen selesai dimuat sebelum menjalankan kode
document.addEventListener('DOMContentLoaded', function () {
    // Memilih semua tombol accordion dengan kelas '.accordion-button'
    var accordionButtons = document.querySelectorAll('.accordion-button');

    // Melakukan loop pada semua tombol untuk menambahkan event listener
    accordionButtons.forEach(function (button) {
       // Menambahkan event listener 'mouseover' untuk mengubah warna background dan teks saat kursor diarahkan
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = '#1E3A8A'; // Mengubah warna background menjadi #1E3A8A
            button.style.color = 'white'; // Mengubah warna teks menjadi putih
        });

        // Menambahkan event listener untuk mengembalikan warna background dan teks saat kursor dijauhkan
        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = ''; // Mengembalikan warna background ke warna semula (default)
            button.style.color = ''; // Mengembalikan warna teks ke warna semula (default)
        });
        });
    });
