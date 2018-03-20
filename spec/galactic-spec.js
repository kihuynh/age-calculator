import { galacticAge } from './../src/galactic.js';

describe('Age', function () {
  it('should convert a persons age into seconds', function() {
    let age = new galacticAge(1);
    expect(age.yearsToSeconds(1)).toEqual(31536000);
  });

  it('should determine the difference between two dates in seconds', function() {
  // take two dates get diff (d2-d1) = results / 1000;
    let age = new galacticAge(26, "1991-08-04");
    expect(age.dateDifference()).toBeGreaterThan(840096418); // differnt matcher for flexibility round up or down.
  });

  it('should return user age into Mercury age', function() {
    let age = new galacticAge(26, "1991-08-04");
    expect(age.mercuryAge()).toBeGreaterThanOrEqual(108);
  });

  it('should return user age into Venus age', function() {
    let age = new galacticAge(26, "1991-08-04");
    expect(age.venusAge()).toBeGreaterThanOrEqual(41);
  });

  it('should return user age into Mars age', function() {
    let age = new galacticAge(26, "1991-08-04");
    expect(age.marsAge()).toBeGreaterThanOrEqual(13);
  });

  it('should return user age into Jupiter age', function() {
    let age = new galacticAge(26, "1991-08-04");
    expect(age.jupiterAge()).toBeGreaterThanOrEqual(2);
  });

  it('returns remaining time on Earth', function() {
    let age = new galacticAge(26, "1991-08-04");
    expect(age.remainingEarth()).toEqual(46);
  });

  it('returns remaining time on Mercury', function () {
    let age = new galacticAge(26, "1991-08-04");
    expect(age.remainingMercury()).toEqual(191);
  });

  it('returns remaining time on Venus', function() {
    let age = new galacticAge(26, "1991-08-04");
    expect(age.remainingVenus()).toEqual(74);
  })

  it('returns remaining time on Mars', function() {
    let age = new galacticAge(26);
    expect(age.remainingMars()).toEqual(24);
  })

  it('returns remaining time on Jupiter', function() {
    let age = new galacticAge(26);
    expect(age.remainingJupiter()).toEqual(3);
  })
});
