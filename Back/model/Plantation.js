var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let plantation = new Schema({
    address:{
        type: String, required:true
    },

    adminstrator:{
        type:Date, required:true
    },

    crops:{
        type:String, required:true
    },

    picture:{
        type:String
    },
})


module.exports = mongoose.model('plantation', plantation);