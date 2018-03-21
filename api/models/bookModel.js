'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the book'
  },
  ISBN:{
    type: Number,
    required: 'Kindly enter the name ISBN number',
    unique : true
  },
  addedBy:{
    type: String,
    required: 'Kindly enter the name AddedBy'
  },
  rating:{
    type: Number,
    required: 'Kindly enter the name rating'
  },
  imgUrl:{
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  comments: [
    
    {
      type:String,
      commentsBy:String,
      commentsData:String
    }
  ]
   
});

module.exports = mongoose.model('Books', TaskSchema);