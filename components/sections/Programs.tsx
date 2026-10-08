"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { programs, type Program } from "@/data/programs";

const categories = ["All programs", "Fitness", "Nutrition", "Lifestyle"] as const;
type Category = typeof categories[number];
const presentation: Record<string, { title: string; category: Category; image: string; alt: string; caption: string }> = {
  "fitness-strength": { title: "Find your strong.", category: "Fitness", image: "strength-training", alt: "Athlete preparing for a barbell lift", caption: "FITNESS & STRENGTH" },
  "weight-management": { title: "Small steps. Big change.", category: "Nutrition", image: "wellness", alt: "Woman strength training with dumbbells", caption: "HEALTHY WEIGHT MANAGEMENT" },
  "nutrition-coaching": { title: "Fuel your everyday.", category: "Nutrition", image: "nutrition", alt: "A colorful plate of fresh vegetables and balanced food", caption: "NUTRITION & HABITS" },
  "weight-gain": { title: "Build a stronger you.", category: "Fitness", image: "strength-training", alt: "Strength training with a barbell", caption: "HEALTHY WEIGHT GAIN" },
  "energy-lifestyle": { title: "More energy for life.", category: "Lifestyle", image: "fitness-hero", alt: "Athletes enjoying an active workout", caption: "ENERGY & ACTIVE LIFESTYLE" },
  "digestive-wellness": { title: "Feel good from within.", category: "Lifestyle", image: "nutrition", alt: "A fresh meal with a variety of vegetables", caption: "DIGESTIVE WELLNESS" },
  "skin-selfcare": { title: "Make time for you.", category: "Lifestyle", image: "wellness", alt: "Woman taking time for her fitness routine", caption: "SKIN & SELF-CARE" },
};
const programOrder = ["fitness-strength", "weight-management", "nutrition-coaching", "weight-gain", "energy-lifestyle", "digestive-wellness", "skin-selfcare"];

export function Programs() {
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const [category, setCategory] = useState<Category>("All programs");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Program | null>(null);
  const ordered = programOrder.map((id) => programs.find((program) => program.id === id)!);
  const filtered = ordered.filter((program) => category === "All programs" || presentation[program.id].category === category);
  const visible = category === "All programs" && !showAll ? filtered.slice(0, 3) : filtered;
  return (
    <section id="programs" className="section-space programs-section">
      <div className="page-container">
        <div className="section-heading-row"><div><p className="eyebrow">FIND YOUR WAY TO FEEL GOOD</p><h2>Your goals.<br /><span>Our game plan.</span></h2></div><p className="section-intro">Whether you’re starting fresh or stepping it up, there’s a program that meets you where you are.</p></div>
        <div className="program-filters" role="group" aria-label="Filter programs">
          {categories.map((item) => <button key={item} className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => { setCategory(item); setShowAll(false); }}>{item}</button>)}
        </div>
        <p className="sr-only" aria-live="polite">Showing {visible.length} programs</p>
        <Dialog.Root open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
          <div className="program-grid">
            {visible.map((program, index) => {
              const item = presentation[program.id];
              return <Dialog.Trigger asChild key={program.id}><button className="program-card" onClick={(event) => { lastTrigger.current = event.currentTarget; setSelected(program); }} aria-label={`Explore ${program.title}`}>
                <div className="program-image"><Image src={`/images/${item.image}.jpg`} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 33vw" /><span className="program-number">0{index + 1}</span><span className="program-category">{item.category}</span></div>
                <div className="program-copy"><span className="small-label">{item.caption}</span><h3>{item.title}</h3><p>{program.description}</p><span className="program-link">Explore program <span><ArrowUpRight size={19} /></span></span></div>
              </button></Dialog.Trigger>;
            })}
          </div>
          {selected && <Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="program-dialog" onCloseAutoFocus={(event) => { event.preventDefault(); lastTrigger.current?.focus(); }}>
            <Dialog.Close className="dialog-close" aria-label="Close program details"><X size={22} /></Dialog.Close>
            <span className="eyebrow">A PLAN BUILT AROUND YOU</span><Dialog.Title>{selected.title}</Dialog.Title><Dialog.Description>{selected.description}</Dialog.Description>
            <h3>What’s included</h3><ul>{selected.whatYouGet.map((benefit) => <li key={benefit}><Check size={17} />{benefit}</li>)}</ul>
            <div className="dialog-note">We’ll talk through your goals in a free consultation and help you decide if this is the right fit.</div>
            <Dialog.Close asChild><a className="button button-green" href={`?goal=${selected.id}#contact`}>Let’s talk about your goals <ArrowUpRight size={18} /></a></Dialog.Close>
          </Dialog.Content></Dialog.Portal>}
        </Dialog.Root>
        <div className="programs-bottom"><p>Personal guidance. Regular check-ins. Support along the way.</p>{category === "All programs" && <button className="text-link" onClick={() => setShowAll(!showAll)}>{showAll ? "Show featured programs" : "Explore all 7 programs"}<ArrowRight size={17} /></button>}</div>
      </div>
    </section>
  );
}
