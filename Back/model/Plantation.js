var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let plantation = new Schema({
    plantation_name:{
        type: String
    },

    plantation_description:{
        type:String
    },
})


module.exports = mongoose.model('plantation', plantation);