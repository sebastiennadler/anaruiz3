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
    let interval = null;
  
    function launchDiapo() {
      if (!audio.duration) return;
      const duree = audio.duration;
      const tpsParImage = duree / images.length;
      let index = 0;
      function nextImage() {
        imgTag.src = images[index];
        index = (index + 1) % images.length;
      }
      nextImage();
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        nextImage();
        if (audio.currentTime >= audio.duration - 0.5) clearInterval(interval);
      }, tpsParImage * 1000);
    }
  
    audio.onloadedmetadata = launchDiapo;
    audio.onplay = () => { launchDiapo(); imgTag.src = images[0]; };
  
    // Mode plein écran natif JS au clic ou bouton
    function launchFullscreen() {
      const el = imgTag;
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
    }
    imgTag.addEventListener("click", launchFullscreen);
    document.getElementById("fullscreen-btn").addEventListener("click", launchFullscreen);
  });

   
  