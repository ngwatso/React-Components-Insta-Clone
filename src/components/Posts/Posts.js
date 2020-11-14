import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post) => {
        return <Post userName={post.userName} thumbnailUrl={post.thumbnailUrl} src={post.imgUrl} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
/* Map through the posts array returning a Post component at each iteration */