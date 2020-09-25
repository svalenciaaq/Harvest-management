var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let crop = new Schema({
    location:{
        type: String, required:false
    },

    administrator:{
        type:String, required:false
    },

    picture:{
        type:String
    },

    dateofinaguration:{
        type:String, required:false
    },
})


module.exports = mongoose.model('crop', crop);