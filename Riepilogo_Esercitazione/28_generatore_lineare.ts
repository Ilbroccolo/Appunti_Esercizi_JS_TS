function* prg(s: number, mul: number, incr: number, m: number): Generator<number, void, unknown> {
    let numeroCorrente: number = s;

    while (true) {
        numeroCorrente = (numeroCorrente * mul + incr) % m;
        yield numeroCorrente;
    }
}
