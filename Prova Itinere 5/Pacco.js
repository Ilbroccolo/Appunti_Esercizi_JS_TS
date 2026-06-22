
class ModificaNonConsentita extends Error{
    identificatore
    stato
    constructor(message,identificatore,stato){
        super(message)
        this.identificatore = identificatore
        this.stato = stato
    }
}

class StatoNonValido extends Error { ; }

class Pacco {
    #identificatore // stringa lettura
    #peso // numero lettura e scrittura
    #stato // stringa : "CREATO/ IN_TRANSITO / CONSEGNATO / BLOCCATO  lettura
    #eventi = [] // [dataOraCambiamento,statoRaggiunto] istanza della classe Date. lettura

    constructor( id, peso){
        this.#identificatore = id
        this.#peso = peso
    }

    get identificatore() {
        return this.#identificatore;
    }
    get peso() {
        return this.#peso;
    }
    get stato() {
        return this.#stato;
    }
    set peso(nuovoPeso) {
        if(this.#stato!= "CREATO"){
            throw new ModificaNonConsentita("Stato diverso da CREATO",this.#identificatore, this.#stato)
        }
        this.#peso = nuovoPeso;
    }
    get eventi() {
        return [...this.#eventi];

    }
    avanza(stato){
        if((stato!= "CREATO") || (stato!= "IN_TRANSITO") || (stato!= "CONSEGNATO") || (stato!= "BLOCCATO")){throw new StatoNonValido("Stato non Valido")}
        this.#stato = stato
        let data = new Date()
        this.#eventi.push(data, stato)

    }
}

class RangeError extends Error{ ; }
class PaccoRefrigerato extends Pacco{
    #temperatura_minima
    #temperatura_massima
    temperatura_attuale

    constructor(id, peso, tm, tM){
        super(id,peso)
        if(tm>tM){
            throw new RangeError("tm > di tM")
        }
        this.#temperatura_minima = tm
        this.#temperatura_massima = tM
    }

    get temperatura_minima() {
        return this.#temperatura_minima;
    }
    get temperatura_massima() {
        return this.#temperatura_massima;
    }
    get temperatura_attuale() {
        return this.temperatura_attuale;
    }
    set temperatura_attuale(ta) {
        if(!(this.#temperatura_minima <= ta && ta <= this.#temperatura_massima)){
            super.stato() = "BLOCCATO" 
        }
        this.temperatura_attuale = ta
    }

}