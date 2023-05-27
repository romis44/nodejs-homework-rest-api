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

// router.use(authenticate);

router.get("/", authenticate, getAllContacts);

router.get("/:contactId", authenticate, getContactsById);

router.post("/", authenticate, validateBody(contactsAddSchema), addContact);

router.delete("/:contactId", authenticate, removeContact);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

router.put(
  "/:contactId",
  authenticate,
  validateBody(contactsAddSchema),
  updateContact
);

module.exports = { contactsRouter: router };
