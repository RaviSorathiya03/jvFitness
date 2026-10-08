"use client";

import { useEffect } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function PageMotion() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });

  useEffect(() => {
    if (reduceMotion) return;
    const targets = document.querySelectorAll<HTMLElement>(".section-heading-row, .coach-photo, .about-copy, .process-step, .testimonial-card, .contact-copy, .consultation-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach((target) => {
      if (target.getBoundingClientRect().top > window.innerHeight) {
        target.classList.add("scroll-reveal");
        observer.observe(target);
      }
    });
    return () => {
      observer.disconnect();
      targets.forEach((target) => target.classList.remove("scroll-reveal", "is-revealed"));
    };
  }, [reduceMotion]);

  return <motion.div className="reading-progress" style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }} aria-hidden="true" />;
}
