var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let user = new Schema({
    name:{
        type: String, required:false
    },

    email:{
        type: String, required:false
    },

    dni:{
        type:String, required:false
    },

    cellphone:{
        type:String, required:false
    },

    rol:{
        type:String, required:false
    },
    
})


module.exports = mongoose.model('user', user);