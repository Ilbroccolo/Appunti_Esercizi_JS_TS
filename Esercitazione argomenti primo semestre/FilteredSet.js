function TrovaPredicato(stringa){
    if((stringa.length)%2 == 0){
        return true
    }
    else return false
}

let S = {val : "ciao", next: {val : "sono", next: {val : "Samuele", next : {val : "cia", next : null}}}}

function filteredSet(S,p){
    
    let v = [{}, 0]
    let nuovo_oggetto = v[0]

    while (S != null){
        if(!p(S.val)){ // se la parola non è di length pari viene incrementato il contatore 
             v[1]++         
        }
        else{ // inserisce nella nuova lista
            nuovo_oggetto = {val : S.val, next: null}
            
            //nuovo_oggetto = nuovo_oggetto.next
        }
        S = S.next
    }

    return v
}

console.log(S)
let k = filteredSet(S, TrovaPredicato)
console.log(k[0])
console.log(k[1])