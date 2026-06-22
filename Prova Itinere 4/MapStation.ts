    class MapStation{
        collegamenti = [] // array contenente i collegamenti diretti tra stazioni
        stazioni = []    // array contenente le stazioni
        #stazioneA    // dove posare una delle stazioni in controllo_diretto
        #stazioneB    // dove posare una delle stazioni in controllo_diretto
        size = 0      // numero di stazioni presenti nell'istanza
        array_percorso = []
        controllo_diretto(u,v){
            /* Dovrà essere un metodo che in caso non ci sia il collegamento lo crea
            Comunque mette in stazioni le stazioni non create
        */
            this.#stazioneA = u;
            this.stazioneB = v;
            if(this.collegamenti.size != 0){
                for(let collegamento_diretto of this.collegamenti){
                if(this.#stazioneA == collegamento_diretto[0] && this.stazioneB == collegamento_diretto[1]){
                    return true
                }  
                if(this.#stazioneA == collegamento_diretto[1] && this.#stazioneB == collegamento_diretto[0]){
                    return true
                    }
                }
            }
            //Crea il collegamento diretto
            this.collegamenti.push([u,v])

            //controlla se le stazioni sono presenti nell'array e nel caso le aggiunge
            let presente = false
            for(let stazione in this.stazioni){
                if(stazione == u){
                    presente = true
                }
            }
            if(!presente){
                this.stazioni.push(u)
                this.size++
            }
            
            presente = false
            for(let stazione in this.stazioni){
                if(stazione == v){
                    presente = true
                }
            }
            if(!presente){
                this.stazioni.push(v)
                this.size++
            }
        }
        binario(u,v){
            //Crea il collegamento diretto
            this.collegamenti.push([u,v])

            //controlla se le stazioni sono presenti nell'array e nel caso le aggiunge
            let presente = false
            for(let stazione of this.stazioni){
                if(stazione == u){
                    presente = true
                }
            }
            if(!presente){
                this.stazioni.push(u)
                this.size++
            }
            
            presente = false
            for(let stazione of this.stazioni){
                if(stazione == v){
                    presente = true
                }
            }
            if(!presente){
                this.stazioni.push(v)
                this.size++
            }
        }
        diretto(u,v){
            this.#stazioneA = u;
            this.#stazioneB = v;
            if(this.collegamenti.size != 0){
                for(let collegamento_diretto of this.collegamenti){
                    if(this.#stazioneA == collegamento_diretto[0] && this.#stazioneB == collegamento_diretto[1]){
                        return true
                    }  
                    if(this.#stazioneA == collegamento_diretto[1] && this.#stazioneB == collegamento_diretto[0]){
                        return true
                    }
                }
            }
            return false;
        }
        raggiungibile(u,v){
            if(this.diretto(u,v)){ // è diretto e quindi raggiungibile
                return true
            }
            let stazione_partenza = u
            let indice = this.stazioni.indexOf(u)
            this.stazioni.splice(indice, 1)
            this.array_percorso.push(u)

            for(let i = 0; i<this.stazioni.length; i++){
                while(this.diretto(stazione_partenza, this.stazioni[i])){
                    this.array_percorso.push(this.stazioni[i])
                    if(v == this.stazioni[i]){
                        
                        this.stazioni.push(u)
                        return true
                    }
                    stazione_partenza = this.stazioni[i]
                    i++
                }
                this.array_percorso = []
                stazione_partenza = u
                this.array_percorso.push(u)
            }
            this.stazioni.push(u)
            return false
        }

        percorso(u,v){
            this.array_percorso = []
            if(this.raggiungibile(u,v)){
                return this.array_percorso
            }
            return null
        }
    } 


let m = new MapStation()
//m.controllo_diretto("Livorno", "Pisa")
m.binario("Livorno", "A")
m.binario("B", "A")
m.binario("B", "C")
m.binario("Poggi", "C")

console.log(m.collegamenti)
console.log(m.stazioni)
console.log(m.diretto("Poggibonsi","Livorno"))
console.log(m.raggiungibile("Livorno","Poggi"))
console.log(m.percorso("Livorno","Poggi"))