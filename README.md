# Appunti ed Esercizi: JavaScript & TypeScript

Benvenuto in questo repository, pensato come un raccoglitore di appunti, esercizi e prove in itinere riguardanti i concetti di programmazione in **JavaScript** e **TypeScript** per il corso di Laboratorio I. Questo progetto unisce i materiali del corso, inclusa la cartella riassuntiva delle esercitazioni e gli esercizi suddivisi per argomenti.

---

## 📂 Struttura del Repository

- **Argomenti Specifici**: Cartelle come `Alberi`, `Ricorsione`, `ABR_Grafi` e `array_avanzati` contengono implementazioni e test mirati.
- **Riepilogo_Esercitazione**: Un raccoglitore unificato con tutti gli script e gli esercizi svolti durante le esercitazioni pratiche.
- **Prove in Itinere ed Esami**: Simulazioni, appelli passati e prove intermedie per ripassare in vista dell'esame.

---

## 📖 Bignami di Teoria: Strutture Dati e Metodi Utili

Questo riassunto contiene i costrutti, le strutture dati e i metodi fondamentali usati ricorrentemente nel Laboratorio 1 per risolvere gli esercizi su liste, alberi, grafi ed ereditarietà.

### 🧩 Metodi Utili per gli Array (Array Prototype)

Oltre a `.map`, `.filter` e `.reduce`, ecco la lista completa dei metodi più usati durante il corso:

| Metodo | Cosa fa? | Esempio Pratico | Ritorna | Modifica l'originale? |
| --- | --- | --- | --- | --- |
| **`.map()`** | Mappa ogni elemento su un nuovo valore. | `arr.map(x => x * 2)` | Nuovo Array | ❌ No |
| **`.filter()`** | Filtra gli elementi in base a una condizione. | `arr.filter(x => x > 10)` | Nuovo Array | ❌ No |
| **`.reduce()`** | Accumula i valori in un singolo risultato. | `arr.reduce((acc, x) => acc + x, 0)` | Singolo Valore | ❌ No |
| **`.forEach()`** | Itera per ogni elemento (effetti collaterali). | `arr.forEach(x => print(x))` | `undefined` | ❌ No |
| **`.find()`** | Restituisce il *primo* elemento trovato. | `arr.find(x => x.id === 5)` | L'elemento o `undefined` | ❌ No |
| **`.some()`** / **`.every()`** | Controlla se *almeno uno* / *tutti* soddisfano il test. | `arr.some(x => x < 0)` | Boolean | ❌ No |
| **`.push()`** / **`.pop()`** | Aggiunge/Rimuove un elemento in coda (uso Pila/Stack). | `arr.push(5); arr.pop()` | Lunghezza / Elem. rimosso | ⚠️ **Sì** |
| **`.unshift()`** / **`.shift()`** | Aggiunge/Rimuove in testa (uso Coda/Queue). | `arr.shift()` | Lunghezza / Elem. rimosso | ⚠️ **Sì** |
| **`.splice()`** | Rimuove, sostituisce o aggiunge elementi a un indice preciso. | `arr.splice(indice, 1)` | Array di rimossi | ⚠️ **Sì** |
| **`.slice()`** | Crea una copia superficiale di una porzione di array. | `arr.slice(1, 4)` | Nuovo Array | ❌ No |
| **`.sort()`** | Ordina l'array (richiede una funzione di comparazione!). | `arr.sort((a,b) => a - b)` | L'array ordinato | ⚠️ **Sì** |
| **`.join()`** | Unisce gli elementi in una stringa separati da un carattere. | `arr.join(', ')` | Stringa | ❌ No |
| **`.flatMap()`** | Applica `map` e poi "appiattisce" l'array di 1 livello. | `arr.flatMap(x => [x, x*2])`| Nuovo Array | ❌ No |

### 📚 Dizionari (Map) e Insiemi (Set)
Spesso usati per grafi, memoizzazione o per eliminare duplicati.
- **`Set`**: `const s = new Set(); s.add(x); s.has(x); s.delete(x);`
- **`Map`**: `const m = new Map(); m.set(chiave, valore); m.get(chiave); m.has(chiave);`

---

## 🌳 Alberi Binari, Alberi K-Ari e Visite (Traversals)

Gli alberi sono fondamentali in Lab 1. Ecco i concetti teorici e implementativi riassunti:

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

### 2. Le Visite (Traversals)
Le visite servono per attraversare i nodi dell'albero. Possono essere implementate ricorsivamente o tramite iteratori/generatori.

#### A. Visita in Profondità (DFS - Depth First Search)
La visita DFS si spinge fino alle foglie prima di tornare indietro. Su un albero binario si divide in:
- **Pre-ordine (Anticipata)**: Visito il nodo -> Scendo a Sinistra -> Scendo a Destra. Utile per copiare o serializzare un albero.
- **In-ordine (Simmetrica)**: Scendo a Sinistra -> Visito il nodo -> Scendo a Destra. Negli ABR (Alberi Binari di Ricerca), l'in-ordine restituisce i valori ordinati!
- **Post-ordine (Posticipata)**: Scendo a Sinistra -> Scendo a Destra -> Visito il nodo. Utile per calcolare altezze, cancellare l'albero o valutare espressioni matematiche ad albero.

#### B. Visita in Ampiezza (BFS - Livelli)
Attraversa l'albero strato per strato (livello per livello). Non è ricorsiva per natura, utilizza una **Coda (Queue)** di appoggio:
```javascript
function visitaAmpiezza(radice) {
    if (!radice) return;
    const coda = [radice]; // Uso l'array come Coda (push e shift)
    while (coda.length > 0) {
        const corrente = coda.shift(); // Estrae il primo elemento
        console.log(corrente.value); // Visita
        
        if (corrente.left) coda.push(corrente.left);
        if (corrente.right) coda.push(corrente.right);
    }
}
```

### 3. I Generatori (`function*`) per le Visite
I generatori permettono di creare iteratori eleganti per le visite. Invece di salvare l'intera visita in un array o stamparla, il generatore "spara" un nodo alla volta usando `yield`. `yield*` viene usato per delegare la chiamata ricorsiva a un altro iteratore/generatore.

**Esempio: Generatore per la visita Pre-Ordine di un Albero K-Ario**
```javascript
function* preOrderKNode(node) {
    if (!node) return;
    yield node.value; // Visita il nodo corrente
    for (let child of node.children) {
        yield* preOrderKNode(child); // yield* lancia il generatore ricorsivamente sui figli
    }
}

// Utilizzo:
for (let val of preOrderKNode(radice)) {
    console.log(val); // Processa un nodo alla volta
}
```

---

## ⚙️ Altri Costrutti JS/TS Importanti

### Destrutturazione ed Estrazione
Estremamente usati quando si passano oggetti complessi o si usano moduli.
```javascript
// Destrutturazione Array
const [testa, ...coda] = [1, 2, 3, 4]; // testa = 1, coda = [2, 3, 4]

// Destrutturazione Oggetti
const nodo = { val: 5, left: null, right: null };
const { val, left } = nodo; // val = 5
```

### L'Interazione JavaScript 🤝 TypeScript
- **TS è un Superset**: Qualsiasi file JS valido è anche TS valido (se non si forzano controlli restrittivi).
- **JSDoc in JavaScript**: Tramite commenti `/** @param {number} x */` e aggiungendo `// @ts-check` a inizio file, si ottiene la validazione statica dei tipi anche su semplici file `.js`!
- **Dichiarazioni `.d.ts`**: File contenenti solo firme e interfacce senza logica, usati da TS per inferire i tipi di librerie scritte in JS.
