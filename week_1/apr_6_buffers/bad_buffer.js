var mySecret = new Buffer(process.env.SECRET);
mySecret = null;

var buf;
while((buf = new Buffer(64)).toString().indexOf(('bears' + 'and' + 'salmons')) === -1);

console.log(buf.toString());
