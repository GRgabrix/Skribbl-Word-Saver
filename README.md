## ![logo](/icons/icon48.png) Parole Skribbl

Estensione Chrome per skribbl.io che consente di salvare, importare ed esportare le parole trovate durante il gioco.  
Il popup dell'estensione mostra il numero totale di parole salvate e permette di gestire facilmente la lista.

---

## Funzionalità

- Salvataggio automatico delle parole trovate nel gioco.
- Visualizzazione permanente del numero totale di parole salvate.
- Importazione di una lista di parole da file `.txt`.
- Esportazione della lista parole in un file `.txt`.
- Funziona **solo** su [skribbl.io](https://skribbl.io).

---

## Installazione

1. Scarica il progetto e decomprimi il file zip.
2. Apri Chrome e vai su `chrome://extensions/`.
3. Attiva la **Modalità sviluppatore** in alto a destra.
4. Clicca su **Carica estensione non pacchettizzata**.
5. Seleziona la cartella decompressa in precedenza.

---

## Uso

- Accedi a [skribbl.io](https://skribbl.io).
- L'estensione si attiverà automaticamente e salverà le parole quando è il tuo turno di disegnare.
- Clicca sull'icona dell’estensione per aprire il popup.
- Nel popup puoi:
  - Importare parole da un file `.txt`.
  - Esportare la lista parole in un file `.txt`.

---

## Struttura dei file

- `manifest.json`: configurazione dell'estensione.
- `content.js`: script che intercetta e salva le parole durante il gioco.
- `popup.html`: interfaccia utente per import/export parole.
- `popup.js`: logica di importazione ed esportazione.
- `icons/`: cartella contenente le icone dell’estensione.

---

## Contributi

Se vuoi contribuire, apri pure una issue.
