var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Plant = mongoose.model('Plant');


let planthistory = new Schema({
    description:{
        type: String
    },
    date:{
        type: String
    },
    plant: { type: Schema.ObjectId, ref: "Plant" } 
})


module.exports = mongoose.model('planthistory', planthistory);