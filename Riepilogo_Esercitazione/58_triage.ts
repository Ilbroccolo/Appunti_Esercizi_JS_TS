// enum per le priorità del codice (code)
enum Code {
    White = 0,
    Green = 1,
    Yellow = 5,
    Red = 10
}

enum Age {
    Adult = 0,
    Elder = 1,
    Child = 2,
    Baby = 5
}

type Urgency = [Code, Age];

function triage(patients: Urgency[]): void {
    patients.sort(function(pazienteA: Urgency, pazienteB: Urgency): number {
        // calcoliamo la priorità totale come somma del codice e del modificatore età
        let prioritaA = pazienteA[0] + pazienteA[1];
        let prioritaB = pazienteB[0] + pazienteB[1];
        
        if (prioritaA !== prioritaB) {
            return prioritaB - prioritaA;
        }
        
        // se la priorità totale è la stessa, vince chi ha il codice code più alto
        return pazienteB[0] - pazienteA[0];
    });
}
