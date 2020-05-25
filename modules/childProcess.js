const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    return console.error(err.message);
  }

  console.log(stdout);
});

exec('node modules/console.js', (err, stdout, stderr) => {
  if (err) {
    return console.error(err.message);
  }

  console.log(stdout);
});

let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function (data) {
  console.log(process.killed);
  console.log(data.toString());
});

process.on('exit', function () {
  console.log('Process ends');
  console.log(process.killed);
});
