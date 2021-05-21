const { body, validationResult } = require('express-validator');
const mdy_format = require('../public/javascripts/date_format_functions');
const messages = require('../messages');

exports.message_create_get = function(req, res, next) {
	const context = {
		title: 'Message Form'
	}
	res.render('message_form', context);
};

exports.message_create_post = [
	body('name').trim().isLength({min: 4}).escape().withMessage('Name must have at least 4 characters.')
		.isAlphanumeric().withMessage('Name has non-alphanumeric characters.'),
	body('message', 'Message must not be empty.').trim().isLength({min: 1}).escape(),
	
	(req, res, next) => {
		const errors = validationResult(res);
		
		if(!errors.isEmpty()) {
			const context = {
				title: 'Message Form',
				errors: errors.array()
			}		
			res.render('message_form', context);
			return;
		} else {
			const message = {
				text: req.body.message,			
				user: req.body.name,
				added: new Date(),
				mdy_format: mdy_format
			};
			messages.push(message);
			res.redirect('/');
		}
	}
];