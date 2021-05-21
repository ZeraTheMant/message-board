const { DateTime } = require("luxon");

function mdy_format(date_arg) { //ex May 21, 2021
	return DateTime.fromJSDate(date_arg).toFormat('MMMM dd, y t');
}

module.exports = mdy_format;