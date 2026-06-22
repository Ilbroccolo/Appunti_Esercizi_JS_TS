interface ElementoConPriorita {
    priority: number;
}

function enqueue<T extends ElementoConPriorita>(e: T, queue: T[]): void {
    let indice = 0;
    
    // cerchiamo la posizione corretta fermandoci appena troviamo una priorità maggiore
    while (indice < queue.length && queue[indice].priority < e.priority) {
        indice++;
    }
    
    // uso splice per inserire l'elemento spostando quelli successivi
    queue.splice(indice, 0, e);
}

// visto che abbiamo ordinato la coda, l'elemento con priorità maggiore è sempre l'ultimo
function dequeue<T>(queue: T[]): T | undefined {
    // la funzione nativa pop() rimuove e ritorna l'ultimo elemento
    return queue.pop();
}
