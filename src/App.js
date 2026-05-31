import React from 'react';
import './App.css';
import './blog.css';
import Header from './components/Header';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomeHero from './components/HomeHero';

function App() {
  const posts = [
    {
      id: 1,
      title: '欢迎来到我的博客',
      date: '2026-05-31',
      readTime: '5 分钟',
      excerpt: '这是一个示例文章，用来展示博客界面的样式与布局。',
      tags: ['入门','分享']
    },
    {
      id: 2,
      title: '前端进阶路线',
      date: '2026-04-20',
      readTime: '8 分钟',
      excerpt: '本文总结了成为高级前端工程师的学习路径与实践建议。',
      tags: ['前端','学习']
    },
    {
      id: 3,
      title: '性能优化最佳实践',
      date: '2026-03-10',
      readTime: '6 分钟',
      excerpt: '介绍若干常见性能问题与解决方案，帮助你的应用跑得更快。',
      tags: ['性能','优化']
    }
  ];

  const recent = posts.slice(0,3);

  return (
    <div className="App">
      <HomeHero />
      <Header />
      <div id="posts" className="container layout">
        <PostList posts={posts} />
        <Sidebar recent={recent} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
