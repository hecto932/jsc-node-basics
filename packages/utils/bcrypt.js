const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function (err, hash) {
  if (err) {
    return console.error(err.message);
  }

  console.log(hash);

  bcrypt.compare(password, hash, (err, result) => {
    if (err) {
      return console.error(err.message);
    }

    console.log(result);
  });
});
