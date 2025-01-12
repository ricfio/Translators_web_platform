const db = require("../models");

const Translation = db.translation;

/* creation basic users */
module.exports = {
    createTranslations : async () => {  
        await Translation.create({
            original: 2,
            translated: 3,
            translator: 1
        });

        await Translation.create({
            original: 5,
            translated: 6,
            translator: 1
        });

        await Translation.create({
            original: 8,
            translated: 7,
            translator: 1
        });

        await Translation.create({
            original: 8,
            translated: 9,
            translator: 1
        });
        
        await Translation.create({
            original: 8,
            translated: 10,
            translator: 1
        });
    }
}