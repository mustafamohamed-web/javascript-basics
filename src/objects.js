const createPerson = (name, age) => {
 return {
   name : name,
   age : age,
 }
};
const getName = object => object.name

const getProperty = (property, object) => object[property]

const hasProperty = (property, object) => object.hasOwnProperty(property);
  
const isOver65 = person => person.age>65 ? true:false;
  
const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.find(person => person.name===name)

const findHondas = cars => cars.filter(car => car.manufacturer === 'Honda')

const averageAge = people => people.reduce((accumulator, currentValue) => accumulator + currentValue);

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
