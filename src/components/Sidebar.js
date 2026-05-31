import React from 'react';

export default function Sidebar({ recent }) {
  return (
    <aside className="sidebar">
      <section className="about">
        <h3>关于我</h3>
        <p>前端工程师，爱好写作与分享技术与生活。</p>
      </section>
      <section className="recent">
        <h3>近期文章</h3>
        <ul>
          {recent.map((r) => (
            <li key={r.id}>{r.title}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
