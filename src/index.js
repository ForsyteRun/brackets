const OPEN_BRACKETS = ['(', '{', '[', '|', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const BRACKETS_PAIR = {
  [')']: '(',
  ['}']: '{',
  [']']: '[',
}
module.exports = function check(str, bracketsConfig) {
  let stack = []
  let arr = []
  // let strSort = str.split('').sort()
  for (let index = 0; index < str.length; index++) {
    let currentSymbol = str[index]
    ////////////////////////////////
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol)
    } else {
      if(stack.length === 0){
        return false
      }
      // debugger      
      // let topElement = stack[stack.length-1]
      let topElement = stack.find(el => el === BRACKETS_PAIR[currentSymbol])
      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop()
      } 
    }
  }
  stack.sort()
  let skip = false;
  let result = stack.reduce(
    (acc, item, index) => {
      if (!skip){
        if (item == stack[index + 1]) {
          skip = true; 
        } else {
          acc.push(item);
        }
      } else {
        skip = false;
      }
      return acc;
    }, []);
return result.length === 0
}

