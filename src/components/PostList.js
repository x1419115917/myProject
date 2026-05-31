import React from 'react';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  return (
    <main className="posts">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </main>
  );
}
