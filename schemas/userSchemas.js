const Joi = require("joi");

const emailRegexp = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/;

const subscriptionList = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptionList),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = { registerSchema, loginSchema };
