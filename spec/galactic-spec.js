import { galacticAge } from './../src/galactic.js';

describe('Age', function () {
  it('should convert a persons age into seconds', function() {
    let age = new galacticAge(1);
    expect(age.yearsToSeconds(1)).toEqual(31536000);
  });

  it('should determine the difference between two dates in seconds', function() {
  // take two dates get diff (d2-d1) = results / 1000;
    let age = new galacticAge(26);
    expect(age.dateDifference(26)).toEqual(840096418942); // differnt matcher for flexibility
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
