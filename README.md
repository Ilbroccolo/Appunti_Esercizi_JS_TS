# Appunti ed Esercizi: JavaScript & TypeScript

Raccolta schematica di appunti, esercizi e prove per **JavaScript** e **TypeScript** (Laboratorio I).

---

## 📑 Indice
1. [📂 Struttura del Repository](#-struttura-del-repository)
2. [🟨 MACRO-SEZIONE JAVASCRIPT](#-macro-sezione-javascript)
   - [Metodi Array](#1-metodi-array)
   - [Dizionari (Map) e Insiemi (Set)](#2-dizionari-map-e-insiemi-set)
   - [Alberi e Visite (DFS, BFS, Generatori)](#3-alberi-e-visite-dfs-bfs-generatori)
   - [Pattern: Memoizzazione, Closure, Prototipi](#4-pattern-e-costrutti-avanzati)
3. [🟦 MACRO-SEZIONE TYPESCRIPT](#-macro-sezione-typescript)
   - [Tipi Primitivi e Tuple](#1-tipi-primitivi-e-tuple)
   - [Tipi Custom e Interfacce](#2-tipi-custom-type-e-interfacce-interface)
   - [Generics (`<T>`)](#3-generics-t)
   - [Interoperabilità con JS](#4-interoperabilità-con-js)

---

## 📂 Struttura del Repository
- `Alberi`, `Ricorsione`, `ABR_Grafi`: Esercizi tematici isolati.
- `Riepilogo_Esercitazione`: Grande raccoglitore di script ed esercizi pratici numerati.
- `Prove in Itinere`: Esami passati e simulazioni.

---

## 🟨 MACRO-SEZIONE JAVASCRIPT

Sezione dedicata ai costrutti puri, validi sia in JS che in TS, espressi nel modo più compatto e schematico.

### 1. Metodi Array
I metodi più utili per l'esame. *Attenzione a quelli che modificano (mutano) l'array originario.*

| Metodo | Utilizzo | Modifica Originale? |
| --- | --- | :---: |
| `.map(x => x*2)` | Trasforma ogni elemento (Nuovo array). | ❌ |
| `.filter(x => x>0)`| Estrae elementi che superano il test. | ❌ |
| `.reduce((a,c)=>a+c)`| Accumula tutti i valori in uno solo. | ❌ |
| `.find(x => x==5)` | Trova il **primo** elemento corrispondente. | ❌ |
| `.some(x => x<0)`  | `true` se **almeno uno** rispetta il test. | ❌ |
| `.every(x => x>0)` | `true` se **tutti** rispettano il test. | ❌ |
| `.push(x) / .pop()`| Aggiunge/rimuove in coda (uso **Stack**). | ⚠️ |
| `.unshift(x) / .shift()`| Aggiunge/rimuove in testa (uso **Coda**). | ⚠️ |
| `.splice(idx, n)`  | Rimuove `n` elementi dall'indice `idx`. | ⚠️ |
| `.slice(start, end)`| Copia porzioni di array. | ❌ |
| `.sort((a,b)=>a-b)`| Ordina l'array. | ⚠️ |
| `.flatMap(x => [x])`| Mappa e appiattisce di 1 livello. | ❌ |

### 2. Dizionari (Map) e Insiemi (Set)
* **`Set`** (Insiemi senza duplicati):
  `const s = new Set([1,1,2]);` -> `{1, 2}`
  Metodi: `.add(x)`, `.has(x)`, `.delete(x)`, `.size`.
* **`Map`** (Chiave-Valore dove la chiave può essere un oggetto):
  `const m = new Map();`
  Metodi: `.set(k, v)`, `.get(k)`, `.has(k)`, `.delete(k)`.

### 3. Alberi e Visite (DFS, BFS, Generatori)

**Struttura Nodi (Schematica):**
* Binario: `nodo = { value, left, right }`
* K-Ario: `nodo = { value, children: [] }`

**DFS - Ricorsione (Profondità):**
* **Pre-Ordine**: Elabora -> Sinistra -> Destra
* **In-Ordine**: Sinistra -> Elabora -> Destra *(Ordina i BST/ABR)*
* **Post-Ordine**: Sinistra -> Destra -> Elabora *(Calcola altezze, massimi)*

**BFS - Coda (Ampiezza a Livelli):**
```javascript
function BFS(radice) {
    let coda = [radice];
    while(coda.length > 0) {
        let nodo = coda.shift(); // Estrae da testa
        console.log(nodo.value); // Visita
        if(nodo.left) coda.push(nodo.left); // Accoda figli
        if(nodo.right) coda.push(nodo.right);
    }
}
```

**Generatori per le Visite (`yield`):**
Permettono di iterare un albero step-by-step.
```javascript
function* visita(nodo) {
    if(!nodo) return;
    yield nodo.value; // Pausa e restituisci
    yield* visita(nodo.left); // Ricorsione nel generatore
    yield* visita(nodo.right);
}
```

### 4. Pattern e Costrutti Avanzati

* **Memoizzazione (Caching)** (Esercizi `15_memo.js`):
  Salva risultati costosi in una Map per non ripeterli.
  ```javascript
  const cache = new Map();
  function fib(n) {
      if(cache.has(n)) return cache.get(n);
      const res = n <= 1 ? n : fib(n-1) + fib(n-2);
      cache.set(n, res);
      return res;
  }
  ```

* **Closure (Chiusure)**:
  Variabili "private" intrappolate in una funzione.
  ```javascript
  function creaContatore() { let i = 0; return () => ++i; }
  ```

* **Prototipi (Modificare classi base)** (Esercizio `68_Prototype_Array.ts`):
  ```javascript
  Array.prototype.primo = function() { return this[0]; };
  ```

* **Destrutturazione e Spread** (`...`):
  ```javascript
  const [testa, ...coda] = [1, 2, 3]; // testa=1, coda=[2,3]
  const copia = { ...oggettoOriginale, nuovaProp: 5 };
  ```

---

## 🟦 MACRO-SEZIONE TYPESCRIPT

TypeScript aggiunge tipi statici a JavaScript. È fondamentale per avere autocompletamento e zero errori a runtime.

### 1. Tipi Primitivi e Tuple
In TypeScript oltre a `string`, `number`, `boolean`, `any` o `unknown`, esistono le **Tuple** (array con lunghezza e tipi prefissati):
```typescript
// Tupla (es. Coordinata)
let punto: [number, number] = [10, 20];
let utente: [string, number, boolean] = ["Mario", 25, true];

// Lettura e destrutturazione di tuple
const [x, y] = punto; 
```

### 2. Tipi Custom (`type`) e Interfacce (`interface`)
Si usano per definire la "forma" di un oggetto.

**Interface** (Ideale per oggetti e classi, estendibile facilmente):
```typescript
interface Persona {
    nome: string;
    eta: number;
    readonly id: number;   // Non modificabile
    email?: string;        // Opzionale (?)
}

// Estendere un'interfaccia
interface Lavoratore extends Persona {
    stipendio: number;
}
```

**Type Alias** (Più versatile per Unioni, Intersezioni e Primitivi):
```typescript
type ID = string | number; // Unione (o uno o l'altro)
type Risposta = "SI" | "NO"; // Tipi Letterali

type Coodinata3D = [number, number, number]; // Type alias per una Tupla
```

### 3. Generics (`<T>`)
Permettono di creare componenti riutilizzabili che lavorano con vari tipi senza perdere il controllo rigoroso (es. Nodi degli alberi o Liste).
```typescript
// Un nodo che può contenere un numero, una stringa o qualsiasi T
class Nodo<T> {
    valore: T;
    next: Nodo<T> | null;

    constructor(v: T) { this.valore = v; this.next = null; }
}

const nStringa = new Nodo<string>("Ciao");
const nNumero = new Nodo<number>(42);
```

### 4. Interoperabilità con JS
* **Dichiarazioni `.d.ts`**: File contenenti solo `interface` e `type`. Servono per far capire a TS come sono scritte le vecchie librerie JS.
* **JSDoc e `@ts-check`**: Aggiungere `// @ts-check` a inizio di un file `.js` forzerà il compilatore a controllare i tipi leggendo i commenti JSDoc (`/** @param {number} x */`).
