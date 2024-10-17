// Ambil elemen tombol Sign In di Navbar dan audio Sign In di Navbar
const navbarSigninButton = document.querySelector(".btn-signin");
const navbarSigninSound = document.getElementById("navbarSigninSound");

// Tambah event listener untuk memutar suara saat tombol Sign In di Navbar diklik
navbarSigninButton.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah halaman langsung berganti sebelum suara diputar

  // Cek apakah file audio ada dan siap diputar
  if (navbarSigninSound) {
    navbarSigninSound
      .play()
      .then(() => {
        // Tunggu suara selesai diputar baru alihkan halaman
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1500); // Durasi menunggu sebelum pindah halaman
      })
      .catch((error) => {
        console.error("Gagal memutar audio:", error);
        // Langsung alihkan halaman jika gagal memutar suara
        window.location.href = "login.html";
      });
  } else {
    console.error("Audio tidak ditemukan");
    window.location.href = "login.html"; // Tetap alihkan halaman jika audio tidak ada
  }
});

$(document).ready(function () {
  // Memilih semua tombol accordion dengan kelas '.accordion-button'
  var accordionButtons = $(".accordion-button");

  // Melakukan loop pada semua tombol untuk menambahkan event listener
  accordionButtons.each(function () {
    var button = $(this);

    // Menambahkan event listener 'mouseover' untuk mengubah warna background dan teks saat kursor diarahkan
    button.on("mouseover", function () {
      button.css({
        "background-color": "#1E3A8A", // Mengubah warna background menjadi #1E3A8A
        color: "white", // Mengubah warna teks menjadi putih
      });
    });

    // Menambahkan event listener untuk mengembalikan warna background dan teks saat kursor dijauhkan
    button.on("mouseout", function () {
      button.css({
        "background-color": "", // Mengembalikan warna background ke warna semula (default)
        color: "", // Mengembalikan warna teks ke warna semula (default)
      });
    });
  });
});

$(document).ready(function () {
  // Mengecek posisi scroll saat halaman di-refresh
  if ($(this).scrollTop() < 200) {
    $("#backToTop").hide(); // Pastikan button disembunyikan jika posisi scroll kurang dari 200px
  }

  // Saat pengguna scroll halaman
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      // Jika sudah scroll lebih dari 200px, tampilkan button
      $("#backToTop").fadeIn();
    } else {
      // Jika tidak, sembunyikan button
      $("#backToTop").fadeOut();
    }
  });

  // Saat button diklik, kembali ke atas
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 150); // Scroll cepat dalam 150ms
    return false; // Mencegah aksi default
  });
});
