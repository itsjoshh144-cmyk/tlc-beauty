"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const Tag = m[as];
  return (
    <LazyMotion features={domAnimation} strict>
      <Tag
        className={className}
        data-reveal=""
        initial={reduce ? false : { opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Tag>
    </LazyMotion>
  );
}
