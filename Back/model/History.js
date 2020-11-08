var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plant = mongoose.model('plant');


let history = new Schema({
    description:{
        type: String
    },
    date:{
        type: String
    },
    plant: { type: Schema.ObjectId, ref: "plant" } 
})




module.exports = mongoose.model('history', history);