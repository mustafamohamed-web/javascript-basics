const negate = a=> a===true? false:true;
console.log(negate(true))



const both = (a, b) => {
  if(a === true && b === true){
    return true
  }else if(a=== true && b === false){
    return false
  }else if(a === false && b === true){
    return false
  }else if (a === false && b === false){
    return false
  }
};



const either = (a, b) => {
  if(a === true && b === true){
    return true
  }else if(a=== true && b === false){
    return true
  }else if(a === false && b === true){
    return true
  }else if (a === false && b === false){
    return false
  }
};



const none = (a, b) => {
  if(a === true && b === true){
    return false
  }else if(a=== true && b === false){
    return false
  }else if(a === false && b === true){
    return false
  }else if (a === false && b === false){
    return true
  }
};


const one = (a, b) => {
  if(a === true && b === true){
    return false
  }else if(a=== true && b === false){
    return true
  }else if(a === false && b === true){
    return true
  }else if (a === false && b === false){
    return false
  }
};


const truthiness = a => {
  return Boolean(a)
};

const isEqual = (a,b)=>a==b? true:false;
console.log(isEqual(true,false))

const isGreaterThan = (a, b) => a>b? true:false;
console.log(isEqual(1, 2))

const isLessThanOrEqualTo  = (a,b)=> a<=b? true:false;
console.log(isLessThanOrEqualTo(1,2))

const isOdd = a => a%2==1? true:false;
console.log(isOdd(2))

const isEven = a => a%2==0? true:false;
console.log(isEven(2))

const isSquare = a => {
  return a>=0 && Math.sqrt(a)%1===0
}
console.log(isSquare(-4))


const startsWith = (char, string) => {
  return string.startsWith(char)
};

console.log(startsWith('a', 'sfdgdsg'))

const containsVowels = string =>{
  if(string.includes('a') || string.includes('A')){
    return true
  } else if(string.includes('e')|| string.includes('E')){
    return true
  }else if(string.includes('i')|| string.includes('I')){
    return true
  }else if(string.includes('o')|| string.includes('O')){
    return true
  }else if(string.includes('u')|| string.includes ('U') ){
    return true
  }else {
    return false
  }
}
console.log(containsVowels('dUg'))

const isLowerCase = string => {
  if(string === string.toLowerCase()){
    return true
  } else {
    return false
  }
};

console.log(isLowerCase('abBc'))
module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
