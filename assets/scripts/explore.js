// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;
  const voice_select = document.getElementById('voice-select');
  const text_speak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const img = document.querySelector("img[src='assets/images/smiling.png']");
  let voices = [];

  function populateVoiceList() {

    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent =  voices[i].name + ' [' + voices[i].lang +']';

      if (voices[i].default) {
       option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voice_select.appendChild(option);
    }
  } 

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(text_speak.value);
    const selectedOption = voice_select.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    utterThis.addEventListener('start', (event) => {
      img.src = 'assets/images/smiling-open.png';
    })
    utterThis.addEventListener('end', (event) => {
      img.src = 'assets/images/smiling.png';
    })
  })


}
