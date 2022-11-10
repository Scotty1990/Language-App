// const { connect } = require('mongoose')
const Language = require('../models/language')

const seedData = require('./language-seeds.json')

Language.deleteMany({})
    .then(() => Language.insertMany(seedData))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit())

// Language.insertMany({seedData})
//     // .then(() => Language.insertMany(seedData))
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => process.exit())

// const importData = async () => {
//     try {
//         await connect()
//         await Language.deleteMany({})
        
//         await Language.insertMany(seedData)
        
//         console.log("Data Import Success")

//         process.exit()
//     } catch (error) {
//         console.error("Error with data import", error)
//         process.exit()
//     }
// }

// importData()

