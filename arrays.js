var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (myArray, element) {
  newArray = [element, ...myArray];
  return newArray;
  
}
function destructivelyAddElementToBeginningOfArray (newArray, element) {
newArray.unshift(element);
return newArray;
  
}