class BitNode {
    cnt: number;
    zero: BitNode | null;
    uno: BitNode | null;

    constructor() {
        this.cnt = 0;
        this.zero = null;
        this.uno = null;
    }

    add(...valori: number[]): void {
        for (let i = 0; i < valori.length; i++) {
            let n = valori[i];
            
            if (n === 0) {
                this.cnt++;
            } else {
                let bit = n % 2;
                
                if (bit === 0) {
                    if (this.zero === null) {
                        this.zero = new BitNode();
                    }
                    // chiamata ricorsiva passando il numero senza l'ultimo bit (divisione per 2)
                    this.zero.add(Math.floor(n / 2));
                } else {
                    if (this.uno === null) {
                        this.uno = new BitNode();
                    }
                    // chiamata ricorsiva per il ramo uno
                    this.uno.add(Math.floor(n / 2));
                }
            }
        }
    }
}
