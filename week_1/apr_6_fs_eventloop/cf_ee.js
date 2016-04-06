var CFEE = module.exports = exports = function() {
  this.events = {};
};

CFEE.prototype.on = function(e, cb) {
  this.events[e] = cb; 
};

CFEE.prototype.emit = function(e) {
  var args = Array.prototype.slice.call(arguments, 1);

  this.events[e].apply(null, args);
};
