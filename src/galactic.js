export class galacticAge {

  constructor(age, birthDate){
    this.age = age;
    this.userBirth = birthDate;
    this.currentDate = Date.now();
  }

  yearsToSeconds() {
    let ageSeconds = this.age * 31536000;
    return ageSeconds;
  }

  dateDifference() {
    let birth = new Date("1991-08-04").getTime();
    let userAge = Math.floor((this.currentDate - birth)/1000);
    return userAge;
  }

  mercuryAge() {
    let merc = Math.floor((this.age / 0.24));
    return merc;
  }

  venusAge() {
    let venus = Math.floor((this.age / 0.62));
    return venus;
  }
}
