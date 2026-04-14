/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-[#474747]/20">
    <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
      <motion.a 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold tracking-tighter text-white" 
        href="#"
      >
        WASIM PAKHTOON
      </motion.a>
      <div className="hidden md:flex gap-12">
        {["HOME", "WORK", "SERVICES", "ABOUT"].map((item, i) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`font-label uppercase tracking-[0.1em] text-[0.6875rem] font-medium transition-colors duration-200 ${
              item === "HOME" ? "text-white border-b border-white pb-1" : "text-[#C7C6C6] hover:text-white"
            }`}
            href={item === "HOME" ? "#" : `#${item.toLowerCase()}`}
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.a 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-label uppercase tracking-[0.1em] text-[0.6875rem] font-medium text-white hover:opacity-70 transition-opacity" 
        href="#contact"
      >
        CONTACT
      </motion.a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="pt-40 pb-20 px-8 max-w-screen-2xl mx-auto">
    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">AVAILABLE</span>
        </div>
        <div className="mt-8">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-3 text-[0.625rem] font-bold uppercase tracking-ultra hover:opacity-80 transition-all" 
            href="#work"
          >
            VIEW WORK
          </motion.a>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-outline/30 pt-8">
      <div className="md:col-span-4">
        <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">SOCIALS:</span>
      </div>
      <div className="md:col-span-8 flex flex-wrap gap-8">
        {["INSTAGRAM", "BEHANCE", "DRIBBBLE", "VIMEO", "LINKEDIN"].map((social) => (
          <motion.a 
            key={social}
            whileHover={{ y: -2 }}
            className="text-[0.625rem] uppercase tracking-ultra font-bold hover:text-secondary-text transition-colors" 
            href="#"
          >
            {social}
          </motion.a>
        ))}
      </div>
    </div>
  </header>
);

const Work = () => (
  <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="work">
    <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-8">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-on-surface"></span>
        <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">FEATURED PROJECT:</span>
      </div>
      <ArrowDown className="w-5 h-5" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-8 group cursor-pointer"
      >
        <div className="aspect-video bg-[#1a1a1a] overflow-hidden mb-4">
          <img 
            alt="Mutate Tech Identity" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChMoA0l5Zw1yXCauYAFPoWeYOVWjA3tjztcuVOi_kdjAJGLS6At-It-CP61QsW1z9_c0b4g7Uctx1NisEDppR8T2h5hQOzV_QcbWX-ikv88mHjSB44jOykWnsFTr93yuusnUKx1wiyZ_C_qehchIBFm68GNcgdfRByhUG4ZzRAAmEA2IvzdromgSWJetLnkkzsRznJeum1GqomErYW5u9VIa_MIXzjqONiaC6tTg6G3yj-BqS9aSxJ-I9P1LLvT_bKOq5DpWWCCi0"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">2024</span>
            <h3 className="text-xs font-bold uppercase tracking-widest mt-1">MUTATE TECH IDENTITY</h3>
          </div>
          <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">BRANDING / STRATEGY</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-4 group cursor-pointer"
      >
        <div className="aspect-square bg-[#1a1a1a] overflow-hidden mb-4">
          <img 
            alt="Midnight Sessions" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUSq7yEUXaW2RtWvMeyZrMwCH6fxoHLJviEx7nlU1OBIYRij7gIrfUISIqu6HAUYZ6VwQVLu4u6ugcYvaweKPQxRZtI82sDE_uDf4VuJeju9NVtDtN2pmc6qq32N44dmEBjyvHKf2rB2xvs5yU_9JxwYkbAjX1ur4jrvyKGiCY-SIkNSQ-PjmK6l65Rqe-9elUDUT2EQf77aDP6SC0C-3No7ep5b_iaeM69oGXG27jPgYkMs75byh8Gm93JLclpGbJ39q66cTgpts"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">2023</span>
            <h3 className="text-xs font-bold uppercase tracking-widest mt-1">MIDNIGHT SESSIONS</h3>
          </div>
          <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">PRODUCTION</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Expertise = () => (
  <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="services">
    <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-20">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-on-surface"></span>
        <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">OUR EXPERTISE:</span>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline/20">
      {[
        { title: "VIDEO EDITING", desc: "PRECISION-CRAFTED HIGH-RETENTION EDITS TAILORED FOR SOCIAL VIRALITY AND CINEMATIC IMPACT. WE BLEND RHYTHM WITH NARRATIVE." },
        { title: "BRANDING", desc: "COMPREHENSIVE BRAND STRATEGY THAT GOES BEYOND LOGOS. WE DEFINE THE VISUAL SOUL AND MARKET POSITION OF YOUR IDENTITY." },
        { title: "PRODUCTION", desc: "HIGH-END CINEMATIC PRODUCTION FOR COMMERCIALS, MUSIC VIDEOS, AND BRAND FILMS. RAW EMOTION CAPTURED WITH ELITE HARDWARE." }
      ].map((service, i) => (
        <motion.div 
          key={service.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className={`bg-background py-16 ${i === 0 ? "pr-12" : i === 1 ? "px-12" : "pl-12"} border-b md:border-b-0 ${i !== 2 ? "md:border-r" : ""} border-outline/20`}
        >
          <h3 className="text-xl font-black uppercase tracking-tighter mb-6">{service.title}</h3>
          <p className="text-[0.6875rem] uppercase tracking-widest leading-relaxed text-secondary-text">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

const About = () => (
  <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="about">
    <div className="border-t border-outline/30 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-4">
          <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">STORYTELLING IS OUR DNA:</span>
        </div>
        <div className="md:col-span-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-12"
          >
            WE DON'T JUST EDIT VIDEOS; WE BUILD LEGACIES. TRANSFORMING RAW FOOTAGE INTO EMOTIONAL JOURNEYS THAT COMMAND ATTENTION.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["PREMIERE PRO", "AFTER EFFECTS", "DAVINCI", "FIGMA"].map((tool) => (
              <span key={tool} className="text-[0.625rem] border border-outline/30 py-2 px-4 uppercase tracking-widest text-center">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="contact">
    <div className="border-t border-outline/30 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">START A PROJECT:</span>
        </div>
        <div className="md:col-span-8">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <input 
                className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest transition-colors" 
                placeholder="YOUR NAME" 
                type="text" 
              />
              <input 
                className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest transition-colors" 
                placeholder="EMAIL ADDRESS" 
                type="email" 
              />
            </div>
            <input 
              className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest transition-colors" 
              placeholder="PROJECT TYPE (VIDEO / BRANDING / SHOOT)" 
              type="text" 
            />
            <textarea 
              className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-4 px-0 placeholder:text-outline text-sm uppercase tracking-widest resize-none transition-colors" 
              placeholder="YOUR VISION" 
              rows={3}
            ></textarea>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-12 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:opacity-80 transition-all flex items-center gap-4"
            >
              SEND MESSAGE <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0E0E0E] border-t border-[#474747]/20">
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-lg font-black text-white">WASIM PAKHTOON</span>
        <p className="uppercase tracking-[0.1em] text-[0.625rem] text-[#C7C6C6] mt-2">© 2024 STUDIO MONOLITH. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex gap-12">
        {["INSTAGRAM", "BEHANCE", "DRIBBBLE"].map((social) => (
          <a key={social} className="uppercase tracking-[0.1em] text-[0.625rem] text-[#C7C6C6] hover:text-white transition-colors duration-300" href="#">
            {social}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
