var tDate = new Date();
var dateToday =
tDate.getUTCFullYear() + "-" +
    ("0" + (tDate.getUTCMonth()+1)).slice(-2) + "-" +
    ("0" + tDate.getUTCDate()).slice(-2);

var yDate = new Date();
yDate.setDate(yDate.getDate() - 1);

var dateYesterday =
yDate.getUTCFullYear() + "-" +
    ("0" + (yDate.getUTCMonth()+1)).slice(-2) + "-" +
    ("0" + yDate.getUTCDate()).slice(-2);

var bDate = new Date();
bDate.setDate(bDate.getDate() - 2);

var beginDate =
bDate.getUTCFullYear() + "-" +
    ("0" + (bDate.getUTCMonth()+1)).slice(-2) + "-" +
    ("0" + bDate.getUTCDate()).slice(-2);


    module.exports.dateToday = dateToday;
    module.exports.dateYesterday = dateYesterday;
    module.exports.beginDate = beginDate;