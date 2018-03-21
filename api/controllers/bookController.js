'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Books');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  console.log(req);
  Task.findOne({ISBN: req.params.ISBN}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  console.log(req.body);
  Task.findOneAndUpdate({ISBN: req.params.ISBN}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.get_book_by_addedBy = function(req,res){
  console.log(req);
  Task.find({
    'addedBy': req.params.addedBy
  }, 
  function(err, task) 
  {
    if (err)
      res.send(err);
    res.json(task);
  });
};