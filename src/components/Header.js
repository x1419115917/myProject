import React from 'react';
import '../blog.css';

export default function Header() {
  return (
    <header className="blog-header">
      <div className="container">
        <h1 className="site-title">我的个人博客</h1>
        <nav className="site-nav">
          <a href="#home">首页</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
      </div>
    </header>
  );
}
