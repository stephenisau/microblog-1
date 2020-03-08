const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");



/**
 * Middleware to use when they must provide a valid token.
 * Add username onto req as a convenience for view functions.
 * Raises unauthorized if incorrect token provided.
 * @param {Object} req 
 * @param {*} res 
 * @param {*} next 
 */
const authRequired = (req, res, next) => {
  try {
    const tokenString = req.body._token || req.query._token;
    let token = jwt.verify(tokenString, SECRET);
    req.username = token.username;
    return next();
  }
  catch (err) {
    let unauthorized = new Error("You must authenticate first.");
    unauthorized.status = 401;  // 401 Unauthorized
    return next(unauthorized);
  }
}

/**
 *  Middleware to use when they must provide a valid token that is an admin token.
 *  Add username onto req as a convenience for view functions.
 *  Raises unauthorized if incorrect token provided.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const adminRequired = (req, res, next) => {
  try {
    const tokenStr = req.body._token;

    let token = jwt.verify(tokenStr, SECRET);
    req.username = token.username;

    if (token.is_admin) {
      return next();
    }

    // throw an error, so we catch it in our catch, below
    throw new Error();
  }
  catch (err) {
    const unauthorized = new Error("You must be an admin to access.");
    unauthorized.status = 401;

    return next(unauthorized);
  }
}



/**
 * Middleware to use when they must provide a valid token & be user matching
 * username provided as route param.
 * Add username onto req as a convenience for view functions.
 * Raises unauthorized if incorrect token provided.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const ensureCorrectUser = (req, res, next) => {
  try {
    const tokenStr = req.body._token || req.query._token;

    let token = jwt.verify(tokenStr, SECRET);
    req.username = token.username;

    if (token.username === req.params.username) {
      return next();
    }

    // throw an error, so we catch it in our catch, below
    throw new Error();
  }

  catch (e) {
    const unauthorized = new Error("You are not authorized.");
    unauthorized.status = 401;

    return next(unauthorized);
  }
}


module.exports = {
  authRequired,
  adminRequired,
  ensureCorrectUser
}