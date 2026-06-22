class MediaMobile { //Classe
    #k = 0
    #valori_iniziali = []
       
    constructor(k, ...valori_iniziali){
        this.#k = k
        this.#valori_iniziali = valori_iniziali
    }

    *succ(){
        
        for(let i = 0; i<this.#k; i++){ //il metodo generatore restituisce i primi k termini
            yield this.#valori_iniziali[i]
        }
        let contatore = 0 //variabile utilizzata per poi scorrere la succesione
        for(let j = 0; j<this.#valori_iniziali.length; j++){
            let somma = 0
            for(let x = contatore; x<this.#k + contatore; x++){
                somma+=this.#valori_iniziali[x]
            }
            let risultato = Math.floor((somma/this.#k)) 
            this.#valori_iniziali.push(risultato)
            yield this.#valori_iniziali[(this.#valori_iniziali.length)-1]
            contatore++
            
        }
                   
    }
        
}

//Prove output
let ogg = new MediaMobile(2, 10,0)
let sux = ogg.succ()
console.log(sux.next())
console.log(sux.next())
console.log(sux.next())
console.log(sux.next())
console.log(sux.next())
