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

  marsAge() {
    let mars = Math.floor((this.age / 1.88));
    return mars;
  }

  jupiterAge() {
    let jupiter = Math.floor((this.age / 11.86));
    return jupiter;
  }

  remainingEarth() {
    const leftExpect = 72;
    let lifeEarth = leftExpect - this.age;
    return lifeEarth;
  }

  remainingMercury() {
    const leftExpect = 72;
    let lifeMercury = (leftExpect - this.age) / .24;
    return Math.floor(lifeMercury);
  }
}
