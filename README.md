# Appunti ed Esercizi: JavaScript & TypeScript

Benvenuto in questo repository, un raccoglitore strutturato di appunti, esercizi e prove in itinere riguardanti i concetti di programmazione in **JavaScript** e **TypeScript** per il corso di Laboratorio I. Questo progetto unisce i materiali teorici, i costrutti avanzati e tutti gli esercizi svolti durante le sessioni pratiche.

---

## 📑 Indice dei Contenuti

1. [📂 Struttura del Repository](#-struttura-del-repository)
2. [📖 Bignami di Teoria: Array, Map e Set](#-bignami-di-teoria-array-map-e-set)
   - [Metodi Utili per gli Array](#metodi-utili-per-gli-array-array-prototype)
   - [Dizionari (Map) e Insiemi (Set)](#dizionari-map-e-insiemi-set)
3. [🌳 Alberi Binari, Alberi K-Ari e Visite (Traversals)](#-alberi-binari-alberi-k-ari-e-visite-traversals)
   - [Nodi dell'Albero](#1-nodi-dellalbero)
   - [Visita in Profondità (DFS)](#a-visita-in-profondità-dfs---depth-first-search)
   - [Visita in Ampiezza (BFS)](#b-visita-in-ampiezza-bfs---livelli)
   - [Generatori e Iteratori](#3-i-generatori-function-per-le-visite)
4. [🛠 Funzioni e Pattern Complessi (con Esercizi)](#-funzioni-e-pattern-più-complessi-con-link-agli-esercizi)
   - [Memoizzazione (Caching)](#1-la-memoizzazione-caching-per-lottimizzazione)
   - [Altezza e Ricerca Massimo](#2-calcolo-dellaltezza-e-ricerca-del-massimo-negli-alberi)
   - [Coda di Priorità (Priority Queue)](#3-coda-di-priorità-priority-queue)
   - [Filtro Avanzato o "Sanitize"](#4-filtro-avanzato-o-sanitize-degli-oggetti)
5. [⚙️ Costrutti JS/TS Avanzati (Closure, Prototype, Spread)](#-costrutti-jsts-avanzati-closure-prototype-spread)
   - [Destrutturazione e Spread/Rest](#destrutturazione-ed-estrazione-spread--rest)
   - [L'Interazione JavaScript & TypeScript](#linterazione-javascript--typescript)
   - [Closure (Chiusure)](#closure-chiusure)
   - [Prototipi (Prototype)](#prototipi-prototype)
6. [🚀 Come Usare Questo Repository](#-come-usare-questo-repository)

---

## 📂 Struttura del Repository

- **Argomenti Specifici**: Cartelle come `Alberi`, `Ricorsione`, `ABR_Grafi` e `array_avanzati` contengono implementazioni e test mirati sui singoli concetti.
- **Riepilogo_Esercitazione**: Un raccoglitore unificato contenente oltre 70 file con tutti gli script e gli esercizi svolti durante le esercitazioni pratiche (numerati per facilitare la ricerca).
- **Prove in Itinere ed Esami**: Simulazioni, appelli passati e prove intermedie per ripassare in vista dell'esame.

---

## 📖 Bignami di Teoria: Array, Map e Set

Questo riassunto contiene i costrutti, le strutture dati e i metodi fondamentali usati ricorrentemente nel Laboratorio 1.

### Metodi Utili per gli Array (Array Prototype)

Gli array in JS/TS sono dotati di metodi di ordine superiore. I metodi mutabili (che modificano l'array originale) vanno usati con cautela se si adotta un approccio funzionale.

| Metodo | Cosa fa? | Esempio Pratico | Ritorna | Modifica l'originale? |
| --- | --- | --- | --- | --- |
| **`.map()`** | Mappa ogni elemento su un nuovo valore. | `arr.map(x => x * 2)` | Nuovo Array | ❌ No |
| **`.filter()`** | Filtra gli elementi in base a una condizione. | `arr.filter(x => x > 10)` | Nuovo Array | ❌ No |
| **`.reduce()`** | Accumula i valori in un singolo risultato. | `arr.reduce((acc, x) => acc + x, 0)` | Singolo Valore | ❌ No |
| **`.reduceRight()`**| Come reduce, ma parte dall'ultimo elemento. | `arr.reduceRight((acc, x) => acc + x, '')` | Singolo Valore | ❌ No |
| **`.forEach()`** | Itera per ogni elemento (effetti collaterali). | `arr.forEach(x => print(x))` | `undefined` | ❌ No |
| **`.find()`** | Restituisce il *primo* elemento trovato. | `arr.find(x => x.id === 5)` | L'elemento o `undefined` | ❌ No |
| **`.findIndex()`**| Restituisce l'indice del primo elemento trovato.| `arr.findIndex(x => x === 5)` | Indice (-1 se non c'è) | ❌ No |
| **`.some()`** | Controlla se *almeno uno* soddisfa il test. | `arr.some(x => x < 0)` | Boolean | ❌ No |
| **`.every()`** | Controlla se *tutti* soddisfano il test. | `arr.every(x => x > 0)` | Boolean | ❌ No |
| **`.push()`** | Aggiunge un elemento alla fine (uso Pila). | `arr.push(5)` | Nuova Lunghezza | ⚠️ **Sì** |
| **`.pop()`** | Rimuove l'ultimo elemento (uso Pila). | `arr.pop()` | Elem. rimosso | ⚠️ **Sì** |
| **`.unshift()`** | Aggiunge all'inizio (uso Coda). | `arr.unshift(1)` | Nuova Lunghezza | ⚠️ **Sì** |
| **`.shift()`** | Rimuove il primo elemento (uso Coda). | `arr.shift()` | Elem. rimosso | ⚠️ **Sì** |
| **`.splice()`** | Rimuove, sostituisce o aggiunge elementi in mezzo. | `arr.splice(indice, 1)` | Array di rimossi | ⚠️ **Sì** |
| **`.slice()`** | Crea una copia (superficiale) di una porzione. | `arr.slice(1, 4)` | Nuovo Array | ❌ No |
| **`.sort()`** | Ordina l'array (richiede una funzione di comparazione!). | `arr.sort((a,b) => a - b)` | L'array ordinato | ⚠️ **Sì** |
| **`.join()`** | Unisce gli elementi in una stringa usando un separatore.| `arr.join(', ')` | Stringa | ❌ No |
| **`.flatMap()`** | Applica `map` e poi "appiattisce" l'array di 1 livello. | `arr.flatMap(x => [x, x*2])`| Nuovo Array | ❌ No |

### Dizionari (Map) e Insiemi (Set)
Spesso usati per grafi, memoizzazione o per eliminare duplicati.
- **`Set`**: Una collezione di valori *univoci*. Non ammette duplicati.
  ```javascript
  const s = new Set([1, 2, 2, 3]); // Risultato: {1, 2, 3}
  s.add(4); s.has(2); s.delete(1); s.size;
  ```
- **`Map`**: Una mappa Chiave-Valore dove la chiave può essere di *qualsiasi tipo* (inclusi oggetti!), a differenza dei classici oggetti JS le cui chiavi sono solo stringhe.
  ```javascript
  const m = new Map(); 
  m.set(chiave, valore); 
  m.get(chiave); 
  m.has(chiave);
  ```

---

## 🌳 Alberi Binari, Alberi K-Ari e Visite (Traversals)

Gli alberi sono fondamentali nel Laboratorio 1. Ecco i concetti teorici e implementativi dettagliati:

### 1. Nodi dell'Albero
**Albero Binario**: Ogni nodo ha al massimo due figli (sinistro e destro).
```typescript
class BNode<T> {
    value: T;
    left: BNode<T> | null;
    right: BNode<T> | null;
    constructor(value: T, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
```

**Albero K-Ario**: Ogni nodo può avere un numero arbitrario di figli, solitamente salvati in un array.
```typescript
class KNode<T> {
    value: T;
    children: KNode<T>[];
    constructor(value: T, children: KNode<T>[] = []) {
        this.value = value;
        this.children = children;
    }
}
```

### A. Visita in Profondità (DFS - Depth First Search)
La visita DFS si spinge fino alle foglie prima di tornare indietro (backtracking tramite ricorsione). Su un albero binario si divide in:
- **Pre-ordine (Anticipata)**: Visito il nodo -> Scendo a Sinistra -> Scendo a Destra. Ottima per creare copie esatte o serializzare la struttura.
- **In-ordine (Simmetrica)**: Scendo a Sinistra -> Visito il nodo -> Scendo a Destra. Negli ABR (Alberi Binari di Ricerca), la visita In-Ordine restituisce i valori perfettamente ordinati in modo crescente!
- **Post-ordine (Posticipata)**: Scendo a Sinistra -> Scendo a Destra -> Visito il nodo. Essenziale per quando un nodo dipende dai risultati dei suoi figli (es. calcolare l'altezza totale, eliminare tutti i nodi o risolvere calcolatrici ad albero).

### B. Visita in Ampiezza (BFS - Livelli)
Attraversa l'albero strato per strato (livello 0, poi livello 1, ecc.). Non usa la ricorsione di sistema, ma sfrutta esplicitamente una **Coda (Queue)** (FIFO - First In First Out).
```javascript
function visitaAmpiezza(radice) {
    if (!radice) return;
    const coda = [radice]; // Uso l'array come Coda
    while (coda.length > 0) {
        const corrente = coda.shift(); // Estrae dalla testa (FIFO)
        console.log(corrente.value); // Visita il nodo
        
        // Accoda i figli per elaborarli in seguito
        if (corrente.left) coda.push(corrente.left); 
        if (corrente.right) coda.push(corrente.right);
    }
}
```

### 3. I Generatori (`function*`) per le Visite
Invece di accumulare i nodi visitati in un grande array in memoria, il generatore li restituisce in modo asincrono (li "spara") uno a uno su richiesta del ciclo `for...of`.
```javascript
function* preOrderKNode(node) {
    if (!node) return;
    yield node.value; // Visita il nodo corrente e mette in pausa
    for (let child of node.children) {
        yield* preOrderKNode(child); // yield* delega la generazione all'iteratore figlio (ricorsione)
    }
}
```

---

## 🛠 Funzioni e Pattern Più Complessi (con link agli Esercizi)

Ecco i pattern avanzati maggiormente richiesti negli esami e progetti, con richiamo diretto ai file in cui sono stati implementati.

### 1. La Memoizzazione (Caching per l'ottimizzazione)
La memoizzazione permette di velocizzare funzioni fortemente ricorsive (come il Fibonacci) ricordando risultati già calcolati in una `Map` temporanea.
🔗 **Vedi esempi pratici**: [15_memo.js](./Riepilogo_Esercitazione/15_memo.js) o [23_funzione_cache.ts](./Riepilogo_Esercitazione/23_funzione_cache.ts)
```javascript
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args); // Converto gli argomenti in stringa come chiave univoca
    if (cache.has(key)) return cache.get(key); // Fast-return dalla cache
    
    const result = fn(...args);
    cache.set(key, result); // Salvo l'operazione costosa per il futuro
    return result;
  };
}
```

### 2. Calcolo dell'Altezza e Ricerca del Massimo negli Alberi
Modelli classici di visita in Post-Ordine che devi padroneggiare per ogni esame.
🔗 **Vedi esempi**: [altezza.js](./Riepilogo_Esercitazione/altezza.js) e [63_albero_massimo.ts](./Riepilogo_Esercitazione/63_albero_massimo.ts)
```javascript
// Esempio: Calcolo Altezza Massima
function calcolaAltezza(node) {
  if (!node) return -1; // Convenzione: albero vuoto = -1, albero di solo radice = 0
  const hSinistra = calcolaAltezza(node.left);
  const hDestra = calcolaAltezza(node.right);
  return 1 + Math.max(hSinistra, hDestra);
}

// Esempio: Trova il Valore Massimo
function trovaMassimo(node) {
  if (!node) return -Infinity; // Se è nullo, restituisco un numero piccolissimo
  return Math.max(node.value, trovaMassimo(node.left), trovaMassimo(node.right));
}
```

### 3. Coda di Priorità (Priority Queue)
Al contrario della normale coda FIFO, la priority queue gestisce gli elementi in base a un punteggio di urgenza/priorità. Spesso usata nel Triage ospedaliero o per processare task.
🔗 **Vedi esempi**: [36_coda_priorita.ts](./Riepilogo_Esercitazione/36_coda_priorita.ts) o [49_triage_pronto_soccorso.ts](./Riepilogo_Esercitazione/49_triage_pronto_soccorso.ts)

### 4. Filtro Avanzato o "Sanitize" degli Oggetti
Tecniche ricorsive per esplorare le chiavi di un oggetto Javascript (usando `Object.keys` o `Object.entries`) per ripulire proprietà nulle, indefinite o non valide.
🔗 **Vedi esempio**: [39_sanitize_oggetto.ts](./Riepilogo_Esercitazione/39_sanitize_oggetto.ts)

---

## ⚙️ Costrutti JS/TS Avanzati (Closure, Prototype, Spread)

### Destrutturazione ed Estrazione (Spread / Rest)
Estremamente usati quando si passano oggetti complessi, per la ricorsione su Array o per creare copie sicure immutabili.
```javascript
// Destrutturazione Array (Separare la Testa dalla Coda per le ricorsioni funzionali)
const [testa, ...coda] = [1, 2, 3, 4]; // testa = 1, coda = [2, 3, 4]

// Clonazione ed espansione (Spread)
const vecchioUtente = { nome: "Mario", id: 1 };
const nuovoUtente = { ...vecchioUtente, isAdmin: true }; // Crea una copia isolata con un campo in più
```

### Closure (Chiusure)
Una "closure" in JavaScript è una funzione che "ricorda" lo scope (l'ambiente) in cui è stata creata, anche quando viene eseguita altrove. È il principio alla base della memoizzazione vista sopra o dei "contatori privati".
```javascript
function creaContatore(inizio = 0) {
    let conteggio = inizio; // Variabile intrappolata nello scope (privata!)
    return function() {
        conteggio++;
        return conteggio;
    }
}
const conta = creaContatore(10);
console.log(conta()); // 11
console.log(conta()); // 12
```

### Prototipi (Prototype)
JavaScript non usa classi vere e proprie "sotto il cofano", ma l'ereditarietà basata su prototipi. Ogni oggetto ha un link al suo prototipo, dal quale eredita metodi e proprietà. Modificare il `prototype` degli oggetti base permette di aggiungere funzioni globali a tutti gli array o stringhe.
🔗 **Vedi esempio**: [67_Prototype_Array](./Riepilogo_Esercitazione/68_Prototype_Array.ts)
```javascript
// Aggiungiamo un metodo "primoElemento()" a TUTTI gli array di JS
Array.prototype.primoElemento = function() {
    return this.length > 0 ? this[0] : null;
};
const mioArray = [10, 20, 30];
console.log(mioArray.primoElemento()); // 10
```

### L'Interazione JavaScript & TypeScript
- **TS è un Superset**: Qualsiasi file `.js` valido è anche codice `.ts` valido. TypeScript aggiunge controlli statici e Type Annotations (es. `val: number`) che scompaiono una volta compilato in puro JS (`tsc`).
- **JSDoc in JavaScript**: Tramite commenti JSDoc (es. `/** @param {number} x */`) e aggiungendo `// @ts-check` come prima riga del file, l'editor effettuerà la validazione dei tipi come se fossi in TS pur restando in un file puro `.js`.
- **Dichiarazioni `.d.ts`**: File speciali che non contengono implementazioni (codice eseguibile), ma solo *firme* di funzioni e interfacce. Servono a spiegare a TypeScript come sono fatte librerie esterne nate prima di lui in Javascript nativo.

---

## 🚀 Come Usare Questo Repository

- Naviga la cartella **Riepilogo_Esercitazione** usando il prefisso numerico se stai cercando un ordine cronologico di difficoltà.
- Sfrutta questo **README** come guida teorica pre-esame.
- Quando fai commit, ricorda che in locale è già attiva la connessione con la remote GitHub associata per il push!
