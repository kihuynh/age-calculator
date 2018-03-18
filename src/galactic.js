export class galacticAge {

  constructor(age){
    this.age = age;
  }

  yearsToSeconds() {
    let ageSeconds = this.age * 31536000;
    return ageSeconds;
  }

  // dateDifference() {
  //
  // }
}
