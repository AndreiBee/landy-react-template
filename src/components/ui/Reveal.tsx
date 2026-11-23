import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div<{ $visible: boolean; $delay: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "18px")});
  transition: opacity 0.7s ease ${({ $delay }) => $delay}ms,
    transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) ${({ $delay }) => $delay}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fades content up when it scrolls into view. Content is always in the DOM
 * (search engines see it); only its opacity changes. Without
 * IntersectionObserver, or with reduced motion, it is simply shown.
 */
const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Wrap ref={ref} $visible={visible} $delay={delay} className={className}>
      {children}
    </Wrap>
  );
};

export default Reveal;
