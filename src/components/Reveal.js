import React from 'react';
import useInView from '../hooks/useInView';

/**
 * Reveal — 滚动揭示包裹组件
 *
 * 用法：
 *   <Reveal>...</Reveal>
 *   <Reveal delay={1}>...</Reveal>          // d1 延迟
 *   <Reveal as="article" className="skill-card">...</Reveal>
 *
 * 元素进入视口后自动添加 in-view 类，触发 CSS 过渡动画。
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  ...rest
}) {
  const [ref, inView] = useInView();
  const delayClass = delay ? ` d${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal${delayClass}${inView ? ' in-view' : ''}${
        className ? ' ' + className : ''
      }`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
