const express = require('express');
const app = express();
app.get('/something', (req, res) => {
  res.status(200).json({msg: 'hello world'});
});

app.get('/*', (req,res) => {
  res.status(200).json({msg: 'wow such routes'})
});

app.get('/greet/:name', (req, res) => {
  res.status(200).json({msg: 'hello ' + req.params.name});
});
app.listen(3000, () => console.log('server up'));
