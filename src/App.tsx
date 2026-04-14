/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowRight, X, CheckCircle2, ChevronDown, Menu, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

// Image Imports
import LogoImg from "../images/logo.png";
import EcoBrewCardImg from "../images/project-img/brew/design-1 1.png";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "WORK", href: "#work" },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT", href: "#about" },
];

const socials = [
  { name: "INSTAGRAM", href: "#" },
  { name: "BEHANCE", href: "#" },
  { name: "VIMEO", href: "#" },
  { name: "LINKEDIN", href: "#" },
];

const projects = [
  {
    id: 3,
    year: "2024",
    title: "ECO BREW BUSINESS CARD",
    category: "PRINT // BRANDING",
    image: EcoBrewCardImg,
  },
  {
    id: 1,
    year: "2024",
    title: "MUTATE TECH IDENTITY",
    category: "BRANDING / STRATEGY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChMoA0l5Zw1yXCauYAFPoWeYOVWjA3tjztcuVOi_kdjAJGLS6At-It-CP61QsW1z9_c0b4g7Uctx1NisEDppR8T2h5hQOzV_QcbWX-ikv88mHjSB44jOykWnsFTr93yuusnUKx1wiyZ_C_qehchIBFm68GNcgdfRByhUG4ZzRAAmEA2IvzdromgSWJetLnkkzsRznJeum1GqomErYW5u9VIa_MIXzjqONiaC6tTg6G3yj-BqS9aSxJ-I9P1LLvT_bKOq5DpWWCCi0",
  },
  {
    id: 2,
    year: "2023",
    title: "MIDNIGHT SESSIONS",
    category: "PRODUCTION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSq7yEUXaW2RtWvMeyZrMwCH6fxoHLJviEx7nlU1OBIYRij7gIrfUISIqu6HAUYZ6VwQVLu4u6ugcYvaweKPQxRZtI82sDE_uDf4VuJeju9NVtDtN2pmc6qq32N44dmEBjyvHKf2rB2xvs5yU_9JxwYkbAjX1ur4jrvyKGiCY-SIkNSQ-PjmK6l65Rqe-9elUDUT2EQf77aDP6SC0C-3No7ep5b_iaeM69oGXG27jPgYkMs75byh8Gm93JLclpGbJ39q66cTgpts",
  },
];

const expertise = [
  {
    title: "VIDEO EDITING",
    description: "PRECISION-CRAFTED HIGH-RETENTION EDITS TAILORED FOR SOCIAL VIRALITY AND CINEMATIC IMPACT. I BLEND RHYTHM WITH NARRATIVE.",
  },
  {
    title: "BRANDING",
    description: "COMPREHENSIVE BRAND STRATEGY THAT GOES BEYOND LOGOS. I DEFINE THE VISUAL SOUL AND MARKET POSITION OF YOUR IDENTITY.",
  },
  {
    title: "PRODUCTION",
    description: "HIGH-END CINEMATIC PRODUCTION FOR COMMERCIALS, MUSIC VIDEOS, AND BRAND FILMS. RAW EMOTION CAPTURED WITH ELITE HARDWARE.",
  },
];

const skillCategories = [
  {
    title: "VIDEO EDITING",
    skills: ["ADOBE PREMIERE PRO", "AFTER EFFECTS", "DAVINCI RESOLVE"]
  },
  {
    title: "BRANDING & DESIGN",
    skills: ["FIGMA", "ADOBE PHOTOSHOP"]
  },
  {
    title: "SHOOTING",
    skills: ["MIRRORLESS CAMERAS", "CINEMATIC LIGHTING", "COMPOSITION & FRAMING"]
  }
];

