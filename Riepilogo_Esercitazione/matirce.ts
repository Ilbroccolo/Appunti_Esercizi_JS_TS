function tuttiMatrice<T>(matrice: T[][], f: (val: T) => boolean): boolean {
    for (let riga = 0; riga < matrice.length; riga++) {
        for (let colonna = 0; colonna < matrice[riga].length; colonna++) {
            let valoreCorrente = matrice[riga][colonna];
            if (!f(valoreCorrente)) {
                return false;
            }
        }
    }
    return true;
}

class RectangularMatrix {
    private matriceInterna: readonly number[][];
    numeroRighe: number;
    numeroColonne: number;

    constructor(matriceIniziale: number[][]) {
        let nuovaMatriceInterna: number[][] = [];
        for (let r = 0; r < matriceIniziale.length; r++) {
            let rigaOriginale: number[] = matriceIniziale[r];
            let rigaCopiata: number[] = [];
            for (let c = 0; c < rigaOriginale.length; c++) {
                let valoreElemento: number = rigaOriginale[c];
                rigaCopiata.push(valoreElemento);
            }
            nuovaMatriceInterna.push(rigaCopiata);
        }
        this.matriceInterna = nuovaMatriceInterna;
        this.numeroRighe = matriceIniziale.length;

        let conteggioColonne: number = 0;
        if (matriceIniziale.length > 0) {
            conteggioColonne = matriceIniziale[0].length;
        }
        this.numeroColonne = conteggioColonne;
    }

    ottieniNumeroRighe(): number {
        return this.numeroRighe;
    }

    ottieniNumeroColonne(): number {
        return this.numeroColonne;
    }

    controllaCompletamento(): boolean {
        if (this.numeroRighe === 0) {
            return true;
        }
        let lunghezzaStandardRiga: number = this.matriceInterna[0].length;
        let eCompletaLaMatrice: boolean = true;
        for (let r = 0; r < this.numeroRighe; r++) {
            let rigaAttuale: number[] = this.matriceInterna[r];
            if (rigaAttuale.length !== lunghezzaStandardRiga) {
                eCompletaLaMatrice = false;
                break;
            }
        }
        return eCompletaLaMatrice;
    }

    calcolaSomma(): number {
        let sommaTotaleElementi: number = 0;
        for (let r = 0; r < this.numeroRighe; r++) {
            let rigaAttuale: number[] = this.matriceInterna[r];
            for (let c = 0; c < rigaAttuale.length; c++) {
                let valoreElementoCorrente: number = rigaAttuale[c];
                sommaTotaleElementi = sommaTotaleElementi + valoreElementoCorrente;
            }
        }
        return sommaTotaleElementi;
    }
}

class SquareMatrix extends RectangularMatrix {
    constructor(matriceIniziale: number[][]) {
        super(matriceIniziale);

        let numeroDiRighe: number = this.ottieniNumeroRighe();
        let numeroDiColonne: number = this.ottieniNumeroColonne();

        if (numeroDiRighe !== numeroDiColonne) {
            throw new RangeError("La matrice data al costruttore non è quadrata. Il numero di righe e il numero di colonne devono essere uguali.");
        }
    }
}

function trovaMatriceConSommaMassimaNonQuadrata(elencoMatrici: (RectangularMatrix | SquareMatrix)[]): RectangularMatrix | undefined {
    let matriceMassima: RectangularMatrix | undefined = undefined;
    let sommaMassima: number = -Infinity;

    for (let i = 0; i < elencoMatrici.length; i++) {
        let matriceCorrente: RectangularMatrix | SquareMatrix = elencoMatrici[i];

        let eQuadrata: boolean = false;
        if (matriceCorrente instanceof SquareMatrix) {
            eQuadrata = true;
        }

        if (eQuadrata === false) {
            let sommaCorrente: number = matriceCorrente.calcolaSomma();

            let laPrimaTrovata: boolean = (matriceMassima === undefined);

            if (laPrimaTrovata || (sommaCorrente > sommaMassima)) {
                sommaMassima = sommaCorrente;
                matriceMassima = matriceCorrente;
            }
        }
    }

    return matriceMassima;
}