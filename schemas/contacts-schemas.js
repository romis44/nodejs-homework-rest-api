const Joi = require("joi");

const contactsAddSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({ "any.required": "missing required name fields" }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required name fields" }),
  phone: Joi.string()
    .pattern(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      { name: "numbers" }
    )
    .required()
    .messages({ "any.required": "missing required name fields" }),
});

module.exports = {
  contactsAddSchema,
};