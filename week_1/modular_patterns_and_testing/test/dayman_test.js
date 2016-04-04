const chai = require('chai');
const expect = chai.expect;
const Dayman = require(__dirname + '/../lib/dayman');

const dayman = new Dayman('Denis');

describe('the dayman', () => {
  it('should be a figher of the Nightman', () => {
    expect(dayman.figherOf).to.eql('the Nightman');
  });
  it('should be a champion of the sun', () => {
    expect(dayman.championOf).to.eql('the sun');
  });
  it('should be a master of karate and friendship for everyone', () => {
    expect(Array.isArray(dayman.masterOf)).to.eql(true);
    expect(dayman.masterOf.indexOf('karate')).to.not.eql(-1);
    expect(dayman.masterOf.indexOf('friendship for everyone')).to.not.eql(-1);
  });
  it('should have an alias', () => {

    expect(dayman.alias).to.eql('Denis');
  });
  it('should be able to make the dayman sound', () => {
    expect(dayman.noise()).to.eql('ah ahh ahhh');
  });
});

