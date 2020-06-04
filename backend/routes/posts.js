/** API routes for posts. */

const db = require("../db");
const express = require("express");
const router = new express.Router();
const Post = require("../models/Post");

/** GET /   get overview of posts
 *
 * Returns:
 *
 * => [ { id,
 *        title,
 *        description,
 *        votes,
 *      },
 *      ...
 *    ]
 *
 */

router.get("/", async function (req, res, next) {
  try {
    const result = await Post.getPosts();
    return res.json(result.rows);
  } catch (err) {
    return next(err);
  }
});

/** GET /[id]  get detail on post w/comments
 *
 * Returns:
 *
 * =>   { id,
 *        title,
 *        description,
 *        body,
 *        votes,
 *        comments: [ { id, text }, ... ],
 *      }
 */

router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await Post.getPost(id);
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});


/** POST /[id]/vote/(up|down)    Update up/down as post
 *
 * => { votes: updated-vote-count }
 *
 */

router.post("/:id/vote/:direction", async function (req, res, next) {
  try {
    let delta = req.params.direction === "up" ? +1 : -1;
    const id = req.params.id;
    const result = await Post.vote(id, delta);
    return res.json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});


/** POST /     add a new post
 *
 * { title, description, body }  =>  { id, title, description, body, votes }
 *
 */

router.post("/", async function (req, res, next) {
  try {
    const { title, body, description } = req.body;
    const result = await Post.addPost(req.body);
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    return next(err);
  }
});


/** PUT /[id]     update existing post
 *
 * { title, description, body }  =>  { id, title, description, body, votes }
 *
 */

router.put("/:id", async function (req, res, next) {
  try {
    const { title, body, description } = req.body;
    const data = {title, body, description, id: req.params.id};
    const result = await Post.editPost(data);
    return res.json(result.rows[0]);
  } catch (e) {
    return next(e);
  }
});


/** DELETE /[id]     delete post
 *
 * => { message: "deleted" }
 *
 */

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Post.deletePost(req.params.id);
    return res.json(result);
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
