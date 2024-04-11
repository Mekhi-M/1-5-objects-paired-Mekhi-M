const coolGreeting = (person) => {
  return person.isCool
    ? `What is UP ${person.name.toUpperCase()}? How you been doin'?`
    : `Greetings ${person.name}, how have you been lately?`;
};

//tests

// let person1 = {
//   name: "Sara",
//   bio: "Too cool 4 skool.",
//   age: 32,
//   isCool: true,
// };
// console.log(coolGreeting(person1));

const haveBirthday = (person) => {
  person.age++;
};

//tests

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

// tests

// let person3 = {
//   name: "Sara",
//   bio: "Too cool 4 skool.",
//   age: 32,
//   isCool: true,
// };
// console.log(person3);

// becomeSecretAgent(person3, "dark night");
// console.log(person3);

const carMaker = (name, maker, year) => {
  return {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false,
  };
};

// tests

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

// tests

let person5 = {
  name: "Sara",
  bio: "Too cool 4 skool.",
  age: 32,
  isCool: true,
  friends: ["Joe", "John", "Josh", "Esperanza"],
};
console.log(person5);

console.log(weAreNotFriends(person5, "dark night"));
console.log(person5);

const listHobbies = () => {};

const getNextOpponent = () => {};

const listAllKeys = () => {};

const listAllValues = () => {};

const convertToMatrix = () => {};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
