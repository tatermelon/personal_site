
module.exports = function(app) {
  // application route
  app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
  });

};


