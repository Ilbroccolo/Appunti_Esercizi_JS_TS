# Appunti ed Esercizi: JavaScript & TypeScript

Benvenuto in questo repository, pensato come un raccoglitore di appunti, esercizi e prove in itinere riguardanti i concetti di programmazione in **JavaScript** e **TypeScript**. Questo progetto unisce i materiali del corso, inclusa la cartella riassuntiva delle esercitazioni e gli esercizi suddivisi per argomenti.

## 📂 Struttura del Repository

Il repository mantiene un'organizzazione strutturata per facilitare lo studio e il recupero degli argomenti:

- **Argomenti Specifici**: Cartelle come `Alberi`, `Ricorsione`, `ABR_Grafi` e `array_avanzati_destrutturazione_default_spread` contengono implementazioni e test mirati.
- **Riepilogo_Esercitazione**: Un raccoglitore unificato con tutti gli script e gli esercizi svolti durante le esercitazioni pratiche (es. gestione liste, code, alberi, ereditarietà, ecc.).
- **Prove in Itinere ed Esami**: Cartelle come `Prova Itinere 2..6`, `Esame Scritto Esercizi` includono simulazioni, appelli passati e prove intermedie.

---

## 🔄 L'Interazione tra JavaScript e TypeScript

Uno degli aspetti chiave affrontati in questi appunti è la convivenza e l'interazione tra JavaScript (JS) e TypeScript (TS). TypeScript è un *superset* sintattico di JavaScript che aggiunge la tipizzazione statica, ma alla fine viene sempre compilato (transpilato) in semplice codice JavaScript prima dell'esecuzione.

Ecco un riassunto dei principali metodi e concetti di interazione tra i due linguaggi:

### 1. TypeScript è un Superset di JavaScript
Qualsiasi codice JavaScript valido è anche codice TypeScript valido (a meno della configurazione stretta del compilatore). Puoi prendere un file `.js`, rinominarlo in `.ts`, e il compilatore TypeScript lo accetterà. Questo rende l'adozione graduale di TS molto semplice.

### 2. Il Processo di Compilazione (`tsc`)
Poiché i browser e i motori come Node.js (nativamente) non comprendono TypeScript, il codice TS deve essere transpilato.
Utilizzando il TypeScript Compiler (`tsc`), il codice `.ts` viene tradotto in codice `.js`. Durante questa fase, TypeScript rimuove tutte le annotazioni di tipo, lasciando un codice JavaScript pulito ed eseguibile.

### 3. Interoperabilità: Usare JS in TS
Se stai lavorando a un progetto misto, TypeScript offre opzioni di configurazione per facilitare la convivenza:
- **`allowJs: true`** nel `tsconfig.json`: Permette a TypeScript di compilare e includere file `.js` all'interno del progetto.
- **`checkJs: true`**: Permette a TypeScript di segnalare errori anche all'interno dei file `.js`, inferendo i tipi o leggendo i commenti JSDoc.

### 4. JSDoc per Tipizzare JavaScript
Non è obbligatorio usare file `.ts` per sfruttare i vantaggi di TypeScript. Tramite commenti JSDoc speciali, puoi "tipizzare" il tuo codice `.js`. L'editor (come VSCode) utilizzerà il motore di TypeScript in background per fornirti l'autocompletamento e il controllo dei tipi.
```javascript
/**
 * Calcola la somma di due numeri
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function somma(a, b) {
  return a + b;
}
```
Aggiungendo `// @ts-check` all'inizio del file `.js`, forzerai il controllo dei tipi basato su JSDoc.

### 5. File di Dichiarazione (`.d.ts`)
Quando usi librerie esterne scritte in puro JavaScript (es. Lodash o Express), TypeScript non sa come autocompletare o validare il codice. I file di dichiarazione (`.d.ts`) fungono da "ponti". Non contengono logica, ma solo la firma (i tipi) delle funzioni, classi e variabili JavaScript esposte, permettendo al tuo codice TypeScript di usarle in modo sicuro.

### 6. Transizione Graduale (Migrazione)
L'interazione tra i due è pensata per rendere la migrazione fluida:
1. Inizia aggiungendo `tsconfig.json` con `allowJs: true`.
2. Aggiungi controlli usando `// @ts-check` nei file JS.
3. Rinomina progressivamente i file da `.js` a `.ts` o `.tsx`.
4. Aggiungi le interfacce e i tipi in modo esplicito (risolvendo i tipi `any` impliciti).
5. Abilita `strict: true` nel `tsconfig.json` per una tipizzazione forte e sicura.
