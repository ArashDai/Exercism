var Year = require('./leap');

describe('Leap year', function () {
  it('2015', function () {
    var year = new Year(2015);
    expect(year.isLeap()).toBe(false);
  });

  it('2016', function () {
    var year = new Year(2016);
    expect(year.isLeap()).toBe(true);
  });

  it('1900', function () {
    var year = new Year(1900);
    expect(year.isLeap()).toBe(false);
  });

  it('2000', function () {
    var year = new Year(2000);
    expect(year.isLeap()).toBe(true);
  });

  // Feel free to enable the following tests to check some more examples
  xdescribe('Additional example of a leap year that', function () {
    it('is not a leap year', function () {
      var year = new Year(1978);
      expect(year.isLeap()).toBe(false);
    });

    it('is a common leap year', function () {
      var year = new Year(1992);
      expect(year.isLeap()).toBe(true);
    });

    it('is skipped every 100 years', function () {
      var year = new Year(2100);
      expect(year.isLeap()).toBe(false);
    });

    it('is reintroduced every 400 years', function () {
      var year = new Year(2400);
      expect(year.isLeap()).toBe(true);
    });
  });
});
