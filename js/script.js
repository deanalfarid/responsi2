window.onload = function () {
    const bannerText = document.querySelector('.banner-text');
    bannerText.style.animation = 'fadeIn 2s ease-in-out, slideIn 2s ease-in-out';
  };
   // Set tanggal akhir promosi
const promotionEndDate = new Date("Jan 10, 2025 23:59:59").getTime();

// Update timer setiap detik
const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = promotionEndDate - now;

  // Perhitungan waktu tersisa
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan waktu tersisa
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Jika waktu habis, hentikan timer
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown-section").innerHTML = 
      "<h2>Promo Telah Berakhir!</h2>";
  }
}, 1000);
