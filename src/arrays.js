const getNthElement = (index, array) => {
  const arrayLength = array.length;
  return array[index % array.length]
};

const arrayToCSVString = array => array.join(',');

const csvStringToArray = string => string.split(',');


const addToArray = (element, array) => {
  array.push(element);
  };

  const addToArray2 = (element, array) => {
    const newArr = [...array, element];
    return newArr;
};
const removeNthElement = (index, array) => {
  const newArr = array.splice(index, 1)
  return newArr
};

const numbersToStrings = numbers => numbers.toString().split(',')


const uppercaseWordsInArray = strings => {
  const str = strings.join(' ').toUpperCase().split(' ')
  return str
};

const reverseWordsInArray = strings => strings.map(newString=>newString.split('').reverse().join(''));


const onlyEven = numbers => numbers.filter(value=> value % 2 == 0)
  

const removeNthElement2 = (index, array) => {
  const newArr = [...array]
  newArr.splice(index, 1);
  return newArr
};

const elementsStartingWithAVowel = strings => strings.filter((string) => (string.match(/^[aeiou]/i)))

const removeSpaces = string => string.split(' ').join('')

const sumNumbers = numbers => numbers.reduce ((accumulator, currentValue) => accumulator + currentValue);

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
