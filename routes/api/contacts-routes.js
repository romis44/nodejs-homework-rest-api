const express = require("express");

const {
  addContact,
  getAllContacts,
  getContactsById,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts-conrtoller");

const {
  contactsAddSchema,
  updateFavoriteSchema,
} = require("../../schemas/contacts-schemas");

const { validateBody } = require("../../decorators");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.use(authenticate);

router.get("/", getAllContacts);

router.get("/:contactId", getContactsById);

router.post("/", validateBody(contactsAddSchema), addContact);

router.delete("/:contactId", removeContact);

router.patch(
  "/:contactId/favorite",

  validateBody(updateFavoriteSchema),
  updateStatusContact
);

router.put(
  "/:contactId",

  validateBody(contactsAddSchema),
  updateContact
);

module.exports = { contactsRouter: router };
