var mongoose = require('mongoose');
var Schema =mongoose.Schema;


let planning= new Schema({
    date:{
        type:String
    },
    tratament:{
        type: String
    },
    plant:{
        type:String
    },
})


module.exports = mongoose.model('planning', planning);