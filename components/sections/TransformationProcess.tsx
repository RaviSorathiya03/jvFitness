import { ArrowUpRight } from "lucide-react";
const steps = [
  { number: "01", title: "Let’s get to know you.", description: "Start with a free consultation. Tell us about your goals, your routine, and what’s been getting in the way." },
  { number: "02", title: "Find your rhythm.", description: "Get a personal plan for movement, meals, and everyday habits that fits comfortably into your life." },
  { number: "03", title: "Grow, one day at a time.", description: "Stay supported with weekly check-ins, practical adjustments, and a coach who celebrates your progress." },
];
export function TransformationProcess() {
  return <section id="process" className="process-section section-space"><div className="page-container">
    <div className="section-heading-row"><div><p className="eyebrow">SIMPLE STEPS. LASTING HABITS.</p><h2>A fresh start.<br /><span>A little support.</span></h2></div><a href="#contact" className="button button-lime">Take the first step <ArrowUpRight size={18} /></a></div>
    <div className="process-grid">{steps.map((step) => <div className="process-step" key={step.number}><div className="step-line"><span>{step.number}</span><ArrowUpRight size={22} /></div><h3>{step.title}</h3><p>{step.description}</p></div>)}</div>
  </div></section>;
}
