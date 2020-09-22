var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let user = new Schema({
    user_name:{
        type: String
    },

    user_description:{
        type:String
    },
})


module.exports = mongoose.model('user', user);