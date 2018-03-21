'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/bookController');

  // todoList Routes
  app.route('/books')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/books/:ISBN')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);


  app.route('/books/:ISBN/:addedBy')
  .get(todoList.get_book_by_addedBy);
};
