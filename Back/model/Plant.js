var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let plant = new Schema({
    id:{
        type: String, required:true
    },
    type:{
        type: String, required:true
    },

    date:{
        type:String, required:true
    },

    picture:{
        type:String, required:true
    },

    crop:{
        type:String, required:true
    },

})


module.exports = mongoose.model('plant', plant);