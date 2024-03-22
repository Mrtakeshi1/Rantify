import React from 'react';
function Posts(props) {
  const { title, description, likedUsers, dislikedUsers, upVotePost, downVotePost, _id,} = props;

  return (
    <div className="post-container3">
      <h2>{title}</h2>
      <h4>{description}</h4>

      <div className='vote-button-container'>
        <button onClick={() => upVotePost(_id)}>
          Upvote
        </button>
        <p>{likedUsers.length}</p>

        <button onClick={() => downVotePost(_id)}>
          Downvote
        </button>
        <p>{dislikedUsers.length}</p>
      </div>
    </div>
  );
}

export default Posts;
