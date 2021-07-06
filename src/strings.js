const sayHello = string => {
  return ' Hello ' + string + '!'
};
console.log(sayHello('world'))

const uppercase = string => {
  return string.toUpperCase()
};
console.log(uppercase('afjs'))

const lowercase = string => {
  return string.toLowerCase()
};
console.log(lowercase('ASNJF'))

const countCharacters = string => {
  return string.length
 };
 console.log(countCharacters('mustada'))

 const firstCharacter = string => {
  return string.charAt(0)
};

console.log(firstCharacter('abc'))

const firstCharacters = (string, n) => {
  return string.slice(string,n)
};
console.log(firstCharacters('abcdefg',4))



module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
