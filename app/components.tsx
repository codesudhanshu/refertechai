import Link from "next/link";

export const services = [
  ["AI Agents", "Purpose-built agents that research, reason, act and hand off—with your data, tools and guardrails."],
  ["AI Workflows", "Connected automations that remove repetitive work across your business systems and teams."],
  ["Web & Product", "Fast, resilient web applications and platforms people actually enjoy using."],
  ["Cloud & DevOps", "Secure cloud foundations, CI/CD and observability designed to grow without drama."],
  ["Blockchain", "Useful Web3 products, smart contracts and decentralized experiences built for real adoption."],
  ["Technology Consulting", "Clear technical direction for ambitious products, complex systems and next-stage growth."],
];

export function Mark() { return <span className="mark"><i></i><i></i><i></i></span>; }
export function Arrow() { return <span className="arrow">↗</span>; }

export function Header({ light = false }: { light?: boolean }) {
  return <header className={light ? "header light-header" : "header"}>
    <Link href="/" className="brand" aria-label="ReferTech AI home"><Mark /> REFERTECH<span>AI</span></Link>
    <nav><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
    <Link className="nav-cta" href="/contact">Let&apos;s talk <Arrow /></Link>
  </header>;
}

export function Footer() {
  return <footer>
    <div className="footer-top"><div><Link href="/" className="brand"><Mark /> REFERTECH<span>AI</span></Link><p>Technology partners for teams building what&apos;s next.</p></div><a className="footer-mail" href="mailto:sales@refertechai.com">sales@refertechai.com <Arrow /></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ReferTech AI. All rights reserved.</span><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms & Conditions</Link></div></div>
  </footer>;
}

export function ContactCta() { return <section className="contact-cta"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make the next<br/><em>move count.</em></h2><a href="mailto:sales@refertechai.com" className="button button-lime">Start a conversation <Arrow /></a></section>; }
