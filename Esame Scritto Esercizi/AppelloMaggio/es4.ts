/*### Esercizio 4

Si scriva in TypeScript una struttura dati per implementare un KTree generico, rappresentato come value e figli.

Si definisca un enum LeafOrder che permetta di indicare l'ordine con cui visitare le foglie dell'albero:

* LeftToRight, per restituire le foglie da sinistra a destra;
* RightToLeft, per restituire le foglie da destra a sinistra.

Si scriva una funzione generatore leaves(tree, order) che, dato un k-tree e una modalità di visita, produca le foglie dell'albero nell'ordine indicato. Si assuma che almeno la radice dell'albero sia presente.

Si curi di annotare il più precisamente possibile tutti i tipi.

Documentare il codice commentandolo opportunamente.
*/

interface KTree<T>{
    value : T
    figli : KTree<T>[] 
}
interface Oggetto<T>{
    tree : KTree<T>
    n_figli : number
}

enum LeafOrder {
    LeftToRight = 0,
    RightToLeft = 1
} 

function* leaves<T>(tree : KTree<T>, order : LeafOrder) : Generator<T, void, unknown>{
   if(tree.figli.length == 0 || !tree.figli){
    yield tree.value // se l'albero non ha figli restituisce la radice 
    return
   }

   if (order === LeafOrder.LeftToRight) {
        for (let figlio of tree.figli){
            yield* leaves(figlio, order);
            
        } 
    } else {
        for (let i = tree.figli.length - 1; i >= 0; i--){
            yield* leaves(tree.figli[i], order);
        } 
    }
   
    

} 


// Creazione di un albero di esempio (albero di numeri)
const albero: KTree<number> = {
    value: 1,
    figli: [
        { value: 2, figli: [] }, // Foglia
        { 
            value: 3, 
            figli: [
                { value: 4, figli: [] }, // Foglia
                { value: 5, figli: [] }  // Foglia
            ] 
        },
        { value: 6, figli: [] } // Foglia
    ]
};

// Visita da Sinistra a Destra
console.log([...leaves(albero, LeafOrder.LeftToRight)]); 
// Output: [2, 4, 5, 6]

// Visita da Destra a Sinistra
console.log([...leaves(albero, LeafOrder.RightToLeft)]); 
// Output: [6, 5, 4, 2]