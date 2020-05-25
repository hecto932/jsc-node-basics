process.on('beforeExit', () => {
  console.log('Process is going to end');
});
process.on('exit', function () {
  // Here you are out of eventLoop
  console.log('The process exits');
  setTimeout(() => {
    console.log(`It comes from exceptions`);
  }, 0);
});

process.on('uncaughtException', (err, origin) => {
  console.log(`Ups! Something went wrong`);
  console.error(err);
});
process.on('uncaughtRejection', function () {
  console.log(`Some Promise doesn't have a catch`);
});

functionQueNoExiste();
