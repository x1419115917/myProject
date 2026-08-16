import React from 'react';

export default function Contact() {
  return (
    <section className="cta tex-stripes tex-noise" id="contact" aria-labelledby="cta-title">
      <div className="wrap cta__inner">
        <svg
          className="cta__deco-l"
          width="72"
          height="72"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" fill="#FF1493" stroke="#000" strokeWidth="2" />
          <path
            d="M12 3 v18 M3 12 h18 M5.6 5.6 l12.8 12.8 M18.4 5.6 L5.6 18.4"
            stroke="#000"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="3.4" fill="#FFE135" stroke="#000" strokeWidth="2" />
        </svg>
        <svg
          className="cta__deco-r"
          width="72"
          height="72"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 2 L14.5 8 L21.5 9 L16.5 13.8 L18 21 L12 17.2 L6 21 L7.5 13.8 L2.5 9 L9.5 8 Z"
            fill="#00BFFF"
            stroke="#000"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="tag"
          style={{
            display: 'inline-block',
            marginBottom: '1rem',
            background: 'var(--ink)',
            color: 'var(--yellow)',
          }}
        >
          06 / 甜品台开张
        </span>
        <h2 id="cta-title">来一颗定制的糖？</h2>
        <p>
          不管是官网、活动页、设计系统还是奇怪的小玩具——把你的想法丢过来，我们一起把它熬成糖。
        </p>
        <div className="cta__actions">
          <a className="btn btn--pink" href="mailto:hello@candyhouse.dev">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2.4" />
              <path
                d="m4 7 8 6 8-6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            hello@candyhouse.dev
          </a>
          <a className="btn btn--ghost" href="tel:+8613800000000">
            预约 15 分钟通话
          </a>
        </div>
        <p className="mono" style={{ marginTop: '2rem', fontSize: '.72rem', letterSpacing: '.1em' }}>
          通常 24 小时内回复 · 不加糖也回复
        </p>
      </div>
    </section>
  );
}
