document.addEventListener("DOMContentLoaded", function () {
  var contenedorPopu = document.getElementById("contenedor-populares");
  var popularDer = document.getElementById("popular-derecha");
  var popularIzq = document.getElementById("popular-izquierda");
  var popuWidth = contenedorPopu.offsetWidth;
  var popuScroll = contenedorPopu.scrollWidth;
  var popuPos = 0;

  popularDer.addEventListener("click", function () {
    popuPos += popuWidth;
    if (popuPos >= popuScroll - popuWidth / 2) {
      popuPos = popuScroll - popuWidth / 2;
    }
    contenedorPopu.scrollTo({
      left: popuPos,
      behavior: "smooth",
    });
  });

  popularIzq.addEventListener("click", function () {
    popuPos -= popuWidth;
    if (popuPos < 0) {
      popuPos = 0;
    }
    contenedorPopu.scrollTo({
      left: popuPos,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var contenedorOpi = document.getElementById("contenedor-opiniones");
  var opiDer = document.getElementById("opinion-derecha");
  var opiIzq = document.getElementById("opinion-izquierda");
  var opiWidth = contenedorOpi.offsetWidth;
  var opiScroll = contenedorOpi.scrollWidth;
  var opiPos = 0;

  opiDer.addEventListener("click", function () {
    opiPos += opiWidth / 2;
    if (opiPos >= opiScroll - opiWidth / 2) {
      opiPos = opiScroll - opiWidth / 2;
    }
    contenedorOpi.scrollTo({
      left: opiPos,
      behavior: "smooth",
    });
  });

  opiIzq.addEventListener("click", function () {
    opiPos -= opiWidth / 2;
    if (opiPos < 0) {
      opiPos = 0;
    }
    contenedorOpi.scrollTo({
      left: opiPos,
      behavior: "smooth",
    });
  });
});

const input = document.getElementsByTagName("input");
const label = document.getElementsByTagName("label");

for (let index = 0; index < input.length; index++) {
  input[index].addEventListener("focus", function () {
    label[index].style.transform = "scale(0.7) translateY(-26px) translateX(-15%)";
  });
  input[index].addEventListener("blur", function () {
    if (input[index].value.trim() === '') {
      label[index].style.transform = "scale(1) translateY(0)";
    }
  });
}

// Cosas del PopUp del mundo
document.addEventListener('DOMContentLoaded', function() {
  var btnAbrirPopup = document.getElementById('btnAbrirPopup');
  var btnCerrarPopup = document.getElementById('btnCerrarPopup');
  var btnCerrar = document.getElementById('btnCerrar');
  var popup = document.getElementById('popup');

  btnAbrirPopup.addEventListener('click', function() {
    document.body.classList.add('no-scroll');
    setTimeout(function() {
      popup.style.display = 'flex';
    }, 2000);
  });

  btnCerrarPopup.addEventListener('click', function() {
    popup.style.display = 'none';
    document.body.classList.remove('no-scroll');
  });
});


// Cosas de la música
document.addEventListener('DOMContentLoaded', function() {
  var backgroundMusic = document.getElementById('backgroundMusic');
  if (sessionStorage.getItem('musicPlaying') === 'true') {
    backgroundMusic.play();
  }

  backgroundMusic.addEventListener('click', function() {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      sessionStorage.setItem('musicPlaying', 'true');
    } else {
      backgroundMusic.pause();
      sessionStorage.setItem('musicPlaying', 'false');
    }
  });
});