var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryArgs = [];
      console.log('')
      db.query('select * from messages;', queryArgs, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryArgs = [];
      db.query('insert into messages (text, room, user) values (?)', message, function(err, results) {
        callback(results);
      }); // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryArgs = [];
      db.query('select * from users;', queryArgs, function(err, results) {
        callback(results);
      });
    },
    post: function (user, callback) {
      db.query('insert into users (name) values (?);', user, function(err, results) {
        callback(results);
      });
    }
  }
}
