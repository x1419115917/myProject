import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">© {new Date().getFullYear()} 我的个人博客 · 版权所有</div>
    </footer>
  )
}
