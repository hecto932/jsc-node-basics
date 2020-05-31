console.time('all');
let suma = 0;
let suma2 = 0;

console.time('Time for');
for (let i = 0; i < 100000; i++) {
  suma += 1;
}
console.timeEnd('Time for');

console.time('Time for 2');
for (let j = 0; j < 10000000; j++) {
  suma2 = suma2 + j;
}
console.timeEnd('Time for 2');

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async process ends');
      resolve();
    }, 3000);
  });
}

console.time('async func');
asyncFunc().then(() => {
  console.timeEnd('async func');
});

console.timeEnd('all');
