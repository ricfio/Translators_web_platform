const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.language = require("../models/language.model.js")(sequelize, Sequelize);
db.translator_translate_language = require("../models/translator_translate_language.model.js")(sequelize, Sequelize);
db.sentence = require("../models/sentence.model.js")(sequelize, Sequelize);
db.translation = require("../models/translation.model.js")(sequelize, Sequelize);
db.review = require("../models/review.model.js")(sequelize, Sequelize);
db.parallel_text = require("../models/parallel_text.model.js")(sequelize, Sequelize);

db.role.hasMany(db.user);
db.user.belongsTo(db.role);

db.user.belongsToMany(db.language, {
  through: db.translator_translate_language,
  as: 'TranslatorTranslateLanguage',
  foreignKey: "translator",
  otherKey: "language"
});
db.language.belongsToMany(db.user, {
  through: db.translator_translate_language,
  as: 'TranslatorTranslateLanguage',
  foreignKey: "language",
  otherKey: "translator"
});

db.language.hasMany(db.sentence, {
  foreignKey: 'languageId'
});
db.sentence.belongsTo(db.language, {
  as: 'Language',
  foreignKey: 'languageId'
});

db.sentence.hasMany(db.translation, {
  foreignKey: 'original'
});
db.translation.belongsTo(db.sentence, {
  as: 'OriginalSentence',
  foreignKey: 'original'
});
db.sentence.hasMany(db.translation, {
  foreignKey: 'translated'
});
db.translation.belongsTo(db.sentence, {
  as: 'TranslatedSentence',
  foreignKey: 'translated'
});
db.user.hasMany(db.translation, {
  foreignKey: 'translator'
});
db.translation.belongsTo(db.user, {
  foreignKey: 'translator'
});

db.user.hasMany(db.review, {
  foreignKey: 'translator'
});
db.review.belongsTo(db.user, {
  foreignKey: 'translator'
});
db.translation.hasMany(db.review, {
  as: 'Reviews'
});
db.review.belongsTo(db.translation);

db.parallel_text.belongsTo(db.language, {
  as: 'OriginalLanguage',
  foreignKey: 'originalLanguage'
});
db.language.hasMany(db.parallel_text, {
  foreignKey: 'originalLanguage'
});
db.parallel_text.belongsTo(db.language, {
  as: 'TranslatedLanguage',
  foreignKey: 'translatedLanguage'
});
db.language.hasMany(db.parallel_text, {
  foreignKey: 'translatedLanguage'
});
db.parallel_text.hasOne(db.translation, {
  as: 'Translations',
  foreignKey: 'parallel_text_id'
});
db.translation.belongsTo(db.parallel_text, {
  as: 'ParallelText',
  foreignKey: 'parallel_text_id'
});
module.exports = db;