console.log('Algo');
console.error('Error');
console.warn('Warning');

var table = [
  { a: 1, b: 'z' },
  { a: 2, b: 'X' },
];
console.table(table);

console.group('Conversacion:');
console.log('Hola');
console.log('Bla Bla');
console.log('Bla Bla');
console.log('Bla Bla');
console.log('Adios');
console.groupEnd('Conversacion:');

console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
