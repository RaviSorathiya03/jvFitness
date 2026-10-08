import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
export function Testimonials() {
  const stories = [testimonials[0], testimonials[3], testimonials[5]];
  return <section id="testimonials" className="section-space testimonials-section"><div className="page-container">
    <div className="section-heading-row"><div><p className="eyebrow">THE PEOPLE MAKE THE DIFFERENCE</p><h2>Real people.<br /><span>Everyday wins.</span></h2></div><p className="section-intro">A little more energy. A little more confidence. Here’s what progress feels like to our members.</p></div>
    <div className="testimonial-grid">{stories.map((story) => <figure className="testimonial-card" key={story.id}><div className="review-top"><span className="review-stars" aria-label={`${story.rating} out of 5 stars`}>{Array.from({ length: story.rating }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}</span><Quote size={27} /></div><blockquote>“{story.quote}”</blockquote><figcaption><span className="review-avatar" aria-hidden="true">{story.name.split(" ").map((part) => part[0]).join("")}</span><div><strong>{story.name}</strong><span>{story.program}</span></div></figcaption></figure>)}</div>
    <p className="results-note">Every journey is personal. Results vary with individual effort, consistency, and lifestyle.</p>
  </div></section>;
}
