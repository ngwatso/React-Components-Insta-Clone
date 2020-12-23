import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts } = props;
  console.log("posts", posts)
  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => {
        return <Post post={post} key={post.id} likePost={post.likePost} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;