const sharp = require('sharp');

sharp('original.png')
  .resize(80, 80)
  .toFile('resize.png')
  .then((data) => console.log(`BIEN => `, data))
  .catch((err) => console.error(`ERRO => `, err.message));
