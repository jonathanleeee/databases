var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('REQUEST REACHED CONTROLLERS');
      models.messages.get(function(result){

        res.json(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('REQUEST REACHED CONTROLLERS');
      models.messages.post(req.params.json, function(result){

        res.send(result);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('REQUEST REACHED CONTROLLERS');
      models.users.get(function(result){

        res.json(result);
      });
      // res.send('users given');
    },
    post: function (req, res) {
      console.log('REQUEST REACHED CONTROLLERS');
      models.users.post(req.params.json, function(result){

        res.send(result);
      });
      // res.send('request heard');
    }
  }
};
