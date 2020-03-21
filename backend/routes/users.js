/**
 * Routes for our users
 */

const express = require("express");
const router = express.Router();

import { ensureCorrectUser, authRequired } from "../middleware/authorization";

const User = require("../models/User");


/**
 * GET / get User
 * 
 * 
 */




 /**
  * 
  * POST / Register User
  * 
  * Returns userToken
  * 
  */

router.post("/register", async function(req, res, next) {
  try {
    delete req.body._token;
    const validation = validate(req.body, userNewSchema);

    if (!validation.valid) {
      return next({
        status: 400,
        message: validation.errors.map(e => e.stack)
      });
    }

    const newUser = await User.register(req.body);
    const token = createToken(newUser);
    return res.status(201).json({ token });
  }
  catch (e) {
    return next(e);
  }
});