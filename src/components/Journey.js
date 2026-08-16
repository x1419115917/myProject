import React from 'react';
import Reveal from './Reveal';

const TIMELINE = [
  {
    year: '2024 — 至今',
    title: '高级前端工程师 · 糖果实验室',
    org: '负责设计系统与前端架构，带 5 人小分队，把组件复用率从 41% 熬到 83%。',
    orgColor: 'var(--pink)',
    bg: 'var(--pink-tint)',
    delay: 0,
  },
  {
    year: '2022 — 2024',
    title: '前端工程师 · 云朵科技',
    org: '主导 B 端控制台重构，首屏性能提升 60%，顺手拿了公司年度最佳项目奖。',
    orgColor: '#0091c7',
    bg: 'var(--blue-tint)',
    delay: 1,
  },
  {
    year: '2020 — 2022',
    title: '自由职业 · 独立开发者',
    org: '两年间为 20+ 家小店与独立音乐人做官网，学会了报价、砍需求与凌晨三点的月亮。',
    orgColor: '#a08800',
    bg: 'var(--yellow-tint)',
    delay: 2,
  },
  {
    year: '2018 — 2020',
    title: '初级前端 · 甜甜圈工作室',
    org: '第一份工作：切图、改 bug、给 IE11 兼容性掉头发，也是在这里第一次爱上 CSS。',
    orgColor: '#5a8a00',
    bg: 'var(--lime-tint)',
    delay: 3,
  },
];

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="kicker mono">04 / 熬糖车间</span>
            <h2 id="journey-title">制糖时间线</h2>
          </div>
          <p>从学徒到主厨，一炉一炉慢慢熬。</p>
        </Reveal>

        <ol className="timeline" style={{ listStyle: 'none' }}>
          {TIMELINE.map((item) => (
            <li key={item.year}>
              <Reveal as="div" className="tl-item" delay={item.delay}>
                <div className="tl-card tex-noise" style={{ background: item.bg }}>
                  <span className="yr">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p className="org" style={{ color: item.orgColor }}>
                    {item.org}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
