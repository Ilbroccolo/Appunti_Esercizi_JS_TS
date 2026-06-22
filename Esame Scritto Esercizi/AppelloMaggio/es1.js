/* ### Esercizio 1

Si scrivano in JavaScript due funzioni ricorsive sumEvenValues(root) e height(root), dove root è un albero binario (eventualmente nullo) rappresentato come visto a lezione.

* La funzione sumEvenValues deve restituire la somma di tutti i valori pari contenuti nell'albero.
* La funzione height deve restituire l'altezza dell'albero (le foglie hanno altezza 1).

Documentare il codice commentandolo opportunamente.

*Esempio:*

text
    4
   / \
  2   7
 / \  /
1  3 6



* sumEvenValues(root) // 12
* height(root) // 3

---*/
let ktree = {val : 2 , sons : [{val : 2}, {val : 4}]} // simple ktree
let boss_ktree = {
  val: 1, // Livello 1 (Radice)
  sons: [
    {
      val: 2, // Livello 2
      sons: [
        {
          val: 5, // Livello 3
          sons: [
            { val: 10, sons: [] }, // Livello 4 (Foglia)
            { val: 11, sons: [] }  // Livello 4 (Foglia)
          ]
        },
        { val: 6, sons: [] } // Livello 3 (Foglia)
      ]
    },
    {
      val: 3, // Livello 2
      sons: [
        { val: 7, sons: [] } // Livello 3 (Foglia)
      ]
    },
    {
      val: 4, // Livello 2
      sons: [
        { val: 8, sons: [] },
        { val: 9, sons: [] }
      ]
    }
  ]
};
let tree = {
  val: 4,
  sx: {
    val: 2,
    sx: { val: 1, sx: null, dx: null },
    dx: { val: 3, sx: null, dx: null }
  },
  dx: {
    val: 6,
    sx: { val: 5, sx: null, dx: null },
    dx: { val: 7, sx: null, dx: null }
  }
}; // not so simpletree

let simpletree = {val : 3, sx : {val : 2}, dx : {val : 1}}

let unbalancedTree = {
  val: 10,
  sx: null,
  dx: {
    val: 20,
    sx: null,
    dx: {
      val: 30,
      sx: { val: 25, sx: null, dx: null }, // Una piccola ramificazione a sinistra
      dx: {
        val: 40,
        sx: null,
        dx: {
          val: 50,
          sx: null,
          dx: { val: 60, sx: null, dx: null } // Altezza 6 raggiunta
        }
      }
    }
  }
};

function sumEvenValues(tree){
    if(!tree){
        return 0
    }
    
    if(tree.val%2==0){
        return tree.val + sumEvenValues(tree.sx) + sumEvenValues(tree.dx)
    }
    return sumEvenValues(tree.sx) + sumEvenValues(tree.dx)
}

function height(tree){ // misura l'altezza di un albero binario
    if(!tree){
        return 0
    }
    return 1 + Math.max(height(tree.sx), height(tree.dx))
}
function f(elemento){
    if(!elemento){
        return 0
    }
    return 1
}
//funzione sbizzarrente
function height_k(tree){ // misura l'altezza di un albero k-ario
    if(!tree){
        return 0
    }
    if(!tree.sons){
        return 1
    }
    let maxSonHeight = 0
    for(let son of tree.sons){
        let correntson = height_k(son)
        if(correntson> maxSonHeight){
            maxSonHeight = correntson
        }


    }
    return 1 + maxSonHeight
}
//funzione inutila ma fatta per vedere come mi sbizzarrivo con gli alberi e la ricorsione
function somma_valori_tree_k(tree){
    if(!tree){
        return 0
    }
    if(!tree.sons){
        return tree.val
    }
    let somma_totale = 0
    for(let son of tree.sons){
        somma_totale += somma_valori_tree_k(son)
    }
    return tree.val + somma_totale 
}

//console.log(sumEvenValues(tree))

//console.log(height(simpletree))
//console.log(height(unbalancedTree))
console.log(height_k(ktree))
console.log(height_k(boss_ktree))
console.log(somma_valori_tree_k(ktree))
console.log(somma_valori_tree_k(boss_ktree))