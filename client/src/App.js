import './css/App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Profile from './components/Profile';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserProvider';
import ProtectedRoute from './components/ProtectedRoute';
import PublicPostList from './components/PublicPostList';

function App() {
  const { token, logout, allPosts, upKeepPosts, upVotePost, downVotePost } = useContext(UserContext);
  useEffect(() => {
    upKeepPosts();
  }, []); 

  return (
    <div className="App">
      {token && <Navbar logout={logout} />}

      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/profile" /> : <Auth />}
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/post"
          element={
            <ProtectedRoute token={token}>
              <PublicPostList
                allPosts={allPosts}
                upKeepPosts={upKeepPosts}
                upVotePosts={upVotePost}
                downVotePosts={downVotePost}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
