// expose.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  
  const horn_select = document.getElementById('horn-select');
  const img_main = document.querySelector('img');
  const img_vol = document.querySelector("img[src='assets/icons/volume-level-2.svg']");
  const vol = document.querySelector("input[type='range']");
  const aud = document.querySelector("audio[class = 'hidden']");
  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  horn_select.addEventListener('input', (event) =>{
    if(event.target.value === "air-horn"){
      img_main.src = "assets/images/air-horn.svg";
      aud.setAttribute("src", "assets/audio/air-horn.mp3");
    }
    if(event.target.value === "car-horn"){
      img_main.src = "assets/images/car-horn.svg";
      aud.setAttribute("src", "assets/audio/car-horn.mp3");
    }
    if(event.target.value === "party-horn"){
      img_main.src = "assets/images/party-horn.svg";
      aud.setAttribute("src", "assets/audio/party-horn.mp3");
    }
  });

  vol.addEventListener('input', (event) =>{

    aud.volume = event.target.value / 100;

    if(event.target.value == 0){
      img_vol.src = "assets/icons/volume-level-0.svg";
    }
    else if (event.target.value > 0 && event.target.value < 33){
      img_vol.src = "assets/icons/volume-level-1.svg";
    } 
    else if (event.target.value >= 33 && event.target.value < 67) {
      img_vol.src = "assets/icons/volume-level-2.svg";
    }
    else {
      img_vol.src = "assets/icons/volume-level-3.svg";
    }
  });

  button.addEventListener('click', (event) =>{
    aud.play();
    if(horn_select.options[horn_select.selectedIndex].value === "party-horn"){
      jsConfetti.addConfetti(); 
    }
  });
}
