enum Dir {
    Nord,
    Sud,
    Est,
    Ovest
}

interface Step {
    d: Dir;
    l: number;
}

type Point = [number, number];

function walk(o: Point, p: Iterable<Step>): Point {
    // variabile per tenere traccia della posizione corrente
    let xCorrente = o[0];
    let yCorrente = o[1];

    for (let spostamento of p) {
        // aggiorniamo le coordinate in base alla direzione
        if (spostamento.d === Dir.Nord) {
            yCorrente += spostamento.l;
        } else if (spostamento.d === Dir.Sud) {
            yCorrente -= spostamento.l;
        } else if (spostamento.d === Dir.Est) {
            xCorrente += spostamento.l;
        } else if (spostamento.d === Dir.Ovest) {
            xCorrente -= spostamento.l;
        }
    }

    // ritorna la posizione finale calcolata
    return [xCorrente, yCorrente];
}
