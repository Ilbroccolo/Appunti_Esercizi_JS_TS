/*
Si vuole implementare in TypeScript una funzione per la fusione
di due elenchi di elementi, evitando duplicati e mantenendo un ordinamento.
Si definisca una funzione merge(a, b) che fonda gli elementi dei
due array a e b (tutti dello stesso tipo), ciascun elemento caratterizzato
almeno da due proprietà: surname e name, entrambe stringhe. Nel caso siano presenti
più elementi con gli stessi valori per surname e name, si deve mantenere 
solo il primo elemento dell'array a con tali valori. La funzione merge(a, b)
deve restituire un nuovo array con gli elementi ordinati per surname e,
a parità di surname, per name. Si consideri l'ordine alfabetico-lessicografico.

Si curi l'annotazione dei tipi nel modo più preciso possibile.
*/

class Persona {
    name : string
    surname : string
    constructor(name : string,surname : string){
        this.name  = name
        this.surname = surname
    }
}

function merge(a : Persona[], b : Persona[]) : Persona[]{
    let nuovo_array : Persona[] = [] 
    
    for(let el of a ){
        nuovo_array.push(el)
    }

    for(let elb of b){
        // 1. Creiamo una variabile che parte dal presupposto che l'elemento NON esista in "a"
        let gia_presente = false 

        for(let ela of a){
            if(elb.name == ela.name && elb.surname == ela.surname){
                gia_presente = true // Se entriamo qui, ci segniamo che esiste!
                break // Usciamo dal ciclointerno immediatamente
            }
        }

        // 2. Il push lo fai fuori, MA solo se "gia_presente" è rimasto false!
        if (!gia_presente) {
            nuovo_array.push(elb)
        }
    }
    nuovo_array.sort((a, b) => {
                                let risultato_confronto : number = a.surname.localeCompare(b.surname)  
                                if(risultato_confronto != 0){
                                    return risultato_confronto
                                }
                                risultato_confronto = a.name.localeCompare(b.name)
                                return risultato_confronto
                                });
    
    return nuovo_array
}

let a  = [{name : "Pippo", surname : "Pippa"},{name : "Pippa", surname : "Pippo"}, {name : "Luigi", surname : "Pippa"}]
let b = [{name : "Luigi", surname : "Pippa"}]

console.log(merge(a,b))