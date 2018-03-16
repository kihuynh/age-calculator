import { Galactic } from './../src/galactic.js';


describe('Galactic', function () {
  it('should convert a persons age into seconds', function () {
    let age = new galacticAge(1);
    
    expect(age.yearsToSeconds).toEqual(31536000);
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
