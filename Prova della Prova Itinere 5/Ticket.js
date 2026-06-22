class PrioritaNonValida extends Error { ; }
class ModificaTicketChiuso extends Error {
    codice
    constructor(message, codice){
        super(message)
        this.codice = codice
    }
}
class SLASuperato extends Error {
    codice
    constructor(message, codice){
        super(message)
        this.codice = codice
    }
}

class tempoMassimoNonValido extends Error { ; }

class Ticket {
    #codice // solo lettura
    #chiuso = false // solo lettura 
    #log = [] // array di stringhe
    #priorita //lettura - scrittura
    constructor(codice, priorita){
        this.#codice = codice
        // Sostituisci il controllo del codice con questo:
if (typeof codice !== "string" || codice.length === 0) {
    throw new TypeError("Stringa vuota o non valida");
}
        this.#priorita = priorita 
        if(typeof(priorita) != "number"){
            throw new TypeError("Priorità tipo errato")
        }
        if((priorita < 1) || (priorita > 5)) {
            throw new TypeError("Priorità non valida")
        }
    }
    get codice(){
        return this.#codice
    }
    get chiuso(){
        return this.#chiuso
    }
    get priorita(){
        return this.#priorita
    }

    set priorita(priorita){
        if(this.#chiuso){
            throw new ModificaTicketChiuso("Il ticket è chiuso : ", this.#codice)
        }
        else if(typeof(priorita) != "number"){
            throw new TypeError("Priorità tipo errato")
        }
        else if((priorita < 1) || (priorita > 5)) {
            throw new PrioritaNonValida("Priorità non valida")
        }
        else{
            this.#priorita = priorita   
        }
        

    }

    aggiungiNota(testo){
        if(this.#chiuso){
            throw new ModificaTicketChiuso("Il ticket è chiuso : ", this.#codice)
        }
        this.#log.push(testo)
    }
    chiudi(){
        this.#chiuso = true
        this.#log.push("CHIUSURA")
    }
}
/*
try{
    let t1 = new Ticket("s", 1)
    t1.chiudi()
    console.log(t1.chiuso)
    t1.aggiungiNota("Ciao Belllloo")

}
catch(error){
    if(error instanceof ModificaTicketChiuso){
        console.error(error.name, error.message , error.codice)
    }
    else{
        console.error(error)
    }
    
}
*/

class TicketConSLA extends Ticket{
    #tempoMassimo
    #tempoTrascorso = 0
    constructor(codice,priorita,tempoMassimo){
        super(codice,priorita)
        if(tempoMassimo <= 0){
            throw new tempoMassimoNonValido("Tempo massimo non valido")
        }
        if(typeof(tempoMassimo) != "number"){
            throw new tempoMassimoNonValido("Tipo Errato")
        }
        this.#tempoMassimo = tempoMassimo
        
    }

    get tempoMassimo(){
        return this.#tempoMassimo
    }
    get tempoTrascorso(){
        return this.#tempoTrascorso
    }
    set tempoTrascorso(nuovoTempo) {
    // 1. PRIMA modifichi il tempo (salvando il nuovo valore)
    this.#tempoTrascorso = nuovoTempo;
    
    // 2. POI controlli se SUPERA (>) il tempo massimo
    if (this.#tempoTrascorso > this.#tempoMassimo) {
        this.chiudi(); // In OOP, this.chiudi() è sufficiente per richiamare il metodo ereditato
        throw new SLASuperato("Tempo Massimo superato", this.codice); 
    }
}
}


function incrementaTempo(tickets, delta) {
    let ticketScaduti = []; // Array da restituire
    
    for (let ticket of tickets) {
        // Correggi la sintassi di instanceof
        if (ticket instanceof TicketConSLA) {
            try {
                // Legge il valore attuale, somma il delta, e usa il setter per assegnarlo
                ticket.tempoTrascorso += delta; 
            } catch (error) {
                // Cattura l'errore per non interrompere il ciclo
                if (error instanceof SLASuperato) {
                    ticketScaduti.push(ticket);
                } else {
                    // Se è un errore inaspettato (non SLASuperato), è buona norma rilanciarlo
                    throw error; 
                }
            }
        }
    }
    
    return ticketScaduti; // Ritorna i ticket che hanno superato lo SLA
}



const t1 = new Ticket("T1", 3);
const t2 = new TicketConSLA("SLA-1", 5, 10);
const t3 = new TicketConSLA("SLA-2", 2, 5);

const lista = [t1, t2, t3, "non sono un ticket"]; // Array eterogeneo

console.log("Ticket scaduti:", incrementaTempo(lista, 7));
// SLA-2 dovrebbe essere nell'array restituito perché 0 + 7 > 5.
// SLA-1 dovrebbe restare aperto perché 0 + 7 < 10.