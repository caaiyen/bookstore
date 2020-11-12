const Joi = require("joi");

const BookSchema = Joi.object({
    title: Joi.string().required().min(3).max(30),
    author: Joi.string().required().min(3).max(30),
    genre: Joi.string().required().min(3).max(20),
    yearPublished: Joi.string().required(),
    price: Joi.number().required()
});

module.exports = BookSchema;