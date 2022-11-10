const express = require('express')
const Language = require('../models/language')

const LanguageRouter = express.Router()

LanguageRouter.get('/', (req, res, next) => {
    Language.find({})
        .then(languages => res.json(languages))
        .catch(next)
})

LanguageRouter.get('/:id', (req, res, next) => {
    Language.findById({_id: req.params.id})
        .then(languages => res.json(languages))
        // .then(() => res.redirect("/"))
        .catch(next)
})

LanguageRouter.post('/', (req, res, next) => {
    Language.create(req.body)
        .then(() => res.redirect("/languages"))
        .catch(next)
})

LanguageRouter.put('/:id', (req, res, next) => {
    Language.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(() => res.redirect("/languages"))
        .catch(next)
})

LanguageRouter.delete('/:id', (req, res, next) => {
    Language.findOneAndDelete({_id: req.params.id})
        .then(() => res.redirect("/languages"))
        .catch(next)
})

module.exports = LanguageRouter