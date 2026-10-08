import { Plus, ArrowUpRight } from "lucide-react";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";
export function FAQ() {
  const selected = [faqs[5], faqs[4], faqs[7], faqs[9], faqs[6]];
  return <section id="faq" className="faq-section section-space"><div className="page-container faq-grid"><div><p className="eyebrow">GOOD QUESTIONS. HONEST ANSWERS.</p><h2>A few things<br /><span>you might wonder.</span></h2><p>Still have something on your mind?</p><a className="text-link" href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi! I have a question about JV Fitness.")}`} target="_blank" rel="noopener noreferrer">Let’s chat <ArrowUpRight size={18} /></a></div><div className="faq-list">{selected.map((faq) => <details key={faq.id} name="fitness-faq"><summary>{faq.question}<Plus size={19} /></summary><p>{faq.answer}</p></details>)}</div></div></section>;
}
