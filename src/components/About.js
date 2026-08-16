import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <Reveal className="about__photo tex-dots tex-noise">
          <span className="pin">店长亲笔</span>
          <svg viewBox="0 0 240 260" role="img" aria-label="苏小糖的头像插画：戴眼镜的卡通人物">
            <rect x="60" y="180" width="120" height="70" rx="14" fill="#00BFFF" stroke="#000" strokeWidth="4" />
            <circle cx="120" cy="105" r="62" fill="#FFE4CC" stroke="#000" strokeWidth="4" />
            <path
              d="M58 95 Q120 18 182 95 Q168 62 120 58 Q72 62 58 95 Z"
              fill="#FF1493"
              stroke="#000"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle cx="98" cy="105" r="13" fill="#fff" stroke="#000" strokeWidth="3.5" />
            <circle cx="142" cy="105" r="13" fill="#fff" stroke="#000" strokeWidth="3.5" />
            <path d="M111 105 h18" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="98" cy="105" r="4" fill="#000" />
            <circle cx="142" cy="105" r="4" fill="#000" />
            <path d="M104 142 q16 12 32 0" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="76" cy="126" r="7" fill="#FF1493" stroke="#000" strokeWidth="3" opacity=".85" />
            <circle cx="164" cy="126" r="7" fill="#FF1493" stroke="#000" strokeWidth="3" opacity=".85" />
            <rect x="86" y="196" width="30" height="14" rx="7" fill="#9BE818" stroke="#000" strokeWidth="3" />
            <rect x="126" y="196" width="30" height="14" rx="7" fill="#FFE135" stroke="#000" strokeWidth="3" />
          </svg>
        </Reveal>

        <Reveal className="about__body tex-noise" delay={1}>
          <span
            className="kicker mono"
            style={{
              display: 'inline-block',
              background: 'var(--ink)',
              color: 'var(--yellow)',
              padding: '.35rem .8rem',
              borderRadius: '6px',
              marginBottom: '.7rem',
            }}
          >
            05 / 店长是谁
          </span>
          <h2 id="about-title">关于苏小糖</h2>
          <p>
            一个相信
            <strong>「好的界面应该像好的糖果：第一眼想拿，拿到手惊喜，吃完还想念」</strong>
            的人。
          </p>
          <p>
            白天写 React 和设计系统，晚上给开源项目提 PR、画插画、研究 CSS
            的新花样。信奉无障碍优先、性能优先，以及——阴影必须是纯黑硬边的。
          </p>
          <p>
            不写代码的时候，我在杭州的街头找好吃的甜品店，或者在家里的窗台上种薄荷（做莫吉托用的，配糖果正好）。
          </p>
          <div className="about__facts">
            <div className="fact" style={{ background: 'var(--pink-tint)' }}>
              <span className="n">6+</span>
              <span className="l">年写码</span>
            </div>
            <div className="fact" style={{ background: 'var(--yellow-tint)' }}>
              <span className="n">48</span>
              <span className="l">项目上线</span>
            </div>
            <div className="fact" style={{ background: 'var(--blue-tint)' }}>
              <span className="n">3</span>
              <span className="l">设计奖项</span>
            </div>
            <div className="fact" style={{ background: 'var(--lime-tint)' }}>
              <span className="n">1.2k</span>
              <span className="l">GitHub Star</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
