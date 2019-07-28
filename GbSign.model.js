const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GbSign =  new Schema({
    gb_fname: {
        type: String
    },
    gb_lname: {
        type: String
    },
    gb_msg: {
        type: String
    },
});

module.exports = mongoose.model('GbSign', GbSign);