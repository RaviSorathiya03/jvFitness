import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, HeartPulse, Leaf, Users, Dumbbell } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="page-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> YOUR FRESH START, RIGHT HERE IN ADIPUR</div>
            <h1>Feel better.<br />Get stronger.<br /><span>Live more.</span><span className="headline-period" aria-hidden="true">✳</span></h1>
            <p className="hero-description">Build a body you feel good in. Personal coaching, better nutrition, and a community that’s with you every step.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-green">Start your journey <ArrowUpRight size={19} /></a>
              <a href="#programs" className="text-link">Explore programs <ArrowDown size={17} /></a>
            </div>
            <div className="hero-reassurance"><Check size={14} /> Free first consultation <span /> Made for your lifestyle</div>
            <div className="community-proof">
              <div className="member-initials" aria-hidden="true"><span>PS</span><span>RM</span><span>AK</span><span>+</span></div>
              <p><strong>Good energy. Great company.</strong><br />Join a community that moves you forward.</p>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/images/fitness-hero.jpg" alt="Two athletes building strength with battle ropes" fill priority sizes="(max-width: 700px) 100vw, (max-width: 960px) 70vw, 50vw" className="hero-image" />
            <div className="image-shade" />
            <span className="image-label"><span className="status-dot" /> STRONGER, TOGETHER.</span>
            <div className="hero-stamp" aria-hidden="true"><svg viewBox="0 0 100 100"><defs><path id="stamp-circle" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" /></defs><text><textPath href="#stamp-circle">YOUR PACE · YOUR PROGRESS · </textPath></text></svg><ArrowUpRight size={32} /></div><div className="hero-image-copy"><span>ONE DAY. OR DAY ONE.</span><p>Make yourself<br />a priority.</p><a href="#about" aria-label="Discover the JV Fitness club" className="circle-link"><ArrowUpRight size={25} /></a></div>
            <div className="personal-plan"><span className="plan-icon"><HeartPulse size={22} /></span><div><strong>Your goals. Your pace.</strong><span>A plan that’s personal.</span></div><span className="plan-check"><Check size={16} /></span></div>
          </div>
        </div>
        <div className="benefit-strip">
          <div><Dumbbell /><span>Training that fits you</span></div>
          <div><Leaf /><span>Nutrition made simple</span></div>
          <div><Users /><span>A community that cares</span></div>
          <div><HeartPulse /><span>Progress that feels good</span></div>
        </div>
      </div>
    </section>
  );
}
