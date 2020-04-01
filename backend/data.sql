DROP DATABASE IF EXISTS "microblog";

CREATE DATABASE "microblog";

\c "microblog"

CREATE TABLE posts (id SERIAL PRIMARY KEY, 
                    title TEXT NOT NULL, 
                    description TEXT NOT NULL,
                    body TEXT, 
                    user_id SERIAL REFERENCES users);
                    
CREATE TABLE comments (id SERIAL PRIMARY KEY, 
                       text TEXT NOT NULL, 
                       user_id SERIAL REFERENCES users,
                       post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE);

CREATE TABLE users (id SERIAL PRIMARY KEY,
                        username text NOT NULL,
                        password text NOT NULL,
                        first_name text,
                        last_name text,
                        email text,
                        photo_url text,
                        is_admin boolean DEFAULT false NOT NULL);

CREATE TABLE votes (post_id REFERENCES posts
                    comment_id REFERENCES comments,
                    user_id REFERENCES users,
                    vote INTEGER 

)                        

INSERT INTO posts (title, description, body) VALUES
    ('First Post', 'Best post ever!', 'Everyone loves posting first. I win!'),
    ('Second Post', 'A very good post!', 'Oh well. Didn''t get to be first.');

INSERT INTO comments (text, post_id) VALUES
    ('This is a really great post.', 1),
    ('I learned so much reading this.', 1);

INSERT INTO users (username, password, first_name, last_name, email, photo_url)