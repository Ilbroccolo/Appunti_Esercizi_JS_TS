/*let a = []
if(a[1] == null){
    a[1] = 3
}
console.log(a)
console.log(a.length)*/


class SectorError extends Error { ; }
class Stadio{
    n // n. totale settore ospiti
    #settore_ospiti = [] // array contenente i posti ospiti
    m // n. totale settore casa
    #settore_casa = [] // array contenente i posti casa
    constructor(n,m){
        this.n = n
        this.m = m
    }
    prenota_posto(s,i){
        
            if(s == "ospiti"){
                if((this.#settore_ospiti[i]!= null) || (i>=this.n)){
                    return false
                }
                
                this.#settore_ospiti[i] = true
                return true 
            }
            else if(s == "casa"){
                if((this.#settore_casa[i]!= null) || (i>=this.m)){
                    return false
                }
                this.#settore_casa[i] = true
                return true 
            }
            else throw new SectorError("Settore non esistente")
    }
    posti_occupati(s){
        let contatore = 0
        if(s== "ospiti"){
            for(let i = 0; i<this.n; i++){
                if(this.#settore_ospiti[i] == true){
                    contatore++
                }
            }        
        }
        else if(s== "casa"){
            for(let i = 0; i<this.m; i++){
                if(this.#settore_casa[i] == true){
                    contatore++
                }
            }        
        }
        else throw new SectorError("Settore non esistente")
        return contatore
        }
    
    is_empty(){
        for(let i = 0; i< this.n; i++){
            if(this.#settore_ospiti[i]!= null){
                return false
            }
        }
        for(let i = 0; i< this.m; i++){
            if(this.#settore_casa[i]!= null){
                return false
            }
        }
        return true
    }
    svuota_stadio(){
        for(let i = 0; i< this.n; i++){
            if(this.#settore_ospiti[i]!= null){
                this.#settore_ospiti[i] = null
            }
        }
        for(let i = 0; i< this.m; i++){
            if(this.#settore_casa[i]!= null){
                this.#settore_casa[i] = null
            }
        }
    }

}