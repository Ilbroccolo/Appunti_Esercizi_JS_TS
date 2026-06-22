class FinestraLab extends Array {
    #pmaxc = 10;
    
    get maxc() {
        return this.#pmaxc;
    }

    set maxc(val) {
        this.#pmaxc = val;

        while (this.length > this.#pmaxc) {
            this.shift();
        }
    }

    push(...elementi) {
        super.push(...elementi);

        while (this.length > this.#pmaxc) {
            this.shift();
        }

        return this.length;
    }

    pop() {
        return;
    }

    splice() {
        return;
    }
}
let fin = new FinestraLab()
fin.push(1,6,2,3,5)
console.log(fin)
fin.maxc = 3
console.log(fin)
fin.push(4)
console.log(fin)



