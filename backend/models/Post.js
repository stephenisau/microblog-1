const db = require('../db');

class Post {

  /**
   * Gets all da posts!
   * 
   * Returns: [{ id, title, description, votes}, ...]
   */
  static async getPosts() {
    try {
      const posts = await db.query(
        `SELECT p.id,
                p.title,
                p.description,
                p.votes
        FROM posts p 
        ORDER BY p.id`
      );
      return posts;
    } catch (err) {
      throw err;
    };
  }


  static async getPost(id) {
    try {
      const post = await db.query(
        `SELECT p.id,
                p.title,
                p.description,
                p.body,
                p.votes,
            CASE WHEN COUNT(c.id) = 0 THEN JSON '[]' ELSE JSON_AGG(
                JSON_BUILD_OBJECT('id', c.id, 'text', c.text)
            ) END AS comments
        FROM posts p 
            LEFT JOIN comments c ON c.post_id = p.id
        WHERE p.id = $1

        GROUP BY p.id    
        ORDER BY p.id `, [data.id]
      )
      return post;
    } catch (err) {
      throw err;
    }
  }


  static async vote(id, delta) {
    try {
      const updatedPost = await db.query(
        `UPDATE posts SET votes=votes + $1 WHERE id = $2 RETURNING votes`,
        [delta, id]
      );
      return updatedPost
    } catch (err) {
      return next(err);
    };
  }


  static async addPost(data) {
    try {
      const post = await db.query(
        `INSERT INTO posts (title, description, body) 
          VALUES ($1, $2, $3) 
          RETURNING id, title, description, body, votes`,
        [data.title, data.description, data.body]);
      if (post) return post;
    } catch (err) {
      return next(err);
    };
  }

  static async editPost(data) {
    try {
      const editedPost = await db.query(
        `UPDATE posts SET title=$1, description=$2, body=$3
          WHERE id=$4
          RETURNING id, title, description, body, votes
        `,
        [data.title, data.description, data.body, data.id]
      );
      return editedPost;
    } catch (err) {
      return next(err);
    };
  }

  static async deletePost(id) {
    try {
      await db.query(`DELETE FROM posts WHERE id=$1`, [id]);
      return { message: `Deleted post ${id}` };
    } catch (err) {
      return next(err);
    };
  }



}


module.exports = Post;