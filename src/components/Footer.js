import React from 'react';

export default function Footer() {
  return (
    <footer className="footer tex-noise">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <a className="brand" href="#top" aria-label="糖果屋 · 返回顶部">
              <span className="brand__badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2 L15 8 L21 9 L16.5 13.5 L18 20 L12 16.5 L6 20 L7.5 13.5 L3 9 L9 8 Z"
                    fill="#FF1493"
                    stroke="#000"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              糖果屋
            </a>
            <p style={{ marginTop: '1rem' }}>
              把创意做成糖果，把代码做成甜点。杭州 · 苏小糖的创意工坊，全年无休（周末除外，周末在吃甜品）。
            </p>
          </div>
          <nav aria-label="页脚导航">
            <h3>逛逛店铺</h3>
            <ul>
              <li><a href="#skills">技能货架</a></li>
              <li><a href="#projects">糖果橱窗</a></li>
              <li><a href="#journey">制糖时间线</a></li>
              <li><a href="#about">店长是谁</a></li>
            </ul>
          </nav>
          <div>
            <h3>找我玩</h3>
            <ul>
              <li><a href="mailto:hello@candyhouse.dev">hello@candyhouse.dev</a></li>
              <li><a href="#contact">联系表单</a></li>
              <li><a href="#top">回到顶部</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 糖果屋 CANDYHOUSE · 保留所有甜度</span>
          <span>NEO-BRUTALISM · 0% 渐变 · 100% 硬阴影</span>
          <a href="#top">↑ 回顶部</a>
        </div>
      </div>
    </footer>
  );
}
