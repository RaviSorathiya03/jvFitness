import Image from "next/image";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-space about-section">
      <div className="page-container about-grid">
        <div className="coach-photo"><Image src="/images/coach-jyoti.jpg" alt="Jagruti Vaniya, your wellness coach at JV Fitness" fill sizes="(max-width: 700px) 100vw, 45vw" /><div className="coach-caption"><span>MEET YOUR COACH</span><strong>Jagruti Vaniya</strong><p>Your partner in healthier living</p><span className="coach-star"><Sparkles size={24} /></span></div></div>
        <div className="about-copy"><p className="eyebrow">A LITTLE GUIDANCE. A LOT OF HEART.</p><h2>More than a club.<br /><span>Your corner.</span></h2><p>You don’t need to have it all figured out. You just need a place to start, and someone who’s in it with you.</p><p>At JV Fitness, Jagruti helps you turn your goals into simple, everyday habits. Together, we’ll find what works for your body, your routine, and your life.</p>
          <ul className="check-list"><li><Check />Personal coaching, built around you</li><li><Check />Practical nutrition for real life</li><li><Check />Encouragement at every step</li></ul>
          <a href="#contact" className="text-link">Meet your coach <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
