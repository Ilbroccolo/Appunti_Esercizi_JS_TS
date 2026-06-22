interface Punto {
    x: number;
    y: number;
}

function centroid<T extends Punto>(points: T[]): Punto | undefined {
    // se la lista è vuota (oppure non definita), ritorna undefined come richiesto
    if (points === null || points === undefined || points.length === 0) {
        return undefined;
    }

    let sommaX: number = 0;
    let sommaY: number = 0;
    let totalePunti: number = points.length;

    // scorriamo tutti i punti presenti nell'array
    for (let i: number = 0; i < totalePunti; i++) {
        let puntoCorrente = points[i];
        
        sommaX = sommaX + puntoCorrente.x;
        sommaY = sommaY + puntoCorrente.y;
    }

    let mediaX: number = sommaX / totalePunti;
    let mediaY: number = sommaY / totalePunti;

    let risultatoCentroide: Punto = {
        x: mediaX,
        y: mediaY
    };

    return risultatoCentroide;
}
