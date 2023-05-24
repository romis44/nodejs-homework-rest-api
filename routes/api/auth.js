const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../decorators");

const { registerSchema } = require("../../schemas/userSchemas");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

module.exports = router;
