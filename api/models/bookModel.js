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
    required: 'Kindly enter the name ISBN number'
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
    required: 'Kindly enter the URL'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
});

module.exports = mongoose.model('Books', TaskSchema);