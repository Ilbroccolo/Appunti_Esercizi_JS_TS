/*Si scriva una funzione ricorsiva filtraLista(head) che, ricevuta una lista concatenata
di numeri interi (implementata come visto a lezione), rimuova dalla lista tutti i nodi con
valore pari. Si ignorino i nodi con valori non interi (che vanno mantenuti nella lista).
La funzione deve restituire un oggetto con due proprietà:

: la lista modificata
: il numero totale di nodi rimossi


Esempi:

head = [ 2 → 5 → 8 → 3 → 6 ]
filtraLista(head) → {lista: [ 5 → 3 ], rimossi: 3}
Vengono rimossi i nodi con valori 2, 8, 6 (tutti pari).

filtraLista([ 1 → 2 → 3 → 4 → 5 ]) → {lista: [ 1 → 3 → 5 ], rimossi: 2}
filtraLista([ 10 → 20 → 30 ]) → {lista: null, rimossi: 3}
filtraLista([ 1 → 3 → 5 ]) → {lista: [ 1 → 3 → 5 ], rimossi: 0}
Come prassi, commentate opportunamente la funzione.*/

function filtraLista(head){
    if(!head){
        return {lista : null, rimossi : 0}
    }
    let raccogli_lista = filtraLista(head.next)

    if(head.val%2 == 0){
        return { lista : raccogli_lista.lista,
                 rimossi : raccogli_lista.rimossi +1
                }
    }
    head.next = raccogli_lista.lista 
    return { lista : head,
             rimossi : raccogli_lista.rimossi
    }
}