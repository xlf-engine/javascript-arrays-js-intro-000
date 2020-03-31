const chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

const addElementToBeginningOfArray = (array, element) => {
  return [element, ...array];
}

const destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}
