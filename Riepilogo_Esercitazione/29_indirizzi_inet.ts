class IllegalINetAddress extends Error {
    constructor(messaggio: string) {
        super(messaggio);
        this.name = "IllegalINetAddress";
    }
}

// classe per rappresentare un indirizzo ipv4
class INetAddr {
    indirizzoArray: [number, number, number, number];
    
    // tabella per associare nomi di dominio ai rispettivi array di byte
    static dnsTabella: Map<string, [number, number, number, number]> = new Map();

    constructor(indirizzo: string | [number, number, number, number] | number) {
        if (typeof indirizzo === "string") {
            let parti = indirizzo.split(".");
            let eUnIndirizzoNumerico = true;
            
            if (parti.length !== 4) {
                eUnIndirizzoNumerico = false;
            } else {
                for (let i = 0; i < parti.length; i++) {
                    let valore = Number(parti[i]);
                    if (Number.isNaN(valore) || valore < 0 || valore > 255 || Math.round(valore) !== Math.floor(valore)) {
                        eUnIndirizzoNumerico = false;
                        break;
                    }
                }
            }

            if (eUnIndirizzoNumerico) {
                this.indirizzoArray = [Number(parti[0]), Number(parti[1]), Number(parti[2]), Number(parti[3])];
            } else {
                let ipRegistrato = INetAddr.dnsTabella.get(indirizzo);
                if (ipRegistrato !== undefined) {
                    this.indirizzoArray = [ipRegistrato[0], ipRegistrato[1], ipRegistrato[2], ipRegistrato[3]];
                } else {
                    throw new IllegalINetAddress("Indirizzo stringa non valido o dominio non registrato");
                }
            }
        } else if (typeof indirizzo === "number") {
            // caso: un numero intero a 32 bit
            if (indirizzo < 0 || indirizzo >= 4294967296 || Math.round(indirizzo) !== Math.floor(indirizzo)) {
                throw new IllegalINetAddress("Numero intero non valido per IPv4");
            }
            
            let parte1 = (indirizzo >>> 24) & 255;
            let parte2 = (indirizzo >>> 16) & 255;
            let parte3 = (indirizzo >>> 8) & 255;
            let parte4 = indirizzo & 255;
            
            this.indirizzoArray = [parte1, parte2, parte3, parte4];
        } else if (Array.isArray(indirizzo)) {
            if (indirizzo.length !== 4) {
                throw new IllegalINetAddress("L'array deve essere lungo esattamente 4");
            }
            for (let i = 0; i < indirizzo.length; i++) {
                let v = indirizzo[i];
                if (typeof v !== "number" || v < 0 || v > 255 || Math.round(v) !== Math.floor(v)) {
                    throw new IllegalINetAddress("Elementi dell'array non validi: devono essere interi da 0 a 255");
                }
            }
            this.indirizzoArray = [indirizzo[0], indirizzo[1], indirizzo[2], indirizzo[3]];
        } else {
            throw new IllegalINetAddress("Tipo di indirizzo passato non supportato");
        }
    }

    get asDomainName(): string | undefined {
        for (let chiave of INetAddr.dnsTabella.keys()) {
            let valoreAssociato = INetAddr.dnsTabella.get(chiave);
            if (valoreAssociato !== undefined) {
                let tuttiUguali = true;
                for (let i = 0; i < 4; i++) {
                    if (valoreAssociato[i] !== this.indirizzoArray[i]) {
                        tuttiUguali = false;
                        break;
                    }
                }
                if (tuttiUguali) {
                    return chiave;
                }
            }
        }
        return undefined;
    }

    get asDecimalString(): string {
        return this.indirizzoArray[0] + "." + this.indirizzoArray[1] + "." + this.indirizzoArray[2] + "." + this.indirizzoArray[3];
    }

    get asDecimalArray(): [number, number, number, number] {
        return [this.indirizzoArray[0], this.indirizzoArray[1], this.indirizzoArray[2], this.indirizzoArray[3]];
    }

    // proprietà getter per l'intero a 32 bit
    get asInteger(): number {
        let risultato = 0;
        risultato = risultato + this.indirizzoArray[0] * 16777216; // 256 ^ 3
        risultato = risultato + this.indirizzoArray[1] * 65536;
        risultato = risultato + this.indirizzoArray[2] * 256;
        risultato = risultato + this.indirizzoArray[3];
        return risultato;
    }

    static registerDNS(s: string, a: string | [number, number, number, number] | number): void {
        let oggettoTemp = new INetAddr(a);
        INetAddr.dnsTabella.set(s, oggettoTemp.asDecimalArray);
    }

    // generatore statico per elencare i record dns
    static *listDNS(): Generator<[string, string]> {
        for (let chiave of INetAddr.dnsTabella.keys()) {
            let arrayValore = INetAddr.dnsTabella.get(chiave);
            if (arrayValore !== undefined) {
                let stringaDecimale = arrayValore[0] + "." + arrayValore[1] + "." + arrayValore[2] + "." + arrayValore[3];
                yield [chiave, stringaDecimale];
            }
        }
    }
}
