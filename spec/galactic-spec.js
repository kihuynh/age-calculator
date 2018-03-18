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
    expect(age.mercuryAge()).toEqual(108);
  });
});



// describe('Haiku', function() {
//   it('takes in haiku line and returns the number of syllables', function() {
//     let newHaiku = new Haiku("haiku");
//     let syllableCount = 2;
//     let haikuLine = "haiku"
//     expect(newHaiku.countWordSyllables(haikuLine)).toEqual(syllableCount);
//   })
//
// }
