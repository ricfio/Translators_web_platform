const db = require("../models");

const ParallelText = db.parallel_text;

/* creation basic users */
module.exports = {
    createParallelTexts : async () => {  
        await ParallelText.create({
            originalText: "Dream as if you'll live forever. Live as if you'll die today.",
            translatedText: "Sogna come se dovessi vivere per sempre. Vivi come se dovessi morire oggi.",
            originalLanguage: 1,
            translatedLanguage: 2
        });
        
        await ParallelText.create({
            originalText: "I see no changes, wake up in the morning and I ask myself \
                Is life worth livin'? Should I blast myself? \
                I'm tired of bein' poor and, even worse, I'm black \
                My stomach hurts so I'm lookin' for a purse to snatch \
                Cops give a damn about a negro \
                Pull the trigger, kill a nigga, he's a hero \
                Give the crack to the kids, who the hell cares? \
                One less hungry mouth on the welfare \
                First ship 'em dope and let 'em deal to brothers \
                Give 'em guns, step back, watch 'em kill each other \
                'It's time to fight back, ' that's what Huey said \
                Two shots in the dark, now Huey's dead \
                I got love for my brother \
                But we can never go nowhere unless we share with each other \
                We gotta start makin' changes \
                Learn to see me as a brother instead of two distant strangers \
                And that's how it's supposed to be \
                How can the Devil take a brother if he's close to me? Uh \
                I'd love to go back to when we played as kids \
                But things change, and that's the way it is.",
            translatedText: "Non vedo cambiamenti, mi sveglio al mattino e mi chiedo \
                È degna di essere vissuta la vita, dovrei spararmi? \
                Sono stanco di essere povero e peggio ancora sono nero \
                Mi duole lo stomaco e sto cercando un borsellino da scippare \
                Ai poliziotti non frega niente di un Negro \
                Preme il grilletto, uccide un negro è un eroe \
                Da il crack ai ragazzini, chi diavolo se ne cura? \
                Una bocca da sfamare in meno sul welfare \
                Prima spediscono loro la droga poi li lasciano trattare coi fratelliDanno loro pistole, si mettono da parte a guardarli uccidersi fra loro \
                è ora di ribellarsi, è quanto diceva Huey \
                Due spari nel buio \
                Ora Huey è morto \
                Ho amore per il mio fratello ma non possiamo andare da nessuna parte \
                Se non lo condividiamo l'uno con l'altro \
                Dobbiamo cominciare a fare dei cambiamenti \
                Impara a vedermi come fratello invece che essere due lontani stranieri \
                Come può il Diavolo prendere il mio fratello se sta vicino a me? \
                Ed è così che dovrebbe essere \
                ma le cose cambiano, ed è così che va.",
            originalLanguage: 1,
            translatedLanguage: 2
        });

        await ParallelText.create({
            originalText: "No existe la muerte. La gente solo muere cuando nos olvidamos de ellos.",
            translatedText: "La morte non esiste. Le persone muoiono solo quando ci dimentichiamo di loro.",
            originalLanguage: 4,
            translatedLanguage: 2
        });

        await ParallelText.create({
            originalText: "No soy extraño. Sólo no soy normal.",
            translatedText: "Non sono strano. È solo che non sono normale.",
            originalLanguage: 4,
            translatedLanguage: 2
        });

        await ParallelText.create({
            originalText: "El mundo hay que fabricárselo uno mismo, hay que crear peldaños que te suban, que te saquen del pozo. Hay que inventar la vida porque acaba siendo verdad.",
            translatedText: "Il mondo uno deve crearselo, deve crearsi i gradini che lo portino su, che lo portino fuori dal pozzo. Uno deve inventarsi la vita affinché possa diventare realtà.",
            originalLanguage: 4,
            translatedLanguage: 2
        });
        
        await ParallelText.create({
            originalText: "As I walk through the valley of the shadow of death \
            I take a look at my life, and realize there's nothin' left \
            'Cause I've been blastin' and laughin' so long \
            That even my momma thinks that my mind is gone.",
            translatedText: "Mentre cammino attraverso la valle dell'ombra della morte \
            Do' un'occhiata alla mia vita e mi rendo conto che non mi e' rimasto niente \
            perchè mi sono ubriacato e ho riso cosi' a lungo, che \
            anche mia mamma pensa che la mia testa sia partita.",
            originalLanguage: 1,
            translatedLanguage: 2
        });
    }
}