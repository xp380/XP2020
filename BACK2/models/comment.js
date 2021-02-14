const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({

    lastName: {
        type: String
    },
    firstName: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    comment: {
        type: String
    },
    date: {
        type: String
    },
}, {
    collection: 'contacts'
})

module.exports = mongoose.model('Contact', contactSchema)