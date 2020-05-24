// global object
console.log(global);

// setInterval
console.log(setInterval);

let i = 0;
let intervalId = setInterval(function () {
  console.log('Hola!');
  if (i === 3) {
    clearInterval(intervalId);
  }
  i++;
}, 1000);

// serImmediate
let immediateId = setImmediate(function () {
  console.log('setImmediate');
  clearImmediate(immediateId);
});

console.log(process);
console.log(__dirname);
console.log(__filename);
