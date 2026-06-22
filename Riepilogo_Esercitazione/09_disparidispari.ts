function disparidispari(A: number[]): void {
    // uso un ciclo all'indietro per evitare che la rimozione di elementi
    for (let i = A.length - 1; i >= 0; i--) {
        // controlliamo se l'indice è dispari e se l'elemento in quella posizione è dispari
        if (i % 2 !== 0 && A[i] % 2 !== 0) {
            A.splice(i, 1);
        }
    }
}
