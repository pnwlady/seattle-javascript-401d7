const Dayman = module.exports = function(name) {
  this.figherOf = 'the Nightman';
  this.championOf = 'the sun';
  this.masterOf = ['karate', 'friendship for everyone'];
  this.alias = name;
};

Dayman.prototype.noise = function() {
  return 'ah ahh ahhh';
};
