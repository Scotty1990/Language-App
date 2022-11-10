const mongoose = require("../db/connection");

const LanguageSchema = new mongoose.Schema(
    {
        id: Number,
        language: {
            type: String,
            required: true,
        },
        word: {
            type: String,
            required: true,
        },
        gender: String,
        type: {
            type: String,
            required: true,
        },
        translation: String,
        image: String,
    },
    { timestamps: true }
);

const Language = mongoose.model("Language", LanguageSchema);

module.exports = Language;