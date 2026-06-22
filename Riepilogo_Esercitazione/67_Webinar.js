/**Si consideri un sistema di gestione di talk, dove un generico talk è rappresentabile mediante la classe Talk, i cui campi sono 
    -   title (stringa), 
    -   speaker (stringa) e 
    -   duration (numerico, in minuti).

    Il sistema prevede la possibilità di definire tre tipi specifici di Talk, ovvero 
        -   Lecture, 
        -   Seminar e 
        -   Webinar:

La classe Lecture rappresenta una lezione di un dato course, indicato nel costruttore, e fornisce un getter-setter teacher che corrisponde allo speaker del talk in questione.

La classe Seminar rappresenta un seminario tenuto all'interno di un dato event, indicato nel costruttore.

La classe Webinar che rappresenta anch'essa un seminario tenuto all'interno di un event, con tale evento però tenuto online.

Si noti quindi che Webinar costituisce un caso specifico di Seminar.

Si implementino le classi 
-   Talk, 
-   Lecture, 
-   Seminar e 
-   Webinar, 

organizzandole in modo da sfruttare al meglio l'ereditarietà. 

Si implementi inoltre una funzione pickSeminar che, dato un array talks di Talk, restituisce il titolo del seminario più breve contenuto in talks. Se non ci sono seminari, restituisce undefined. */

class Talk {
    constructor(title, speaker, duration) {
        this.title = title;
        this.speaker = speaker;
        this.duration = duration;
    }
}

class Lecture extends Talk {
    constructor(title, speaker, duration, course) {
        super(title, speaker, duration);
        this.course = course;
    }
    get teacher() {
        return this.speaker;
    }
    set teacher(nuovoSpeaker) {
        this.speaker = nuovoSpeaker;
    }
}

class Seminar extends Talk {
    constructor(title, speaker, duration, event) {
        super(title, speaker, duration);
        this.event = event;
    }
}

class Webinar extends Seminar {
    constructor(title, speaker, duration) {
        super(title, speaker, duration, "online");
    }
}

function pickSeminar(talks) {
    let seminarioPiuCorto = undefined;
    
    for (let i = 0; i < talks.length; i++) {
        let talkCorrente = talks[i]; 
        
        
        if (talkCorrente instanceof Seminar) {
            if (seminarioPiuCorto === undefined || talkCorrente.duration < seminarioPiuCorto.duration) {
                seminarioPiuCorto = talkCorrente;
            }
        }
    }
    
    if (seminarioPiuCorto === undefined) {
        return undefined;
    } else {
        return seminarioPiuCorto.title;
    }
}