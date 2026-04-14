/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "WORK", href: "#work" },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT", href: "#about" },
];

const socials = [
  { name: "INSTAGRAM", href: "#" },
  { name: "BEHANCE", href: "#" },
  { name: "DRIBBBLE", href: "#" },
  { name: "VIMEO", href: "#" },
  { name: "LINKEDIN", href: "#" },
];

const projects = [
  {
    id: 1,
    year: "2024",
    title: "MUTATE TECH IDENTITY",
    category: "BRANDING / STRATEGY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChMoA0l5Zw1yXCauYAFPoWeYOVWjA3tjztcuVOi_kdjAJGLS6At-It-CP61QsW1z9_c0b4g7Uctx1NisEDppR8T2h5hQOzV_QcbWX-ikv88mHjSB44jOykWnsFTr93yuusnUKx1wiyZ_C_qehchIBFm68GNcgdfRByhUG4ZzRAAmEA2IvzdromgSWJetLnkkzsRznJeum1GqomErYW5u9VIa_MIXzjqONiaC6tTg6G3yj-BqS9aSxJ-I9P1LLvT_bKOq5DpWWCCi0",
    large: true,
  },
  {
    id: 2,
    year: "2023",
    title: "MIDNIGHT SESSIONS",
    category: "PRODUCTION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSq7yEUXaW2RtWvMeyZrMwCH6fxoHLJviEx7nlU1OBIYRij7gIrfUISIqu6HAUYZ6VwQVLu4u6ugcYvaweKPQxRZtI82sDE_uDf4VuJeju9NVtDtN2pmc6qq32N44dmEBjyvHKf2rB2xvs5yU_9JxwYkbAjX1ur4jrvyKGiCY-SIkNSQ-PjmK6l65Rqe-9elUDUT2EQf77aDP6SC0C-3No7ep5b_iaeM69oGXG27jPgYkMs75byh8Gm93JLclpGbJ39q66cTgpts",
    large: false,
  },
];

const expertise = [
  {
    title: "VIDEO EDITING",
    description: "PRECISION-CRAFTED HIGH-RETENTION EDITS TAILORED FOR SOCIAL VIRALITY AND CINEMATIC IMPACT. WE BLEND RHYTHM WITH NARRATIVE.",
  },
  {
    title: "BRANDING",
    description: "COMPREHENSIVE BRAND STRATEGY THAT GOES BEYOND LOGOS. WE DEFINE THE VISUAL SOUL AND MARKET POSITION OF YOUR IDENTITY.",
  },
  {
    title: "PRODUCTION",
    description: "HIGH-END CINEMATIC PRODUCTION FOR COMMERCIALS, MUSIC VIDEOS, AND BRAND FILMS. RAW EMOTION CAPTURED WITH ELITE HARDWARE.",
  },
];

const software = ["PREMIERE PRO", "AFTER EFFECTS", "DAVINCI", "FIGMA"];

export default function App() {
  const [activeLink, setActiveLink] = useState("HOME");

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-sm border-b border-outline/20">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
          <a href="#" className="text-2xl font-black tracking-tighter text-white">
            WASIM PAKHTOON
          </a>
          <div className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`font-label uppercase tracking-[0.1em] text-[0.6875rem] font-medium transition-colors duration-200 ${
                  activeLink === link.name ? "text-white border-b border-white pb-1" : "text-secondary-text hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="font-label uppercase tracking-[0.1em] text-[0.6875rem] font-medium text-white hover:opacity-70 transition-opacity"
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-24 px-8 max-w-screen-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,15vw,12rem)] font-black tracking-tighter uppercase leading-[0.85] mb-24"
        >
          WASIM<br />PAKHTOON
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-outline/30 pt-8 mb-20">
          <div className="md:col-span-4">
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">YOU'LL LIKE IT:</span>
          </div>
          <div className="md:col-span-6">
            <p className="text-[0.6875rem] uppercase leading-relaxed tracking-widest text-on-surface max-w-md">
              CRAFTING VISUAL STORIES THAT BUILD POWERFUL BRANDS — VIDEO EDITING, BRANDING & CINEMATIC SHOOTS BY WASIM PAKHTOON & HIESTFX. WE FOCUS ON THE MAIN AIM — GROWING YOUR BUSINESS THROUGH HIGH-IMPACT CREATIVE CONTENT.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">AVAILABLE</span>
            </div>
            <div className="mt-8">
              <a
                href="#work"
                className="inline-block bg-white text-black px-8 py-3 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text transition-all"
              >
                VIEW WORK
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-outline/30 pt-8">
          <div className="md:col-span-4">
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">SOCIALS:</span>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-[0.625rem] uppercase tracking-ultra font-bold hover:text-secondary-text transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="work">
        <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface"></span>
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">FEATURED PROJECT:</span>
          </div>
          <ArrowDown className="w-5 h-5 text-on-surface" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${project.large ? "lg:col-span-8" : "lg:col-span-4"} group cursor-pointer`}
            >
              <div className="aspect-video lg:aspect-auto lg:h-[500px] bg-[#1a1a1a] overflow-hidden mb-4 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">{project.year}</span>
                  <h3 className="text-xs font-bold uppercase tracking-widest mt-1">{project.title}</h3>
                </div>
                <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="services">
        <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface"></span>
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">OUR EXPERTISE:</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline/20">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`bg-background py-16 ${
                index === 0 ? "pr-12" : index === 1 ? "px-12" : "pl-12"
              } border-b md:border-b-0 ${index !== 2 ? "md:border-r border-outline/20" : ""}`}
            >
              <h3 className="text-xl font-black uppercase tracking-tighter mb-6">{item.title}</h3>
              <p className="text-[0.6875rem] uppercase tracking-widest leading-relaxed text-secondary-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="about">
        <div className="border-t border-outline/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4">
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">STORYTELLING IS OUR DNA:</span>
            </div>
            <div className="md:col-span-8">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-12"
              >
                WE DON'T JUST EDIT VIDEOS; WE BUILD LEGACIES. TRANSFORMING RAW FOOTAGE INTO EMOTIONAL JOURNEYS THAT COMMAND ATTENTION.
              </motion.p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {software.map((item) => (
                  <span
                    key={item}
                    className="text-[0.625rem] border border-outline/30 py-2 px-4 uppercase tracking-widest text-center hover:bg-white hover:text-black transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="contact">
        <div className="border-t border-outline/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">START A PROJECT:</span>
            </div>
            <div className="md:col-span-8">
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="YOUR NAME"
                      className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest transition-colors"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest transition-colors"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="PROJECT TYPE (VIDEO / BRANDING / SHOOT)"
                  className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest transition-colors"
                />
                <textarea
                  placeholder="YOUR VISION"
                  rows={3}
                  className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest resize-none transition-colors"
                ></textarea>
                <button className="bg-white text-black px-12 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text transition-all flex items-center gap-4 group">
                  SEND MESSAGE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E0E0E] border-t border-outline/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-black text-white">WASIM PAKHTOON</span>
            <p className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text mt-2">
              © 2024 STUDIO MONOLITH. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text hover:text-white transition-colors duration-300">INSTAGRAM</a>
            <a href="#" className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text hover:text-white transition-colors duration-300">BEHANCE</a>
            <a href="#" className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text hover:text-white transition-colors duration-300">DRIBBBLE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