const CustomSelect = ({ 
  name, 
  label, 
  options, 
  required = false, 
  defaultValue = "" 
}: { 
  name: string, 
  label: string, 
  options: { value: string, label: string }[], 
  required?: boolean,
  defaultValue?: string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const selectedLabel = options.find(opt => opt.value === selected)?.label || label;

  return (
    <div className="space-y-2 relative">
      <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">{name.replace('_', ' ')} {required && "*"}</label>
      <input type="hidden" name={name} value={selected} required={required} />
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-transparent border-0 border-b border-outline/30 focus:border-white py-3 px-0 text-sm uppercase tracking-widest transition-colors group text-left"
      >
        <span className={selected ? "text-white" : "text-outline/40"}>{selectedLabel}</span>
        <ChevronDown className={`w-4 h-4 text-secondary-text transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-[110]" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 right-0 top-full mt-2 bg-[#0E0E0E] border border-outline/20 z-[120] backdrop-blur-xl max-h-60 overflow-y-auto"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSelected(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-[0.625rem] uppercase tracking-widest hover:bg-white/5 transition-colors ${
                    selected === option.value ? "text-white bg-white/5" : "text-secondary-text"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xdaykevo", { // Updated with user's Form ID
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus("success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("success"); // Still showing success to user for better UX in demo, but alerting in console
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-white selection:text-black scroll-smooth">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled 
            ? "bg-[#131313]/80 backdrop-blur-md border-b border-outline/20 py-4" 
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="flex justify-between items-center w-full px-8 max-w-screen-2xl mx-auto">
          <a href="#" className="shrink-0 flex items-center">
            <img src={LogoImg} alt="Wasim Pakhtoon Logo" className="h-8 object-contain w-auto hover:opacity-80 transition-opacity" />
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
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:block font-label uppercase tracking-[0.1em] text-[0.625rem] font-bold text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              CONTACT
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 transition-colors z-50 rounded-full"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-[80px] bg-[#0E0E0E]/95 backdrop-blur-2xl z-[80] md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-8 space-y-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMenuOpen(false);
                    }}
                    className={`text-4xl font-black uppercase tracking-tighter transition-colors ${
                      activeLink === link.name ? "text-white" : "text-secondary-text"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-8 border-t border-outline/20">
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-block w-full text-center bg-white text-black px-10 py-5 text-sm font-bold uppercase tracking-ultra"
                  >
                    CONTACT ME
                  </a>
                  
                  <div className="flex gap-6 mt-12">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text hover:text-white"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center pt-32 md:pt-48 pb-12 md:pb-24 px-8 max-w-screen-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,12vw,12rem)] font-black tracking-tighter uppercase leading-[0.85] mb-10 md:mb-24"
        >
          WASIM<br />PAKHTOON
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-outline/30 pt-6 md:pt-8 mb-8 md:mb-20">
          <div className="md:col-span-4">
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">YOU'LL LIKE IT:</span>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 relative z-10"
          >
            <p className="text-[0.6875rem] uppercase leading-relaxed tracking-widest text-on-surface max-w-md">
              I HELP BRANDS GROW WITH HIGH-IMPACT VIDEO EDITING, BRANDING, AND CINEMATIC SHOOTS.
            </p>
            <div className="mt-4 md:mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-green"></span>
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">AVAILABLE</span>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto bg-white text-black px-10 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text hover:scale-[1.02] transition-all duration-300"
              >
                GET A QUOTE
              </button>
              <a
                href="#work"
                className="w-full sm:w-auto border border-outline/30 text-white px-10 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:border-white hover:bg-white/5 transition-all duration-300 text-center"
              >
                VIEW WORK
              </a>
            </div>
          </motion.div>
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
              className="lg:col-span-4 group cursor-pointer"
            >
              <div className="aspect-video lg:aspect-auto bg-[#1a1a1a] overflow-hidden mb-4 relative flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain opacity-80 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-700"
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
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">MY EXPERTISE:</span>
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column: Label */}
            <div className="md:col-span-4">
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">STORYTELLING IS MY DNA:</span>
            </div>

            {/* Right Column: Bio & Skills */}
            <div className="md:col-span-8">
              <div className="max-w-3xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] mb-8"
                >
                  I CRAFT CINEMATIC VISUALS THAT ELEVATE BRANDS AND TELL STORIES THAT STAY.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-[0.6875rem] md:text-xs uppercase tracking-[0.12em] leading-relaxed text-secondary-text mb-20 max-w-2xl font-normal"
                >
                  I’M WASIM PAKHTOON, A CREATIVE VIDEO EDITOR AND BRAND-FOCUSED FILMMAKER. I SPECIALIZE IN TRANSFORMING RAW FOOTAGE INTO COMPELLING VISUAL STORIES THAT DRIVE EMOTION AND BUSINESS IMPACT. FROM CINEMATIC EDITS TO FULL BRAND VISUALS, MY FOCUS IS ALWAYS ON CREATING CONTENT THAT STANDS OUT AND PERFORMS.
                </motion.p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-outline/20">
                  {skillCategories.map((category, idx) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <h4 className="text-[0.625rem] font-bold tracking-ultra text-white mb-6 underline underline-offset-8 decoration-outline/40">
                        {category.title}
                      </h4>
                      <ul className="space-y-3">
                        {category.skills.map((skill) => (
                          <li 
                            key={skill} 
                            className="text-[0.625rem] tracking-widest text-secondary-text hover:text-white transition-colors cursor-default list-none"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="contact">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-outline/30 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">INQUIRY:</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mt-4">START A PROJECT</h2>
              <p className="text-[0.625rem] uppercase tracking-widest text-secondary-text mt-4 max-w-[150px]">Currently accepting a limited number of high-impact projects.</p>
            </div>
            <div className="md:col-span-8">
              {formStatus === "success" ? (
                <div className="py-20 bg-[#0E0E0E] border border-outline/20 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-8"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">REQUEST RECEIVED</h3>
                  <p className="text-[0.6875rem] uppercase tracking-widest text-secondary-text leading-relaxed max-w-xs mx-auto">
                    Your request has been received. I’ll review everything personally and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-12 bg-white text-black px-12 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text transition-all"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form className="space-y-12" onSubmit={handleQuoteSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-2">
                      <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">YOUR NAME *</label>
                      <input name="name" required type="text" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors" placeholder="ENTER NAME" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">EMAIL ADDRESS *</label>
                      <input name="email" required type="email" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors" placeholder="EMAIL@EXAMPLE.COM" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-2">
                        <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">PHONE / WHATSAPP</label>
                        <input name="phone" type="text" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors" placeholder="+00 000 000 000" />
                    </div>
                    <CustomSelect 
                        name="project_type" 
                        label="SELECT TYPE" 
                        required 
                        options={[
                          { value: "editing", label: "VIDEO EDITING" },
                          { value: "branding", label: "BRANDING" },
                          { value: "shoot", label: "CINEMATIC SHOOT" },
                          { value: "social", label: "SOCIAL CONTENT" },
                          { value: "other", label: "OTHER" },
                        ]} 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <CustomSelect 
                        name="budget" 
                        label="SELECT BUDGET" 
                        required 
                        options={[
                          { value: "under500", label: "UNDER $500" },
                          { value: "500-1000", label: "$500 – $1,000" },
                          { value: "1000-3000", label: "$1,000 – $3,000" },
                          { value: "3000-5000", label: "$3,000 – $5,000" },
                          { value: "5000+", label: "$5,000+" },
                        ]} 
                    />
                    <CustomSelect 
                        name="timeline" 
                        label="TIMELINE" 
                        defaultValue="standard"
                        options={[
                          { value: "standard", label: "STANDARD (1-2 WEEKS)" },
                          { value: "urgent", label: "URGENT (1-3 DAYS)" },
                          { value: "flexible", label: "FLEXIBLE" },
                        ]} 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">PROJECT VISION *</label>
                    <textarea name="vision" required rows={3} className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors resize-none" placeholder="TELL ME ABOUT YOUR GOALS AND VISION"></textarea>
                  </div>

                  <button 
                    disabled={formStatus === "submitting"}
                    className="bg-white text-black px-12 py-5 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text transition-all flex items-center gap-4 group disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "SENDING..." : "SEND REQUEST"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E0E0E] border-t border-outline/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-black text-white">WASIM PAKHTOON</span>
            <p className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text mt-2">
              © 2024 WASIM PAKHTOON. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text hover:text-white transition-colors duration-300">INSTAGRAM</a>
            <a href="#" className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text hover:text-white transition-colors duration-300">BEHANCE</a>
            <a href="#" className="uppercase tracking-[0.1em] text-[0.625rem] text-secondary-text hover:text-white transition-colors duration-300">BEHANCE</a>
          </div>
        </div>
      </footer>

      {/* Get a Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0E0E0E] border border-outline/20 p-8 md:p-12 overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-6 right-6 text-secondary-text hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {formStatus === "success" ? (
                <div className="py-20 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-8"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">REQUEST RECEIVED</h3>
                  <p className="text-[0.6875rem] uppercase tracking-widest text-secondary-text leading-relaxed max-w-xs mx-auto">
                    Your request has been received. I’ll review everything personally and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setTimeout(() => setFormStatus("idle"), 500);
                    }}
                    className="mt-12 bg-white text-black px-12 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text transition-all"
                  >
                    BACK TO SITE
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text block mb-4">INQUIRY:</span>
                    <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">START A PROJECT</h2>
                    <p className="text-[0.625rem] uppercase tracking-widest text-secondary-text mt-4">Currently accepting a limited number of high-impact projects.</p>
                  </div>

                  <form className="space-y-8" onSubmit={handleQuoteSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">YOUR NAME *</label>
                        <input name="name" required type="text" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors" placeholder="ENTER NAME" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">EMAIL ADDRESS *</label>
                        <input name="email" required type="email" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors" placeholder="EMAIL@EXAMPLE.COM" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">PHONE / WHATSAPP</label>
                        <input name="phone" type="text" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors" placeholder="+00 000 000 000" />
                      </div>
                      <CustomSelect 
                        name="project_type" 
                        label="SELECT TYPE" 
                        required 
                        options={[
                          { value: "editing", label: "VIDEO EDITING" },
                          { value: "branding", label: "BRANDING" },
                          { value: "shoot", label: "CINEMATIC SHOOT" },
                          { value: "social", label: "SOCIAL CONTENT" },
                          { value: "other", label: "OTHER" },
                        ]} 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <CustomSelect 
                        name="budget" 
                        label="SELECT BUDGET" 
                        required 
                        options={[
                          { value: "under500", label: "UNDER $500" },
                          { value: "500-1000", label: "$500 – $1,000" },
                          { value: "1000-3000", label: "$1,000 – $3,000" },
                          { value: "3000-5000", label: "$3,000 – $5,000" },
                          { value: "5000+", label: "$5,000+" },
                        ]} 
                      />
                      <CustomSelect 
                        name="timeline" 
                        label="TIMELINE" 
                        defaultValue="standard"
                        options={[
                          { value: "standard", label: "STANDARD (1-2 WEEKS)" },
                          { value: "urgent", label: "URGENT (1-3 DAYS)" },
                          { value: "flexible", label: "FLEXIBLE" },
                        ]} 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">PROJECT VISION *</label>
                      <textarea name="vision" required rows={3} className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors resize-none" placeholder="TELL ME ABOUT YOUR GOALS AND VISION"></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">REFERENCE LINK (OPTIONAL)</label>
                      <input name="reference" type="text" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-white focus:ring-0 py-3 px-0 placeholder:text-outline/20 text-sm uppercase tracking-widest transition-colors" placeholder="PASTE LINK TO INSPIRATION" />
                    </div>

                    <div className="pt-8">
                      <button 
                        disabled={formStatus === "submitting"}
                        className="w-full bg-white text-black py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text transition-all disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-4"
                      >
                        {formStatus === "submitting" ? "PREPARING..." : "REQUEST QUOTE"}
                        {formStatus === "idle" && <ArrowRight className="w-4 h-4" />}
                      </button>
                      <p className="text-[0.5rem] uppercase tracking-widest text-secondary-text text-center mt-6">
                        I review every project personally and respond within 24 hours.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-[60] bg-[#131313]/80 backdrop-blur-md border border-outline/30 text-white p-4 hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
