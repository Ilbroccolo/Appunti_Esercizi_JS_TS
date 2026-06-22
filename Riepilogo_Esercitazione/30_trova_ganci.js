function gancio(a) {
    let totaleGanci = 0;
    let ganciAscendenti = 0;
    let ganciDiscendenti = 0;
    let arrayGanci = [];

    for (let i = 0; i <= a.length - 3; i++) {
        let elementoPrimo = a[i];
        let elementoCentrale = a[i + 1];
        let elementoUltimo = a[i + 2];

        if (elementoPrimo === elementoUltimo && elementoCentrale !== elementoPrimo) {
            totaleGanci = totaleGanci + 1;
            
            // salviamo il gancio trovato
            let nuovoGancio = [elementoPrimo, elementoCentrale, elementoUltimo];
            arrayGanci.push(nuovoGancio);

            // un gancio ascendente ha l'elemento centrale minore rispetto al primo (e quindi anche all'ultimo)
            if (elementoCentrale < elementoPrimo) {
                ganciAscendenti = ganciAscendenti + 1;
            } else {
                ganciDiscendenti = ganciDiscendenti + 1;
            }
        }
    }

    // costruiamo e ritorniamo l'oggetto finale con i conteggi
    let risultato = {
        num: totaleGanci,
        asc: ganciAscendenti,
        des: ganciDiscendenti,
        gan: arrayGanci
    };

    return risultato;
}
