var addTo = function(number) {
  return function(input) {
    return number + input;
  };
};

var addFive = addTo(5);
var addTwo = addTo(2);

console.log(addFive(3));
console.log(addFive(5));

console.log(addTwo(2));
