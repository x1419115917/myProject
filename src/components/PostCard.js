import React from 'react';

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-meta">{post.date} · {post.readTime}</div>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="post-tags">
        {post.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </article>
  );
}
