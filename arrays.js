var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (myArray, element) {
  var newArray = [element, ...myArray];
  return newArray;
  
}
function destructivelyAddElementToBeginningOfArray (secondArray, element) {
  secondArray.unshift(element);
  return secondArray;
  
}
function addElementToEndOfArray (coolArray, icyElement) {
  var icyArray = [...coolArray, icyElement];  
  return icyArray;
  
}
function destructivelyaddElementToEndOfArray (warmArray, hotElement) {
  warmArray.push(hotElement);
  return warmArray;
}
function accessElementInArray (bigArray, indexkun) {
  console.log(bigArray[indexkun]);
  return bigArray[indexkun];
  
}