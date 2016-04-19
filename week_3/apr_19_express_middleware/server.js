const express = require('express');
const app = express();

var routerOne = express.Router();

routerOne.use((req, res, next) => {
  console.log('hello from router middleware');
  next();
});

routerOne.get('/someroute', (req, res) => {
  res.send('done some route');
});

routerOne.post('/anotherroute', (req, res) => {
  res.send('hello from post');
});

app.use('/api', routerOne);
app.listen(3000, () => console.log('server up'));
