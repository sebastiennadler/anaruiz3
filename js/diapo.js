document.addEventListener("DOMContentLoaded", function() {
  const images = [
    "img/accueil.jpg",
    "img/andaloucia-1.jpg",
    "img/andaloucia-2.jpg",
    "img/andaloucia-3.jpg",
    "img/annapurna.jpg",
    "img/athenes.jpg",
    "img/au-bord-du-visible.jpg",
    "img/au-dessous-du-volcan.jpg",
    "img/chaleur-dafrique.jpg",
    "img/dragonnier-couverture.jpg",
    "img/eaux-rouges.jpg",
    "img/entre-lafrique-et-leurope.jpg",
    "img/fda-2009-couverture.jpg",
    "img/force-tranquille.jpg",
    "img/guizeh.jpg",
    "img/le-vieux-dragonnier.jpg",
    "img/le-vieux-volcan.jpg",
    "img/llanes.jpg",
    "img/maison-chrysalide.jpg",
    "img/maison-de-thyphee.jpg",
    "img/maison-floride.jpg",
    "img/maison-palais-prison.jpg",
    "img/maison-paradis-perdu.jpg",
    "img/maison-sacree.jpg",
    "img/maison-temple.jpg",
    "img/naples.jpg",
    "img/nudite-couverture.jpg",
    "img/sable-noir.jpg",
    "img/sur-la-terre.jpg"
  ];
  const audio = document.getElementById("audio-diapo");
  const imgTag = document.getElementById("diapo-img");
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  let interval = null;
  let index = 0;

  function nextImage() {
    if (!imgTag) return;
    imgTag.src = images[index];
    index = (index + 1) % images.length;
  }

  function launchDiapo(duration) {
    if (!imgTag || images.length === 0) return;
    const duree = duration || 30; // durée par défaut si pas d'audio
    const tpsParImage = duree / images.length;
    index = 0;
    nextImage();
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      nextImage();
    }, tpsParImage * 1000);
  }

  // Si audio présent, synchronise sur la durée de l'audio
  if (audio) {
    audio.onloadedmetadata = () => launchDiapo(audio.duration);
    audio.onplay = () => launchDiapo(audio.duration);
  } else {
    // Sinon, lance le diaporama avec une durée par défaut (ex: 30s)
    launchDiapo(30);
  }

  // Affiche la première image au chargement
  if (imgTag) imgTag.src = images[0];

  // Plein écran compatible mobile/desktop
  function launchFullscreen() {
    const el = imgTag;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
  }

  if (imgTag) {
    imgTag.addEventListener("click", launchFullscreen);
    imgTag.addEventListener("touchend", launchFullscreen);
  }
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", launchFullscreen);
    fullscreenBtn.addEventListener("touchend", launchFullscreen);
  }
});



