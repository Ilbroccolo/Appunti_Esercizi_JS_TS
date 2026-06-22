/**Si scriva in TypeScript una struttura dati per implementare un KTree generico, rappresentato come value e figli.

Si definisca un enum LeafOrder che permetta di indicare l'ordine con cui visitare le foglie dell'albero:
- LeftToRight, per restituire le foglie da sinistra a destra;
- RightToLeft, per restituire le foglie da destra a sinistra.

Si scriva una funzione generatore leaves(tree, order) che, dato un k-tree e una modalità di visita, produca le foglie dell'albero nell'ordine indicato. Si assuma che almeno la radice dell'albero sia presente.

Si curi di annotare il più precisamente possibile tutti i tipi.

Documentare il codice commentandolo opportunamente.*/


interface KTree<T> {
    val: T;
    children: KTree<T>[];
}

// faccio un enum con vlaore 0 e 1
enum LeafOrder {
    LeftToRight //0
    RightToLeft //1

}
// utilizzo lo whithc case  per capeire il valore della ticheista 


function visit* <T>(root: KTree<T> | undefined, visit: (a: T, b: T) => KTree): T | undefined {

        yield this.val;

        for (let i = 0; i < this.children.length; i++) {
            let nodoFiglio = this.children[i];
            
            for (let valore of nodoFiglio.visit()) {
                yield valore;
            }
        }
    }EmptyQueueErrorEmptyQueueError