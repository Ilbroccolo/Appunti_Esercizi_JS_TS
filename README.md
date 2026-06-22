# Appunti ed Esercizi: JavaScript & TypeScript

Benvenuto in questo repository, pensato come un raccoglitore di appunti, esercizi e prove in itinere riguardanti i concetti di programmazione in **JavaScript** e **TypeScript**. Questo progetto unisce i materiali del corso, inclusa la cartella riassuntiva delle esercitazioni e gli esercizi suddivisi per argomenti.

## 📂 Struttura del Repository

- **Argomenti Specifici**: Cartelle come `Alberi`, `Ricorsione`, `ABR_Grafi` e `array_avanzati_destrutturazione_default_spread` contengono implementazioni e test mirati.
- **Riepilogo_Esercitazione**: Un raccoglitore unificato con tutti gli script e gli esercizi svolti durante le esercitazioni pratiche (es. gestione liste, code, alberi, ereditarietà).
- **Prove in Itinere ed Esami**: Simulazioni, appelli passati e prove intermedie per ripassare in vista dell'esame.

---

## 📖 Bignami di Teoria: Metodi e Snippet Utili

Questa sezione contiene un riassunto dei costrutti e dei metodi fondamentali da ricordare per gli esercizi.

### 🧩 Metodi Utili per gli Array (Array Prototype)

Gli array in JS/TS sono estremamente potenti grazie ai loro metodi integrati di ordine superiore. Ecco una tabella riassuntiva dei principali:

| Metodo | Cosa fa? | Esempio Pratico | Ritorna |
| --- | --- | --- | --- |
| **`.map()`** | Trasforma ogni elemento di un array applicando una funzione e crea un _nuovo_ array con i risultati. | `arr.map(x => x * 2)` (Raddoppia tutti) | Un nuovo Array |
| **`.filter()`** | Crea un _nuovo_ array contenente solo gli elementi che superano un determinato test (condizione vera). | `arr.filter(x => x > 10)` (Solo > 10) | Un nuovo Array |
| **`.reduce()`** | "Riduce" l'array a un singolo valore, accumulando i risultati iterazione dopo iterazione (es. una somma). | `arr.reduce((acc, curr) => acc + curr, 0)` | Un singolo Valore |
| **`.forEach()`** | Esegue una funzione per ogni elemento dell'array. Usato per "effetti collaterali" (stampare, modificare esterni). | `arr.forEach(x => console.log(x))` | `undefined` |
| **`.find()`** | Cerca e restituisce il _primo_ elemento che soddisfa una determinata condizione. | `arr.find(x => x.id === 5)` | L'elemento o `undefined` |
| **`.some()`** | Controlla se _almeno uno_ degli elementi soddisfa la condizione. | `arr.some(x => x < 0)` | Boolean (`true`/`false`) |
| **`.every()`** | Controlla se _tutti_ gli elementi soddisfano la condizione. | `arr.every(x => x > 0)` | Boolean (`true`/`false`) |
| **`.includes()`**| Verifica semplicemente se un elemento specifico è presente nell'array. | `arr.includes('Mela')` | Boolean (`true`/`false`) |

### ⚙️ Generatori e Iteratori

I **Generatori** sono un tipo speciale di funzione che può essere messa in pausa ed eseguita in più step. Al posto di eseguire tutto il codice e fare un singolo `return`, un generatore usa la parola chiave `yield` per "sputare fuori" (restituire) valori in sequenza ogni volta che viene chiamato.

#### Sintassi di un Generatore
Si riconosce dall'asterisco `*` dopo la parola `function`:
```javascript
function* contaFinoA(max) {
  let i = 1;
  while (i <= max) {
    yield i; // Pausa l'esecuzione e restituisce 'i'
    i++;
  }
}

// Come usarlo:
const generatore = contaFinoA(3); // Crea l'oggetto iteratore
console.log(generatore.next().value); // 1
console.log(generatore.next().value); // 2
console.log(generatore.next().value); // 3
console.log(generatore.next().done);  // true (ha finito)
```

**Perché sono utili?**
- Permettono di generare sequenze infinite (es. numeri di Fibonacci o ID univoci) senza occupare memoria per un array gigantesco.
- Ideali per attraversare strutture dati complesse (come gli **Alberi**) un nodo alla volta su richiesta.

### 📦 Destrutturazione e Spread Operator (`...`)

Questi operatori semplificano la copia, l'unione e l'estrazione di dati da oggetti e array.

**Destrutturazione (Estrazione dati)**
```javascript
const utente = { nome: "Mario", eta: 25 };
const { nome, eta } = utente; // Estrae le proprietà come variabili isolate

const array = [10, 20, 30];
const [primo, secondo] = array; // primo = 10, secondo = 20
```

**Spread Operator (Spalmatura/Unione)**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const uniti = [...arr1, ...arr2]; // [1, 2, 3, 4, 5] (Copia e unisce i valori)

const utenteCopia = { ...utente, admin: true }; 
// { nome: "Mario", eta: 25, admin: true }
```

---

## 🔄 L'Interazione tra JavaScript e TypeScript

Uno degli aspetti chiave affrontati in questi appunti è la convivenza tra JavaScript (JS) e TypeScript (TS). TypeScript è un *superset* sintattico di JS che aggiunge la tipizzazione statica, ma viene transpilato in semplice JS prima dell'esecuzione.

### Concetti Chiave:
1. **TS è un Superset**: Qualsiasi file JS valido è anche TS valido.
2. **JSDoc in JavaScript**: Usando commenti `@param` e `@returns` abbinati a `// @ts-check` all'inizio del file, puoi avere la potenza del controllo tipi di TypeScript anche nei file in puro `.js`.
3. **File `.d.ts` (Dichiarazioni)**: Fungono da ponte. Contengono solo le firme delle funzioni per permettere a TS di capire e validare librerie esterne scritte in JS.
4. **`tsconfig.json`**: Usando `allowJs: true` è possibile compilare file JS all'interno di un progetto TS, facilitando la migrazione progressiva.
