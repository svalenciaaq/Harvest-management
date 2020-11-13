var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let plant = new Schema({
    id:{
        type: String, required:false
    },
    type:{
        type: String, required:false
    },

    date:{
        type:String, required:false
    },

    picture:{
        type:String
    },

    crop:{
        type:String, required:false
    },

})


module.exports = mongoose.model('plant', plant);