'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Mail, Menu, X } from 'lucide-react'

const projects = [
  { title: 'BloomCare — Mental Health App', type: 'Product Landing Page', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85', tag: 'REAL PROJECT', tone: 'dark' },
  { title: 'FrayWater — Luxury Fragrance', type: 'Brand Experience', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85', tag: 'REAL PROJECT', tone: 'cream' },
  { title: 'CryptoCalm — Investment Dashboard', type: 'Fintech Dashboard', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85', tag: 'EXPLORATION', tone: 'dark' },
  { title: 'Spenso — Personal Finance with AI', type: 'Mobile Product', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85', tag: 'REAL PROJECT', tone: 'light' },
]

const services = [
  ['UI/UX Design', 'Clear, scalable interfaces for products people enjoy using.'],
  ['Web Design & Development', 'Thoughtful websites that turn attention into action.'],
  ['Branding', 'Visual identities with a point of view and room to grow.'],
  ['Motion & Animations', 'Small moments of motion that make digital feel alive.'],
]

const experience = [
  ['Independent Studio', 'Fullstack Developer & AI Designer', '2024 — Now'],
  ['Mikan Team', 'Creative Technologist', '2022 — 2024'],
  ['Microsoft', 'Product Designer', '2020 — 2022'],
  ['Digital Atelier', 'Interaction Designer', '2018 — 2020'],
]

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <a href="#contact" aria-label="Send Joseph an email" className="pill"><Mail size={14} /> Email</a>
      <a href="#contact" aria-label="Find Joseph on Fiverr" className="pill"><span aria-hidden="true">fi</span> Fiverr</a>
      <a href="#contact" aria-label="Find Joseph on X" className="pill"><span aria-hidden="true">𝕏</span> X</a>
      <a href="#contact" aria-label="Find Joseph on GitHub" className="pill"><span aria-hidden="true">⌘</span> GitHub</a>
      <a href="#contact" aria-label="Open Joseph's LinkedIn" className="pill"><span aria-hidden="true">in</span> LinkedIn</a>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)

  return (
    <main>
      <nav className="nav-shell">
        <a className="availability" href="#contact"><span /> Available for New Project</a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a className="dark-button nav-cta" href="mailto:joseph@example.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero section-pad">
        <div className="hero-wordmark" aria-hidden="true"><span>JOSEPH</span><strong>JOSHUA</strong></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">FULLSTACK WEB DEVELOPER × AI DESIGNER</p>
            <h1>Building digital products with clarity, character, and intelligent details.</h1>
            <p className="hero-intro">I&apos;m Joseph Joshua — a fullstack web developer and AI designer making useful, expressive experiences for ambitious teams and curious founders.</p>
            <a href="#work" className="dark-button">Explore selected work <ArrowDownRight size={16} /></a>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame"><div className="portrait-art"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-08EMTaPUi8q2s8SlNtQ9S6FyuaHyq2.png" alt="Joseph Joshua outdoors" /></div></div>
            <p className="portrait-note">Based in Lagos<br />Working everywhere</p>
          </div>
          <div className="hero-aside"></div>
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="section-heading"><span className="ghost-title">PORTFOLIO</span></div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.title}>
            <div className={`project-image ${project.tone}`} style={{ backgroundImage: `url(${project.image})` }}><span className="project-tag">{project.tag}</span><button aria-label={`Open ${project.title}`} className="round-arrow"><ArrowUpRight size={18} /></button></div>
            <h3>{project.title}</h3><p>{project.type}</p>
          </article>)}
        </div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="section-heading simple"><span className="ghost-title">SERVICES</span></div>
        <div className="services-layout"><div className="service-feature"><div><p className="eyebrow">WHAT I DO</p><h3>{services[activeService][0]}</h3><p>{services[activeService][1]}</p></div><ArrowUpRight size={32} /></div><div className="service-list">{services.map(([title], index) => <button key={title} onClick={() => setActiveService(index)} className={activeService === index ? 'active' : ''}><span>{title}</span><ArrowUpRight size={22} /></button>)}</div></div>
      </section>

      <section id="experience" className="experience-section section-pad"><div className="section-heading dark-heading"><span className="ghost-title">EXPERIENCE</span><span className="experience-count">9+ years of experience</span></div><div className="experience-list">{experience.map(([company, role, dates]) => <div className="experience-row" key={company}><div><strong>{company}</strong><span>{role}</span></div><time>{dates}</time></div>)}</div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-inner"><div className="availability"><span /> Available for New Project</div><h2>Have a project<br /><em>in mind?</em></h2><p>Let&apos;s make something clear, useful, and impossible to ignore.</p><a className="dark-button" href="mailto:joseph@example.com">Contact me <ArrowUpRight size={16} /></a><div className="contact-footer"><strong>Joseph Joshua</strong><SocialLinks /></div></div></section>
    </main>
  )
}
