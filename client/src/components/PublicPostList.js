import React, { useContext } from 'react';
import Posts from './Posts';
import CommentSection from './CommentSection.js';
import { UserContext } from '../context/UserProvider';

function PublicPostList() {
  const { user: {username}, allPosts, downVotePost, upVotePost} = useContext(UserContext);

  const sortedPosts = allPosts.sort((a, b) => {
    const aUpVotes = a.likedUsers.length - a.dislikedUsers.length;
    const bUpVotes = b.likedUsers.length - b.dislikedUsers.length;
    return bUpVotes - aUpVotes;
  });

  const postsWithComments = sortedPosts.map(post => (
    <div key={post._id} className="post-container">
      <div className="post-wrapper">
        <h3>{username}</h3>
        <Posts
          key={post._id}
          title={post.title}
          description={post.description}
          likedUsers={post.likedUsers}
          dislikedUsers={post.dislikedUsers}
          upVotePost={() => upVotePost(post._id)}
          downVotePost={() => downVotePost(post._id)}
          _id={post._id}
          />
      </div>
      {/* Include CommentSection for each post */}
      <div className="comment-section">
        <CommentSection postId={post._id} />
      </div>
    </div>
  ));
  
  return (
    <div className="public-container">
      <h1>Top Posts</h1>
      {postsWithComments}
    </div>
  );
}

export default PublicPostList;
