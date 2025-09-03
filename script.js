document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splashScreen");
  const main = document.getElementById("mainContent");
  const skipBtn = document.getElementById("skipIntro");
  const audio = document.getElementById("startupChime");

  // Play chime at start
  audio.currentTime = 0;
  audio.play().catch(err => console.log("Autoplay blocked:", err));

  // Auto-hide splash after 8s
  setTimeout(() => {
    splash.style.display = "none";
    main.style.display = "block";
  }, 8000);

  // Skip button stops chime and hides splash
  skipBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    splash.style.display = "none";
    main.style.display = "block";
  });
});
