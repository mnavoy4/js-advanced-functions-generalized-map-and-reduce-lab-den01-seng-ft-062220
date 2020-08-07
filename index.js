// Add your functions here
function map(array, fn){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    let element = array[i];
    newArray.push(fn(element))
  }
  return newArray
}

function reduce(array, fn, startingPoint){
  let r = (!!startingPoint) ? startingPoint : array[0];
  let i = (!!startingPoint) ? 0 : 1;
  for (; i < array.length; i++){
    let element = array[i];
    r = fn(element, r);
  }
  return r;
}