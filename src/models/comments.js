const mongoose = require("mongoose");
const validator = require("validator");

const commentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    
    email : {
        type:String,
        required:true
        }
    

})