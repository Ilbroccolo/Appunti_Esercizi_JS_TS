class Elemento {
    public val : number
    public next : Elemento | undefined
    constructor(val : number){
        if(typeof val !== "number"){
            throw new TypeError("Il valore deve essere di tipo number!")
        }
        this.val = val
        this.next = undefined
    }
}

type  f = (val : number) => number 


function* calcola(testa: Elemento | undefined, operazione: f) {
    // Gestiamo il caso in cui la lista sia vuota fin dall'inizio
    if (!testa) return; 

    // Inizializziamo il valore con il valore del primo nodo
    let valore_iniziale: number = testa.val;
    
    // Cicliamo finché 'testa' è un oggetto Elemento valido
    while (testa !== undefined) {
        valore_iniziale *= operazione(testa.val);
        yield valore_iniziale;
        
        // CORREZIONE CHIAVE: Spostiamo fisicamente il puntatore al prossimo nodo
        testa = testa.next; 
    }
}

const raddoppia: f = function(val) {
    return val / 2;
};

// 1. Crei i singoli nodi isolati
const primo   = new Elemento(10);
const secondo = new Elemento(20);
const terzo   = new Elemento(30);

// 2. Li colleghi tra loro per formare la catena: 10 -> 20 -> 30 -> undefined
primo.next = secondo;
secondo.next = terzo;


let generatore = calcola(primo, raddoppia)
console.log(generatore.next())
console.log(generatore.next())
console.log(generatore.next())
console.log(generatore.next())

