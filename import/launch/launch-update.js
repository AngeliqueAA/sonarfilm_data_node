var cron = require('node-cron');

cron.schedule('00 14 * * *', () => {
  const update = require ('./update');
  console.log(new Date())
});