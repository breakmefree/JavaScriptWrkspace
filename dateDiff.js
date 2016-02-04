// Write a JavaScript function that takes 3 arguments (year, month, and day) and calculates how many days between that day and today

//		If the days are more than 30, return Y months, Z days
//		If the months are more than 12, return X years, Y months, Z days


var dateDiff = function(year, month, day) {
  var date = new Date(year, month, day);
  var now = new Date();
  now = new Date(2015, 04, 02);
  date.setHours(now.getHours());
  date.setMinutes(now.getMinutes());
  date.setSeconds(now.getSeconds());
  date.setMilliseconds(now.getMilliseconds());

  var diffTimes = date.getTime() - now.getTime();
  diffTimes = (diffTimes > 0 ? diffTimes : diffTimes * -1);
  var dMills = 1000 * 60 * 60 * 24;
  var days = Math.ceil(diffTimes / dMills);
  var year = 0,
    month = 0;

  if (days >= 30) {
    month = Math.floor(days / 30);
    days %= 30;
  }

  if (month >= 12) {
    year = Math.floor(month / 30);
    month %= 12;
  }
  var str = "";
  if (year > 0) {
    str += year + (year == 1 ? " year, " : " years, ");
  }

  if (month > 0) {
    str += month + (month == 1 ? " month, " : " months, ");
  }

  if (days > 0) {
    str += days + (days === 1 ? " day" : " days");
  }
  if (str == "") {
    str = "0 day";
  }
  return str;
}
console.log(dateDiff(2017, 11, 17));