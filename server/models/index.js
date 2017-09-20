var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryArgs = [];
      console.log('')
      var queryString = 'select messages.id, messages.text, messages.room, users.name \
                      from messages left outer join users on (messages.users = users.id) \
                      order by messages.id desc';
      db.query(queryString, queryArgs, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryArgs = [];
      var queryString = 'insert into messages(text, users, room) \
                      value (?, (select id from users where users = ? limit 1), ?)';
      db.query(queryString, message, function(err, results) {
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
