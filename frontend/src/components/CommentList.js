import React from 'react';
import Comment from "./Comment"
import { Spinner } from 'react-bootstrap';

/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them; this is handled by
 * the parent.
 *
 */


const CommentList = ({ comments, deleteComment }) => {
  if (!comments) return <Spinner animation="border" />
  return (
    comments.map(c => (
      <Comment key={c.id} id={c.id} text={c.text} triggerDelete={deleteComment} />
    )));

}
export default CommentList;
