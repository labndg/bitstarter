var express = require('express');
var app = express();
app.use(express.logger());

var buff = fs.readFileSync('index.html');

app.get('/', function(request, response) {
//  fs.readFileSync('index.html');
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
