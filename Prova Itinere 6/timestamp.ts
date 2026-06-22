type Timestamp = {
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number; // Il punto di domanda indica che è opzionale
};

type UpdateFunction<T> = (valore: T) => T;

type Update<T> = {
  f: UpdateFunction<T>;
  timestamp: Timestamp;
};

class EarlierUpdateError extends Error{
    timestamp : Timestamp
    constructor(message: string, timestamp : Timestamp){
        super(message)
        this.timestamp = timestamp
    }
}

class UpdateChain<T> {
    public initial_value : T
    public updates : Update<T>[] = [] 
    constructor(initial_value: T) {
        this.initial_value = initial_value;
    }

    // Campo in sola lettura (Getter)
  get current_value(): T {
    let current = this.initial_value;
    for (const update of this.updates) {
      current = update.f(current);
    }
    return current;
  }
  // Funzione di supporto per capire se t1 è precedente a t2
  private isPrecedente(t1: Timestamp, t2: Timestamp): boolean {
    if (t1.year !== t2.year) return t1.year < t2.year;
    if (t1.month !== t2.month) return t1.month < t2.month;
    if (t1.day !== t2.day) return t1.day < t2.day;
    if (t1.hour !== t2.hour) return t1.hour < t2.hour;
    return t1.minute < t2.minute;
  }

  add(update_function: UpdateFunction<T>, timestamp: Timestamp): void {
    // Se ci sono già aggiornamenti, controlliamo l'ultimo inserito
    if (this.updates.length > 0) {
      const ultimoUpdate = this.updates[this.updates.length - 1];
      
      // Confrontiamo il nuovo timestamp con l'ultimo memorizzato
      if (this.isPrecedente(timestamp, ultimoUpdate.timestamp)) {
        throw new EarlierUpdateError(
          "Errore: Il timestamp fornito è precedente all'ultimo aggiornamento.",
          timestamp
        );
      }
    }

    // Se il controllo passa, lo aggiungiamo alla lista
    this.updates.push({ f: update_function, timestamp });
  }

  
}

// Creiamo una catena che parte dal numero 10
const catena = new UpdateChain<number>(10);

const t1: Timestamp = { year: 2026, month: 6, day: 7, hour: 10, minute: 0 };
const t2: Timestamp = { year: 2026, month: 6, day: 7, hour: 11, minute: 0 };
const tPassato: Timestamp = { year: 2025, month: 1, day: 1, hour: 0, minute: 0 };

catena.add((n) => n + 5, t1);  // 10 + 5 = 15
catena.add((n) => n * 2, t2);  // 15 * 2 = 30

console.log(catena.current_value); // Stampa 30

try {
  // Questo lancerà l'eccezione perché tPassato (2025) viene prima di t2 (2026)
  catena.add((n) => n - 1, tPassato); 
} catch (error) {
  if (error instanceof EarlierUpdateError) {
    console.log(error.message); // "Timestamp precedente non consentito."
    console.log("Timestamp errato dell'anno:", error.timestamp.year); // 2025
  }
}