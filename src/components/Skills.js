import React from 'react';
import Reveal from './Reveal';

const SKILLS = [
  {
    title: 'HTML / CSS',
    level: 95,
    color: 'var(--pink)',
    bg: 'var(--pink-tint)',
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 3 h16 v18 H4 Z" stroke="#FF1493" strokeWidth="2.4" />
        <path d="M8 8 h8 M8 12 h8 M8 16 h5" stroke="#000" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'JavaScript / TS',
    level: 90,
    color: 'var(--blue)',
    bg: 'var(--blue-tint)',
    delay: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M8 4 L3 12 L8 20 M16 4 L21 12 L16 20"
          stroke="#00BFFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'React / Vue',
    level: 88,
    color: 'var(--yellow)',
    bg: 'var(--yellow-tint)',
    delay: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.6" fill="#000" />
        <ellipse cx="12" cy="6.2" rx="6.5" ry="2.8" stroke="#C9B500" strokeWidth="2" fill="none" />
        <ellipse cx="12" cy="6.2" rx="6.5" ry="2.8" stroke="#000" strokeWidth="2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="6.2" rx="6.5" ry="2.8" stroke="#000" strokeWidth="2" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: 'UI / 视觉设计',
    level: 85,
    color: 'var(--lime)',
    bg: 'var(--lime-tint)',
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3 L4 8 v8 l8 5 8 -5 V8 Z" stroke="#5A8A00" strokeWidth="2.4" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill="#9BE818" stroke="#000" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: '动效 / 微交互',
    level: 82,
    color: 'var(--orange)',
    bg: 'var(--orange-tint)',
    delay: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 17 c4 3 12 3 16 0 M7 13 c3 2 7 2 10 0 M10 9 c1.4 1 2.6 1 4 0"
          stroke="#FF7A00"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Node / 工程化',
    level: 76,
    color: 'var(--purple)',
    bg: 'var(--purple-tint)',
    delay: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="#A24BFF" strokeWidth="2.4" />
        <path
          d="M7 9 l3 3 -3 3 M13 15 h4"
          stroke="#000"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function SkillCard({ skill }) {
  return (
    <Reveal
      as="article"
      className="skill-card tex-noise"
      delay={skill.delay}
      style={{ '--v': `${skill.level}%`, background: skill.bg }}
    >
      <div className="icon" aria-hidden="true">
        {skill.icon}
      </div>
      <h3>{skill.title}</h3>
      <span className="lv">LEVEL {skill.level}</span>
      <div
        className="bar"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${skill.title} 熟练度 ${skill.level}%`}
      >
        <div className="bar__fill" style={{ background: skill.color }} />
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="kicker mono">02 / 技能货架</span>
            <h2 id="skills-title">糖果配方表</h2>
          </div>
          <p>每一颗糖都有配方。下面是我最顺手的几味原料，进度条会随滚动现熬现装。</p>
        </Reveal>

        <div className="skills__grid">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
