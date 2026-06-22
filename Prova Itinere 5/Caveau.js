class FondiInsufficienti extends Error { ; }

class Movimento {
    tipo
    importo
    causale
    constructor(t, i, c) {
        this.tipo = t // "V" versamento oppure "P" prelievo
        this.importo = i // i>=0
        this.causale = c // stringa 
        if((t != "") || (typeof(t)!= "string") || (t.length > 1)){
            throw new TypeError("Tipo non valido")
        }
        if((i <0) || (typeof(i)!= "number")){
            throw new TypeError("Importo non valido")
        }
        if((c == "") || (typeof(c)!= "string")){
            throw new TypeError("Causale non valido")
        }
    }
}

class Caveau {
    #saldo
    #transazioni = [] // array di Movimenti
    static #transazionistatico = new Set();

    constructor(owner, saldoIniziale = 0){
        this.owner = owner //stringa non vuota
        this.#saldo = saldoIniziale // >=0
        if((owner == "") || (typeof(owner)!= "string")){
            throw new TypeError("Stringa vuota")
        }
        
        if((saldoIniziale <0) || (typeof(saldoIniziale)!= "number")){
            throw new TypeError("Saldo negativo")
        }
    }

    get saldo(){return this.#saldo} // solo lettura

    versa(n,causale){
        if((causale == "") || (typeof(causale)!= "string")){
            throw new TypeError("causale vuota")
        }
        if((n<= 0) || !(Number.isFinite(n)) || (typeof(n)!= "number")){
            throw new TypeError("n non valido")
        }
        let mov = new Movimento("V",n,causale)
        this.#transazioni.push(mov)
        
        this.#saldo+= n
        Caveau.#transazionistatico.add([this, mov]);
        
    }

    preleva(n,causale){
        if((causale == "") || (typeof(causale)!= "string")){
            throw new TypeError("causale non valida")
        }
        if((n<= 0) || !(Number.isFinite(n)) || (typeof(n)!= "number")){
            throw new TypeError("n non valido")
        }
        if((this.#saldo-n)< 0){
            throw new FondiInsufficienti("Fondi Insufficienti")
        }
        let mov = new Movimento("P",n,causale)
        this.#transazioni.push(mov)
        this.#saldo-= n
        Caveau.#transazionistatico.add([this, mov]);

        
        
    }

    estratto(k = 10) {
    let estratto = [];
    for (let i = this.#transazioni.length - 1; ((i >= 0) && (i >= this.#transazioni.length - k)); i--) {
        estratto.push(this.#transazioni[i]);
    }
    
    return estratto;
}

    static transazioni(){
        return Caveau.#transazionistatico
    }

}