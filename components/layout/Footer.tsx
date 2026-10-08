import { ArrowUpRight, Instagram } from "lucide-react";
import { Brand } from "@/components/shared/Brand";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer"><div className="page-container"><div className="footer-top"><div className="footer-brand"><Brand light /><p>Move well. Eat well. Live well.<br />A healthier life starts here.</p><a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social"><Instagram size={18} /> Follow our everyday <ArrowUpRight size={15} /></a></div><div className="footer-links"><h3>Make yourself at home</h3>{siteConfig.navLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}<a href="#faq">FAQs</a></div><div className="footer-hours"><h3>Find your time</h3><dl><div><dt>Monday – Friday</dt><dd>{siteConfig.hours.weekdays}</dd></div><div><dt>Saturday</dt><dd>{siteConfig.hours.saturday}</dd></div><div><dt>Sunday</dt><dd>{siteConfig.hours.sunday}</dd></div></dl><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email} <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} JV Fitness & Wellness Club</p><span>Made for a stronger you. <span aria-hidden="true">↗</span></span></div><p className="footer-disclosure">{siteConfig.disclosure}</p></div></footer>;
}
