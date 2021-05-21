const mdy_format = require('./public/javascripts/date_format_functions');

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
		mdy_format: mdy_format
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
		mdy_format: mdy_format
	}
];

module.exports = messages;