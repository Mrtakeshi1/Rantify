import React, { useState } from 'react';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments(prevComments => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  const handleDeleteComment = index => {
    setComments(prevComments =>
      prevComments.filter((_, i) => i !== index)
    );
  };

  const commentList = comments.map((comment, index) => (
    <div key={index} className="comment">
      <p className='comment-box'>{comment}</p>
      <button className="comment-delete" onClick={() => handleDeleteComment(index)}>Delete</button>
    </div>
  ));

  return (
    <div className="post-container2 public-container">
      <div className="comment-list">{commentList}</div>
      <h3>Comments</h3>
      <input
        type="text"
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleAddComment}>Post Comment</button>
    </div>
  );
}

export default CommentSection;
