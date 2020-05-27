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
    } catch(err) {
      throw err;
    }
  }
}


module.exports = Post;