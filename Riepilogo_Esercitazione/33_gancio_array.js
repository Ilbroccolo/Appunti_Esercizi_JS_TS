function gancio(a) {
    let numeroTotale = 0;
    let ascendenti = 0;
    let discendenti = 0;
    let ganciTrovati = [];

    for (let i = 0; i < a.length - 2; i++) {
        let primo = a[i];
        let centrale = a[i + 1];
        let ultimo = a[i + 2];

        if (primo === ultimo && centrale !== primo) {
            numeroTotale++;
            ganciTrovati.push([primo, centrale, ultimo]);

            if (centrale > primo) {
                ascendenti++;
            } else {
                discendenti++;
            }
        }
    }

    return {
        num: numeroTotale,
        asc: ascendenti,
        des: discendenti,
        gan: ganciTrovati
    };
}
