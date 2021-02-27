const mongoose = require("mongoose");
const validator = require("validator");

const Schema = require('mongoose').Schema;

var commentSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

var replySchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    question: {
        type: Schema.ObjectId,
        ref: 'Question'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    reply: {
        type: String,
        default: '',
        trim: true
    } 
});

const comment = new mongoose.Schema({
  comment:[commentSchema],
  reply: [replySchema]
});

const Comment = new mongoose.model('Comment', comment);

module.exports = Comment; 

