import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider.js"
import PostForm from "./PostForm.js"
import UserPostList from "./UserPostList.js"

function Profile(){

    const {user: {username}, addPost, posts, downVotePost, upVotePost, getUserPosts} = useContext(UserContext)
    useEffect(()=>{
        getUserPosts()
    }, [])
    
    return(
        <div>

            <div className="profile-container">
                <h1>Welcome {username}!</h1>
                <PostForm addPost={addPost}/>
            </div>

            <div className="profile-post-container">
                <h3>Your Posts</h3>
                <UserPostList posts = {posts} downVotePost = {downVotePost} upVotePost = {upVotePost}/> 
            </div>
        </div>
    )
}

export default Profile