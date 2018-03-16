import { galacticAge } from './../src/galactic.js';

describe('Age', function () {
  it('should convert a persons age into seconds', function () {
    let age = new galacticAge();
    expect(age.yearsToSeconds(1)).toEqual(31536000);
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
