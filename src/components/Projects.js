import React from 'react';
import Reveal from './Reveal';

const ARROW_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <span className="kicker mono">03 / 镇店之宝</span>
            <h2 id="projects-title">糖果橱窗</h2>
          </div>
          <p>每一格都是一块手工糖：设计系统、小游戏、电商前台……欢迎隔着玻璃看，也欢迎敲开玻璃尝。</p>
        </Reveal>

        <div className="bento">
          {/* 大型设计系统 */}
          <Reveal
            as="a"
            className="project b-full tex-noise"
            href="#contact"
            style={{ background: 'var(--pink)', color: '#fff' }}
          >
            <span className="tag">设计系统 · 大型</span>
            <h3>彩虹糖设计系统 Rainbow DS</h3>
            <p style={{ color: '#ffe9f5' }}>
              一套服务于 200+ 页面的组件库：68 个组件、暗色双主题、Figma 与代码 token
              双向同步，让 4 条业务线的 UI 从「各熬各的糖」变成一锅好糖。上线后组件复用率达到 83%。
            </p>
            <span className="more">
              查看案例
              {ARROW_SVG}
            </span>
            <svg className="project__art" width="88" height="88" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2 L15 8 L21 9 L16.5 13.5 L18 20 L12 16.5 L6 20 L7.5 13.5 L3 9 L9 8 Z"
                fill="#FFE135"
                stroke="#000"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </Reveal>

          {/* 泡泡糖音乐播放器 */}
          <Reveal
            as="a"
            className="project tex-noise"
            delay={1}
            href="#contact"
            style={{ background: 'var(--blue-tint)' }}
          >
            <span className="tag tag--blue">Web App</span>
            <h3>泡泡糖音乐播放器</h3>
            <p>基于 Web Audio API 的可视化播放器，频谱会跟着节拍「吹泡泡」。零依赖、离线可用。</p>
            <span className="more">
              查看案例
              {ARROW_SVG}
            </span>
          </Reveal>

          {/* 棉花糖甜品商城 */}
          <Reveal
            as="a"
            className="project tex-noise"
            delay={2}
            href="#contact"
            style={{ background: 'var(--lime-tint)' }}
          >
            <span className="tag tag--lime">电商前台</span>
            <h3>棉花糖甜品商城</h3>
            <p>首屏 LCP 1.2s 的甜品电商，购物车动效让加购转化提升了 18%。</p>
            <span className="more">
              查看案例
              {ARROW_SVG}
            </span>
          </Reveal>

          {/* 跳跳糖大冒险 */}
          <Reveal
            as="a"
            className="project tex-noise"
            delay={3}
            href="#contact"
            style={{ background: 'var(--orange-tint)' }}
          >
            <span className="tag tag--orange">小游戏</span>
            <h3>跳跳糖大冒险</h3>
            <p>Canvas 手写平台跳跃小游戏，50 关卡 + 关卡编辑器，周末项目玩出了 3 万次游玩。</p>
            <span className="more">
              查看案例
              {ARROW_SVG}
            </span>
          </Reveal>

          {/* 统计卡片 */}
          <Reveal
            as="div"
            className="project b-stat tex-dots tex-noise"
            delay={1}
            style={{ background: '#fff' }}
          >
            <span className="num">
              48<span style={{ color: 'var(--pink)' }}>+</span>
            </span>
            <span className="lbl">上线项目 · 持续增加中</span>
          </Reveal>

          {/* 太妃糖博客引擎 */}
          <Reveal
            as="a"
            className="project b-4col tex-noise"
            delay={2}
            href="#contact"
            style={{ background: 'var(--purple-tint)' }}
          >
            <span className="tag tag--purple">开源工具</span>
            <h3>太妃糖博客引擎</h3>
            <p>Markdown 一键变静态博客，GitHub 1.2k Star，被 300+ 位写作者用来发糖。</p>
            <span className="more">
              查看案例
              {ARROW_SVG}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
