const db = require("../models");
const Translation = db.translation;
const Review = db.review;
const Sentence = db.sentence;
const Language = db.language;

exports.allTranslations = (req, res) => {
    Translation.findAll({
        attributes: ['id', 'average_score', 'n_scores'],
        include: ['OriginalSentence','TranslatedSentence']
    }).then( translations => {        
        if (!translations) {
            return res.status(404).send({ message: "Sentences not found." });
        }

        res.status(200).send(translations)
    })
}

exports.createTranslation = (req, res) => {
    Sentence.create({
        sentence: req.body.translationText,
        languageId: req.body.idLanguage
    }).then( sentence => {
        if(!sentence){
            return res.status(404).send({ message: "Sentence not created." });
        }
        Translation.create({
            original: req.body.idSentence,
            translated: sentence.idsentence,
            translator: req.userId
        }).then( translation => {
            if(!translation){
                return res.status(404).send({ message: "Translation not created." });
            }
            return res.status(200).send(translation);
        })
    })
}

exports.allTranslationsNotReviewdByUser = (req, res) => {
    Translation.findAll({
        attributes: ['id', 'average_score', 'n_scores'],
        include: ['OriginalSentence','TranslatedSentence']
    }).then( translations => {
        if (!translations) {
            return res.status(404).send({ message: "Translations not found." });
        }
        Review.findAll({
            attributes: ['id', 'translationId'],
            where: {
                translator: { [db.Sequelize.Op.eq]: req.userId }
            }
        }).then( reviews => {
            let array_id_reviews = reviews.map(review => review.translationId)
            translations = translations.filter(translation => !array_id_reviews.includes(translation.id))
            Language.findAll({
                attributes: ['idlanguage', 'title', 'abbreviation'],
                include: ['TranslatorTranslateLanguage'],
                where: {
                    '$TranslatorTranslateLanguage.id$': { [db.Sequelize.Op.eq]: req.userId }
                }
            }).then( languages => {
                if (!languages) {
                    return res.status(404).send({ message: "Languages not found." });
                }
                let array_id_language = languages.map(language => language.idlanguage)
                translations = translations
                    .filter(translation => array_id_language.includes(translation.OriginalSentence.languageId))
                    .filter(translation => array_id_language.includes(translation.TranslatedSentence.languageId))
                res.status(200).send(translations)
            });
        })
    })
}