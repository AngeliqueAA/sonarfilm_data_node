const date = require('./date');

var config = {};

config.dateOfToday = date.dateToday;
config.dateOfYesterday = date.dateYesterday;
config.beginDate = date.beginDate;

module.exports = config;