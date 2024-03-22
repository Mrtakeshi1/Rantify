import React, { useContext } from 'react'; // Import useContext
import Posts from "./Posts";
import { UserContext } from '../context/UserProvider';

function UserPostList(props){
    const {posts, upVotePost, downVotePost} = props;
    
    const { deletePost } = useContext(UserContext); // Use useContext to access UserContext

    const sortPosts = (a, b) => b.likedUsers.length - a.likedUsers.length;

    const sortedPosts = [...posts].sort(sortPosts);

    const handleDelete = postId => {
        deletePost(postId);
    };

    const postList = sortedPosts.map(post => (
        <div key={post._id} className="post-container">
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
            {/* Add delete button */}
            <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
    ));

    return(
        <div>
            {postList}
        </div>
    );
}

export default UserPostList;
