import React from 'react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div>
          <p className="hero__tag mono">
            <span className="dot" aria-hidden="true" />
            2026 年 · 目前可接新项目
          </p>
          <h1 id="hero-title">
            把创意做成<span className="hl-pink">糖果</span>，<br />
            把代码做成<span className="hl-yellow">甜点</span>。
          </h1>
          <p className="hero__desc">
            你好，我是<strong>苏小糖</strong> —— 一名住在杭州的前端工程师 &amp; UI
            设计师。我擅长用饱和的色彩、扎实的工程和一点点固执，做出让人想咬一口的网页体验。
          </p>
          <div className="hero__actions">
            <a className="btn btn--pink" href="#projects">
              看看我的作品
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn btn--ghost" href="#contact">联系我</a>
          </div>
          <div className="hero__meta">
            <div className="item">
              <span className="num">6+</span>
              <span className="lbl">年经验</span>
            </div>
            <div className="item">
              <span className="num">48</span>
              <span className="lbl">上线项目</span>
            </div>
            <div className="item">
              <span className="num">3</span>
              <span className="lbl">设计奖项</span>
            </div>
            <div className="item">
              <span className="num">∞</span>
              <span className="lbl">糖果库存</span>
            </div>
          </div>
        </div>

        <Reveal className="hero__visual">
          <div className="hero__card tex-stripes tex-noise">
            <span className="sticker">FRESH ★ 100%</span>
            {/* 糖果屋插画：纯内联 SVG */}
            <svg
              className="hero__blob"
              viewBox="0 0 420 320"
              role="img"
              aria-label="一座由糖果搭成的小屋插画"
            >
              <rect x="40" y="120" width="340" height="160" rx="10" fill="#FF1493" stroke="#000" strokeWidth="4" />
              <rect x="60" y="180" width="70" height="60" rx="8" fill="#D3F2FF" stroke="#000" strokeWidth="4" />
              <path d="M95 180 v60 M60 212 h70" stroke="#000" strokeWidth="3" />
              <rect x="290" y="180" width="70" height="100" rx="8" fill="#FFE135" stroke="#000" strokeWidth="4" />
              <circle cx="325" cy="232" r="9" fill="#000" />
              <path d="M20 124 L210 24 L400 124 Z" fill="#00BFFF" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
              <rect x="150" y="60" width="34" height="46" rx="6" fill="#9BE818" stroke="#000" strokeWidth="4" />
              <circle cx="167" cy="52" r="16" fill="#FF7A00" stroke="#000" strokeWidth="4" />
              <rect x="196" y="70" width="26" height="38" rx="5" fill="#A24BFF" stroke="#000" strokeWidth="4" />
              <circle cx="90" cy="160" r="6" fill="#FFE135" stroke="#000" strokeWidth="3" />
              <circle cx="240" cy="160" r="6" fill="#A24BFF" stroke="#000" strokeWidth="3" />
              <rect x="120" y="240" width="44" height="26" rx="13" fill="#FF7A00" stroke="#000" strokeWidth="4" />
              <rect x="256" y="120" width="12" height="26" rx="6" fill="#000" />
            </svg>
          </div>
          <svg
            className="hero__deco-star"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 1 L14.5 8 L21.5 9 L16.5 13.8 L18 21 L12 17.2 L6 21 L7.5 13.8 L2.5 9 L9.5 8 Z"
              fill="#FFE135"
              stroke="#000"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="hero__deco-swirl"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M12 3 a9 9 0 1 0 9 9" stroke="#FF1493" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M21 12 a9 9 0 0 0 -4 -7.5" stroke="#00BFFF" strokeWidth="3.4" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3.2" fill="#9BE818" stroke="#000" strokeWidth="2" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
