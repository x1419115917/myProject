import { useEffect, useRef, useState } from 'react';

/**
 * useInView — 基于 IntersectionObserver 的滚动进入视口检测
 *
 * - 元素进入视口后返回 inView=true，且只触发一次（unobserve）
 * - 尊重 prefers-reduced-motion：减弱动效时直接返回 true
 * - 不支持 IntersectionObserver 时降级为直接显示
 *
 * @param {object}  options              传给 IntersectionObserver 的选项
 * @param {number}  options.threshold    触发阈值，默认 0.2
 * @param {string}  options.rootMargin   根边距，默认 '0px 0px -40px 0px'
 * @returns {[React.RefObject, boolean]} [ref, inView]
 */
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 尊重减弱动效偏好
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // 只播一次
          }
        });
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
