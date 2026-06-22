/*
 * Funzione comparatoreTask(criterio, ascendente)
 *
 * Restituisce una funzione di comparazione utilizzabile con sort() per ordinare
 * un array di oggetti "task" secondo un criterio specificato.
 *
 * Struttura di un oggetto task:
 * - titolo: stringa che descrive il task
 * - id: identificatore univoco del task (stringa)
 * - priorita: numero intero da 1 a 5, dove 5 è la massima priorità
 * - dipendenze: array di stringhe che rappresentano gli id di altri task
 *
 * Parametri:
 * - criterio: stringa che specifica il criterio di ordinamento. Valori possibili:
 *   · "dipendenze": ordina per numero di dipendenze
 *   · "priorita": ordina per priorità
 *   · "id": ordina alfabeticamente per id (default se non specificato)
 *
 * - ascendente: booleano che determina la direzione dell'ordinamento
 *   · true: ordine ascendente/crescente (default se non specificato)
 *   · false: ordine discendente/decrescente
 *
 * Restituisce:
 * Una funzione di comparazione compatibile con Array.sort()
 *
 * Comportamento di default:
 * - Se criterio non è specificato, si applica "id"
 * - Se ascendente non è specificato, si assume true
 */

/*
funzionamento localeCompare
    "apple".localeCompare("banana");  // -1
    "banana".localeCompare("apple");  // 1
    "cat".localeCompare("cat");       // 0
*/

//Esempio: una funzione che restituisce una compare function
 /*
function makeComparator(prop, asc){
    if(prop == "nome"){
        if(asc){ // ascendente
            return function(a,b){ 
                return a[prop].localeCompare(b[prop])
            }
        }
        //discendente
        return function(a,b){ 
            return b[prop].localeCompare(a[prop])
        }
    }

    if(asc){
        return function(a, b){
            return b[prop] - a[prop]; // discendente
        };
    }
    return function(a, b){
        return a[prop] - b[prop]; // ascendente
    };
  
}


const persone = [
  {nome: "uca", eta: 20},
  {nome: "foca", eta: 15},
  {nome: "topa", eta: 25}
];

persone.sort(makeComparator("nome",true));
console.log(persone);
// */

// termine esempio





function comparatoreTask(criterio, ascendente){
    //comportamento di default
    if((ascendente == null)   || (ascendente == undefined)){
        //console.log(ascendente);
        ascendente = true;
    }

    if(criterio == "priorita"){ // criterio priorità
        return function(a,b){
            if(ascendente){ // true
                return a["priorita"] - b["priorita"] // ascendente
            }
            else{ // false
                return b["priorita"] - a["priorita"] // discendente
            }
        };
    }
    else if(criterio == "dipendenze"){ // criterio dipendenze
        return function(a,b){
            if(ascendente){
                return a["dipendenze"].length - b["dipendenze"].length
            }
            else{
                return b["dipendenze"].length - a["dipendenze"].length
            }
        };
    }

    else{ // criterio id o criterio diverso dai precedenti 
        
        if(ascendente){ // true
            return function (a,b) {
                return a["id"].localeCompare(b["id"])
                }
        } // discedente
            return function (a,b) {
                return b["id"].localeCompare(a["id"])
            }
    }
}

//comparatoreTask("id");


