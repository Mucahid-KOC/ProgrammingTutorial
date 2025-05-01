"use strict";

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Cahid');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Cahid')); console.log(yearsUntilRetirement(1980, 'Bob'));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Eyüp';
const friend2 = 'Cafer';
const friend3 = 'Enes';

const friends = ['Eyüp', 'Cafer', 'Enes'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Cahid';
const Cahid = [firstName, 'KOC', 2037 - 1991, 'teacher', friends];
console.log(Cahid);
console.log(Cahid.length);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Eyüp', 'Cafer', 'Enes'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('cahid');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Cafer'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Cafer'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Cafer')) {
  console.log('You have a friend called Cafer');
}
*/

///////////////////////////////////////

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


///////////////////////////////////////
// Introduction to Objects
const CahidArray = [
  'Cahid',
  'KOC',
  2037 - 1991,
  'teacher',
  ['Eyüp', 'Enes', 'Cafer']
];

const Cahid = {
  firstName: 'Cahid',
  lastName: 'KOC',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Eyüp', 'Enes', 'Cafer']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const Cahid = {
  firstName: 'Cahid',
  lastName: 'KOC',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Eyüp', 'Enes', 'Cafer']
};
console.log(Cahid);

console.log(Cahid.lastName);
console.log(Cahid['lastName']);

const nameKey = 'Name';
console.log(Cahid['first' + nameKey]);
console.log(Cahid['last' + nameKey]);

// console.log(Cahid.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Cahid? Choose between firstName, lastName, age, job, and friends');

if (Cahid[interestedIn]) {
  console.log(Cahid[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

Cahid.location = 'Portugal';
Cahid['twitter'] = '@Cahidkoc';
console.log(Cahid);

// "Cahid has 3 friends, and his best friend is called Eyüp"
console.log(`${Cahid.firstName} has ${Cahid.friends.length} friends, and his best friend is called ${Cahid.friends[0]}`);


///////////////////////////////////////
// Object Methods

const Cahid = {
  firstName: 'Cahid',
  lastName: 'KOC',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Eyüp', 'Enes', 'Cafer'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${Cahid.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(Cahid.calcAge());

console.log(Cahid.age);
console.log(Cahid.age);
console.log(Cahid.age);

console.log(Cahid.getSummary());
*/

///////////////////////////////////////

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const cahid = {
  fullName: 'cahid Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
cahid.calcBMI();

console.log(mark.bmi, cahid.bmi);

// "cahid Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > cahid.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${cahid.fullName}'s BMI (${cahid.bmi})`)
} else if (cahid.bmi > mark.bmi) {
  console.log(`${cahid.fullName}'s BMI (${cahid.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const Cahid = [
  'Cahid',
  'KOC',
  2037 - 1991,
  'teacher',
  ['Eyüp', 'Enes', 'Cafer'],
  true
];
const types = [];

// console.log(Cahid[0])
// console.log(Cahid[1])
// ...
// console.log(Cahid[4])
// Cahid[5] does NOT exist

for (let i = 0; i < Cahid.length; i++) {
  // Reading from Cahid array
  console.log(Cahid[i], typeof Cahid[i]);

  // Filling types array
  // types[i] = typeof Cahid[i];
  types.push(typeof Cahid[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < Cahid.length; i++) {
  if (typeof Cahid[i] !== 'string') continue;

  console.log(Cahid[i], typeof Cahid[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < Cahid.length; i++) {
  if (typeof Cahid[i] === 'number') break;

  console.log(Cahid[i], typeof Cahid[i]);
}

for (let i = Cahid.length - 1; i >= 0; i--) {
  console.log(i, Cahid[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

///////////////////////////////////////
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
