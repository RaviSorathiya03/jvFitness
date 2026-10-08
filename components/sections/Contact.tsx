"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { programs } from "@/data/programs";

export function Contact({ initialGoal = "" }: { initialGoal?: string }) {
  const [messageUrl, setMessageUrl] = useState("");
  const readyLink = useRef<HTMLAnchorElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const phone = String(fields.get("phone") || "").trim();
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    if (!/^\+?[\d\s()-]+$/.test(phone) || phone.replace(/\D/g, "").length < 10 || phone.replace(/\D/g, "").length > 15) {
      phoneInput.setCustomValidity("Please enter a valid phone number with 10 to 15 digits.");
      phoneInput.reportValidity();
      return;
    }
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    if (String(fields.get("name") || "").trim().length < 2) {
      nameInput.setCustomValidity("Please enter your name.");
      nameInput.reportValidity();
      return;
    }
    const goal = String(fields.get("goal"));
    const goalLabel = programs.find((program) => program.id === goal)?.title || goal;
    const message = `Hi JV Fitness! I'd like to arrange a free consultation.\n\nName: ${String(fields.get("name")).trim()}\nPhone: ${phone}\nInterested in: ${goalLabel}\nPreferred time: ${fields.get("time")}\n\nPlease help me choose a suitable day and time. Thank you!`;
    setMessageUrl(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`);
    requestAnimationFrame(() => readyLink.current?.focus());
  }

  return <section id="contact" className="contact-section section-space"><div className="page-container contact-grid">
    <div className="contact-copy"><p className="eyebrow">YOU’VE GOT THIS. WE’VE GOT YOU.</p><h2>Your next chapter<br />starts with <span>hello.</span></h2><p>No pressure. No big promises. Just a friendly conversation about where you are and where you’d like to go.</p><div className="contact-perks"><span><Check size={16} /> Free first consultation</span><span><Check size={16} /> No commitment needed</span></div>
      <div className="contact-options"><a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}><Phone size={20} /><span><small>LET’S TALK</small>{siteConfig.contact.phone}</span><ArrowUpRight size={18} /></a><a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={21} /><span><small>COME SAY HELLO</small>Adipur, Gujarat <span className="contact-address">Near St. Xavier’s School, Ward 3-B</span></span><ArrowUpRight size={18} /></a></div>
    </div>
    <div className="consultation-card">
      <div className="form-heading"><span className="form-icon"><MessageCircle size={23} /></span><span className="free-badge">YOUR FIRST STEP IS FREE</span></div>
      <h3>Let’s make it personal.</h3><p>Tell us a little about yourself to get started.</p>
      <form ref={formRef} onSubmit={handleSubmit} hidden={!!messageUrl}>
        <div className="form-row"><div className="form-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="First and last name" required minLength={2} maxLength={80} onInput={(event) => event.currentTarget.setCustomValidity("")} /></div><div className="form-field"><label htmlFor="contact-phone">Phone number</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your mobile number" required maxLength={22} onInput={(event) => event.currentTarget.setCustomValidity("")} /></div></div>
        <div className="form-field"><label htmlFor="contact-goal">What would you like to work on?</label><select id="contact-goal" name="goal" defaultValue={programs.some((program) => program.id === initialGoal) ? initialGoal : ""} required><option value="" disabled>Choose your goal</option>{programs.map((program) => <option key={program.id} value={program.id}>{program.title}</option>)}<option>Free health checkup</option><option>Not sure — help me choose</option></select></div>
        <div className="form-field"><label htmlFor="contact-time">When’s a good time to connect?</label><select id="contact-time" name="time" defaultValue="" required><option value="" disabled>Choose a preferred time</option><option>Morning (7 AM – 10 AM)</option><option>Midday (10 AM – 12 PM)</option><option>Afternoon (2 PM – 5 PM)</option><option>Evening (5 PM – 8 PM)</option></select></div>
        <button type="submit" className="button button-green">Plan my first visit <ArrowUpRight size={18} /></button><p className="form-note">We’ll prepare a WhatsApp message for you to send. Your coach will confirm a day and time with you.</p>
      </form>
      {messageUrl && <div className="booking-ready" role="status"><span className="ready-icon"><Check size={25} /></span><h4>Your message is ready.</h4><p>Open WhatsApp and send your message to your coach. We’ll arrange your consultation together.</p><a ref={readyLink} className="button button-green" href={messageUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp <ArrowUpRight size={18} /></a><button type="button" className="text-link" onClick={() => { setMessageUrl(""); requestAnimationFrame(() => (formRef.current?.elements.namedItem("name") as HTMLInputElement)?.focus()); }}>Edit my details</button><p className="form-note">Your visit is confirmed only after you hear back from us.</p></div>}
    </div>
  </div></section>;
}
