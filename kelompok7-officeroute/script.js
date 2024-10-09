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
