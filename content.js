// Crea un popup fisso in alto a destra
const popup = document.createElement('div');
Object.assign(popup.style, {
  position: 'fixed',
  top: '10px',
  right: '10px',
  zIndex: '9999',
  padding: '10px 15px',
  borderRadius: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  color: 'white',
  fontSize: '14px',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 0 8px rgba(0,0,0,0.3)',
  pointerEvents: 'none'
});
document.body.appendChild(popup);

// Aggiorna il contenuto del popup ogni 5 secondi
function aggiornaPopup() {
  chrome.storage.local.get({ paroleTrovate: [] }, (data) => {
    popup.textContent = `Parole salvate: ${data.paroleTrovate.length}`;
  });
}
aggiornaPopup();
setInterval(aggiornaPopup, 5000);

// Salva nuove parole trovate nel DOM
function salvaParole(parole) {
  chrome.storage.local.get({ paroleTrovate: [] }, (data) => {
    const esistenti = new Set(data.paroleTrovate);
    let modificate = false;

    parole.forEach(p => {
      const parola = p.textContent.trim();
      if (!esistenti.has(parola)) {
        esistenti.add(parola);
        modificate = true;
      }
    });

    if (modificate) {
      chrome.storage.local.set({ paroleTrovate: Array.from(esistenti) });
    }
  });
}

// Osservatore DOM
const observer = new MutationObserver(() => {
  const words = document.querySelectorAll('.overlay-content .words .word');
  if (words.length > 0 && !words[0].classList.contains('picked-by-extension')) {
    salvaParole(Array.from(words));
    words[0].classList.add('picked-by-extension');
    words[0].click();
  }
});

const target = document.getElementById("game-canvas");
if (target) {
  observer.observe(document.body, { childList: true, subtree: true });
}
