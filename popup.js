document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const text = await file.text();
  const parole = text.split('\n').map(w => w.trim()).filter(Boolean);

  chrome.storage.local.get({ paroleTrovate: [] }, (data) => {
    const paroleEsistenti = new Set(data.paroleTrovate);
    let nuove = 0;
    parole.forEach(p => {
      if (!paroleEsistenti.has(p)) {
        paroleEsistenti.add(p);
        nuove++;
      }
    });
    chrome.storage.local.set({
      paroleTrovate: Array.from(paroleEsistenti),
      nuoveParoleCount: (data.nuoveParoleCount || 0) + nuove
    }, () => {
      alert(`Importate ${nuove} nuove parole`);
    });
  });
});

document.getElementById('exportBtn').addEventListener('click', () => {
  chrome.storage.local.get({ paroleTrovate: [] }, ({ paroleTrovate }) => {
    const blob = new Blob([paroleTrovate.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = Object.assign(document.createElement('a'), {
      href: url,
      download: 'parole.txt'
    });
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
});
