var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let plant = new Schema({
    plant_name:{
        type: String
    },

    plant_description:{
        type:String
    },
})


module.exports = mongoose.model('plant', plant);