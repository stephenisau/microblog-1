const db = require('../db');
const bcrypt = require("bcrypt");

const BCRYPT_WORK_FACTOR = 12;

/**
 * User class
 */


class User {

  /**
   * @param {object} data 
   * returns {object}
   */
  static async register(data) {
    const duplicateCheck = await db.query(
      `SELECT username 
            FROM users 
            WHERE username = $1`,
      [data.username]
    );

    /**
     * If user exists, we throw an error
     */
    if (duplicateCheck.rows[0]) {
      const err = new Error(
        `There already exists a user with username '${data.username}`);
      err.status = 409;
      throw err;
    }
    const hashedPassword = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
    const result = await db.query(
      `INSERT INTO users 
          (username, password, first_name, last_name, email, photo_url) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING username, password, first_name, last_name, email, photo_url`,
      [
        data.username,
        data.email,
        hashedPassword,
        data.first_name,
        data.last_name,
        data.photo_url
      ]);

    return result.rows[0];
  }

  /** Given a username, return data about user. */

  static async findOne(username) {
    const userRes = await db.query(
      `SELECT username, first_name, last_name, email, photo_url 
              FROM users 
              WHERE username = $1`,
      [username]);

    const user = userRes.rows[0];

    if (!user) {
      const error = new Error(`There exists no user '${username}'`);
      error.status = 404;   // 404 NOT FOUND
      throw error;
    }

    const userJobsRes = await db.query(
      `SELECT j.id, j.title, j.company_handle, a.state 
             FROM applications AS a
               JOIN jobs AS j ON j.id = a.job_id
             WHERE a.username = $1`,
      [username]);

    user.jobs = userJobsRes.rows;
    return user;
  }

  /** Update user data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Return data for changed user.
   *
   */

  static async update(username, data) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
    }

    let { query, values } = partialUpdate(
      "users",
      data,
      "username",
      username
    );

    const result = await db.query(query, values);
    const user = result.rows[0];

    if (!user) {
      let notFound = new Error(`There exists no user '${username}`);
      notFound.status = 404;
      throw notFound;
    }

    delete user.password;
    delete user.is_admin;

    return result.rows[0];
  }

  /** Delete given user from database; returns undefined. */

  static async remove(username) {
    let result = await db.query(
      `DELETE FROM users 
                  WHERE username = $1
                  RETURNING username`,
      [username]);

    if (result.rows.length === 0) {
      let notFound = new Error(`There exists no user '${username}'`);
      notFound.status = 404;
      throw notFound;
    }
  }
}


module.exports = User;