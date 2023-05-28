const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../decorators");

const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
} = require("../../schemas/userSchemas");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch(
  "/",
  authenticate,
  validateBody(updateSubscriptionSchema),
  ctrl.updateSubscription
);

module.exports = { authRouter: router };
