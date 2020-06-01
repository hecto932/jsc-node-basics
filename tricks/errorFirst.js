function asyncFunction(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  }, 1000);
}

asyncFunction(function (err, data) {
  if (err) {
    // return false;
    // return console.error(err.message);
    // console.error(err);
    throw err;
  }

  console.log(data);
});
