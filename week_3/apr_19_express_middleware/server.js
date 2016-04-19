const app = require('express')();

app.get('/someroute', (req, res, next) => {
  req.name = 'toasty';
  next();
  console.log('hello from middleware');
},
(req, res, next) => {
  console.log('hello from finally');
  res.send('hello ' + req.name);
}).listen(3000);
