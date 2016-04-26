const app = require(__dirname + '/_server.js');
app.listen(3000, 'mongodb://localhost/server_dev', () => console.log('server up'));
