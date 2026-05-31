import React from 'react';
import '../blog.css';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="shape s1" />
        <div className="shape s2" />
        <div className="shape s3" />
        <div className="shape s4" />
      </div>
      <div className="hero-content container">
        <h1 className="hero-title">探索 · 创新 · 分享</h1>
        <p className="hero-sub">欢迎来到我的绚丽动画主页 — 在这里我分享前端、性能与工程实践。</p>
        <div className="hero-cta">
          <a className="btn primary" href="#posts">查看文章</a>
          <a className="btn ghost" href="#about">关于我</a>
        </div>
      </div>
    </section>
  );
}
