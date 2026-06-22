type Oggetto = { [chiave: string]: any };

function sanitize(obj: Oggetto, drop: string[]): void {
    for (let chiave in obj) {
        if (drop.includes(chiave)) {
            delete obj[chiave];
        } else {
            if (typeof obj[chiave] === "object" && obj[chiave] !== null) {
                sanitize(obj[chiave], drop);
            }
        }
    }
}
