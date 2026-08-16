import React from 'react';

export default function Navbar() {
  return (
    <header className="nav tex-noise">
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="糖果屋 · 返回顶部">
          <span className="brand__badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2 L15 8 L21 9 L16.5 13.5 L18 20 L12 16.5 L6 20 L7.5 13.5 L3 9 L9 8 Z"
                fill="#FFE135"
                stroke="#000"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          糖果屋
        </a>
        <nav aria-label="主导航">
          <ul className="nav__links">
            <li><a href="#skills">技能</a></li>
            <li><a href="#projects">项目</a></li>
            <li><a href="#journey">经历</a></li>
            <li><a href="#about">关于</a></li>
            <li>
              <a href="#contact" className="btn btn--pink nav__cta">
                和我聊聊 →
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
