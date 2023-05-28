const jwt = require("jsonwebtoken");

const { HttpError } = require("../helpers");

const { User } = require("../models/user");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(new HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      return next(new HttpError(401));
    }
    req.user = user;
    next();
  } catch (err) {
    next(new HttpError(401));
    console.log(err);
  }
};

module.exports = authenticate;
