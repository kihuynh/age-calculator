
export class galacticAge {

  constructor(age){
    this.age = age;
  }

  yearsToSeconds(age) {
    let ageSeconds = age * 31536000;
    return ageSeconds;
  }
}
