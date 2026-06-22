// definiamo un'eccezione personalizzata per quando il giorno è pieno
class GiornoPienoError extends Error {
    constructor() {
        super("Impossibile aggiungere l'evento: la giornata è già piena!");
        this.name = "GiornoPienoError";
    }
}

type Data = [number, string, number];

// tipo per l'evento: [data, descrizione]
type Evento = [Data, string];

class Agenda {
    eventi: Evento[];
    limiteGiornaliero: number;

    constructor(limiteGiornaliero: number) {
        this.eventi = [];
        this.limiteGiornaliero = limiteGiornaliero;
    }

    
    dateUguali(data1: Data, data2: Data): boolean {
        let stessoGiorno = data1[0] === data2[0];
        let stessoMese = data1[1] === data2[1];
        let stessoAnno = data1[2] === data2[2];
        
        return stessoGiorno && stessoMese && stessoAnno;
    }

    
    aggiungi(nuovoEvento: Evento): void {
        let dataNuovoEvento = nuovoEvento[0];
        let eventiGiaPresenti = this.lista_eventi(dataNuovoEvento);
        
        if (eventiGiaPresenti.length >= this.limiteGiornaliero) {
            throw new GiornoPienoError();
        }
        
        this.eventi.push(nuovoEvento);
    }

    
    lista_eventi(dataCercata: Data): Evento[] {
        let risultati: Evento[] = [];
        
        for (let i = 0; i < this.eventi.length; i++) {
            let eventoCorrente = this.eventi[i];
            let dataCorrente = eventoCorrente[0];
            
            if (this.dateUguali(dataCorrente, dataCercata)) {
                risultati.push(eventoCorrente);
            }
        }
        
        return risultati;
    }

    
    libera(dataDaCancellare: Data): number {
        let numeroCancellati = 0;
        let nuoviEventi: Evento[] = [];
        
        for (let i = 0; i < this.eventi.length; i++) {
            let eventoCorrente = this.eventi[i];
            let dataCorrente = eventoCorrente[0];
            
            if (this.dateUguali(dataCorrente, dataDaCancellare)) {
                numeroCancellati++;
            } else {
                nuoviEventi.push(eventoCorrente);
            }
        }
        
        this.eventi = nuoviEventi;
        
        return numeroCancellati;
    }
}
