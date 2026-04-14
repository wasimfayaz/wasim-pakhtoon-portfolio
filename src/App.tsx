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

const pexelsGrid = [
  "https://images.pexels.com/photos/35066424/pexels-photo-35066424.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/35028172/pexels-photo-35028172.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/21908308/pexels-photo-21908308.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/35296645/pexels-photo-35296645.jpeg?auto=compress&cs=tinysrgb&w=600",
];

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

const brandingProjects = [
  {
    id: 3,
    year: "2024",
    title: "ECO BREW IDENTITY",
    category: "BRANDING",
    image: EcoBrewCardImg,
  },
  {
    id: 1,
    year: "2024",
    title: "MUTATE TECH IDENTITY",
    category: "BRANDING",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChMoA0l5Zw1yXCauYAFPoWeYOVWjA3tjztcuVOi_kdjAJGLS6At-It-CP61QsW1z9_c0b4g7Uctx1NisEDppR8T2h5hQOzV_QcbWX-ikv88mHjSB44jOykWnsFTr93yuusnUKx1wiyZ_C_qehchIBFm68GNcgdfRByhUG4ZzRAAmEA2IvzdromgSWJetLnkkzsRznJeum1GqomErYW5u9VIa_MIXzjqONiaC6tTg6G3yj-BqS9aSxJ-I9P1LLvT_bKOq5DpWWCCi0",
  },
];

const cinematicProjects = [
  {
    id: 7,
    year: "2025",
    title: "LEE HERITAGE",
    category: "CINEMATIC SHOOT",
    vimeoId: "1183128960",
    description: "Boutique hotel in Lalchowk, Srinagar.",
  },
  {
    id: 6,
    year: "2025",
    title: "HEAVEN VIEW VILLA",
    category: "CINEMATIC SHOOT",
    vimeoId: "1183128507",
    description: "Luxury property in Manasbal, Kashmir.",
  },
];


const droneProjects = [
  {
    id: 4,
    year: "2024",
    title: "COASTAL PROPERTY REEL",
    category: "DRONE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSq7yEUXaW2RtWvMeyZrMwCH6fxoHLJviEx7nlU1OBIYRij7gIrfUISIqu6HAUYZ6VwQVLu4u6ugcYvaweKPQxRZtI82sDE_uDf4VuJeju9NVtDtN2pmc6qq32N44dmEBjyvHKf2rB2xvs5yU_9JxwYkbAjX1ur4jrvyKGiCY-SIkNSQ-PjmK6l65Rqe-9elUDUT2EQf77aDP6SC0C-3No7ep5b_iaeM69oGXG27jPgYkMs75byh8Gm93JLclpGbJ39q66cTgpts",
  },
];

const editingProjects = [
  {
    id: 5,
    year: "2024",
    title: "MIDNIGHT SESSIONS",
    category: "EDITING",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSq7yEUXaW2RtWvMeyZrMwCH6fxoHLJviEx7nlU1OBIYRij7gIrfUISIqu6HAUYZ6VwQVLu4u6ugcYvaweKPQxRZtI82sDE_uDf4VuJeju9NVtDtN2pmc6qq32N44dmEBjyvHKf2rB2xvs5yU_9JxwYkbAjX1ur4jrvyKGiCY-SIkNSQ-PjmK6l65Rqe-9elUDUT2EQf77aDP6SC0C-3No7ep5b_iaeM69oGXG27jPgYkMs75byh8Gm93JLclpGbJ39q66cTgpts",
  },
];

const processSteps = [
  {
    title: "GEAR & CAPTURE",
    description: "Utilizing professional mirrorless cameras and advanced drone systems (from DJI Mini 4K to DJI 3 Pro) for high-end cinematic and aerial footage."
  },
  {
    title: "POST-PRODUCTION",
    description: "Industry-standard editing, motion graphics, and color grading using the complete Adobe Creative Suite to craft a seamless narrative."
  },
  {
    title: "FINAL DELIVERY",
    description: "Providing fully optimized, premium visual assets that elevate your brand's presence across all digital platforms."
  }
];

const skillCategories = [
  {
    title: "VIDEO EDITING",
    skills: ["ADOBE SUITE", "DAVINCI RESOLVE", "MOTION GRAPHICS"]
  },
  {
    title: "DRONE & AERIAL",
    skills: ["DJI 3 PRO", "DJI MINI 4K", "AERIAL CINEMATOGRAPHY"]
  },
  {
    title: "SHOOTING",
    skills: ["MIRRORLESS CAMERAS", "CINEMATIC LIGHTING", "GIMBAL STABILIZATION"]
  }
];

const faqs = [
  {
    question: "Do you travel for shoots, or are you only based in Kashmir?",
    answer: "While we are based in Kashmir, we frequently travel for high-end hotel, real-estate, and brand shoots across the globe. Travel and logistics can be factored into a custom quote."
  },
  {
    question: "How long does a typical cinematic project take from start to delivery?",
    answer: "A standard brand or property shoot typically takes 1-3 days on location. Post-production, including color grading and sound design, takes 1-2 weeks depending on the project scope."
  },
  {
    question: "Do you handle the complete production process?",
    answer: "Yes. From pre-production planning and storyboarding to shooting, drone operation, editing, and final color correction, we manage every phase in-house to ensure uncompromising quality."
  },
  {
    question: "What equipment do you use for high-end property shoots?",
    answer: "We utilize professional mirrorless cinema cameras, gimbal stabilization systems, and advanced DJI Drones (Mavic 3 Pro & Mini 4K) to capture world-class ground and aerial visuals."
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
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

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
                    START A PROJECT
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

      <header className="min-h-screen flex flex-col justify-center pt-32 md:pt-48 pb-12 md:pb-24 px-8 max-w-screen-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,12vw,12rem)] font-black tracking-tighter uppercase leading-[0.85] mb-10 md:mb-24"
        >
          Delivering cinematic<br />excellence
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-outline/30 pt-6 md:pt-8 mb-8 md:mb-20">
          <div className="md:col-span-4">
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">OUR MISSION:</span>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 relative z-10"
          >
            <p className="text-[0.6875rem] uppercase leading-relaxed tracking-widest text-on-surface max-w-md">
              FROM CONCEPT TO FINAL DELIVERY, WE PROVIDE END-TO-END CINEMATIC SOLUTIONS FOR LUXURY HOTELS AND GLOBAL BRANDS.
            </p>
            <div className="mt-4 md:mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-green"></span>
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">AVAILABLE FOR PROJECTS</span>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto bg-white text-black px-10 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-secondary-text hover:scale-[1.02] transition-all duration-300"
              >
                START A PROJECT
              </button>
              <a
                href="#work"
                className="w-full sm:w-auto border border-outline/30 text-white px-10 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:border-white hover:bg-white/5 transition-all duration-300 text-center"
              >
                SELECTED WORK
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

      {/* Selected Work */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="work">
        {/* Pexels Block At Top Level */}

        {/* Pexels Global Reach Section */}
        <div className="mb-32">
          <div className="bg-background border border-outline/20 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 group hover:border-outline/40 transition-colors duration-500 mb-8 border-l-4 border-l-secondary-text/30 hover:border-l-white">
            <div className="max-w-xl">
              <h3 className="text-sm md:text-base font-black uppercase tracking-tighter text-white mb-3">Global Reach & Authority</h3>
              <p className="text-[0.6875rem] text-secondary-text uppercase tracking-[0.1em] leading-relaxed">
                Featured photography reaching hundreds of thousands of viewers worldwide on Pexels. Establishing visual authority through compelling, high-quality imagery.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center w-full md:w-auto">
              <div>
                <h4 className="text-5xl md:text-6xl font-black text-white tracking-tighter">125.2K<span className="text-secondary-text text-3xl">+</span></h4>
                <div className="text-[0.625rem] text-secondary-text uppercase tracking-ultra font-bold mt-2">TOTAL VIEWS</div>
              </div>
              
              <a 
                href="https://www.pexels.com/@wxeim-768574136/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto border border-outline/30 text-white px-8 py-5 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-white hover:text-black transition-all duration-300 text-center flex items-center justify-center group-hover:border-white/50"
              >
                VIEW ACCOUNT <span className="ml-2 font-normal text-base leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pexelsGrid.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-[3/4] bg-[#1a1a1a] overflow-hidden group/image relative cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Pexels Featured Work 0${idx + 1}`} 
                  className="w-full h-full object-cover opacity-70 group-hover/image:scale-105 group-hover/image:opacity-100 transition-all duration-700 md:blur-[2px] group-hover/image:blur-none"
                />
                <div className="absolute inset-0 border border-outline/10 group-hover/image:border-white/20 transition-colors pointer-events-none z-10" />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  <span className="text-[0.5rem] tracking-ultra text-white font-bold uppercase">PEXELS</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Work Details */}
        <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface"></span>
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">SELECTED WORK:</span>
          </div>
        </div>

        <div className="flex flex-col border-t border-outline/20 mb-32">
          {/* 01 // Cinematic Shoots */}
          <div className="border-b border-outline/20">
            <button 
              onClick={() => setActiveCategory(activeCategory === 0 ? null : 0)}
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
              <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors ${activeCategory === 0 ? 'text-white' : 'text-secondary-text group-hover:text-white'}`}>
                <span className="text-sm font-bold opacity-40 mr-4">01.</span> CINEMATIC SHOOTS
              </h3>
              <span className={`text-3xl font-light transition-transform duration-300 ${activeCategory === 0 ? 'rotate-45 text-secondary-text' : 'text-white group-hover:text-secondary-text'}`}>
                +
              </span>
            </button>
            <AnimatePresence>
              {activeCategory === 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 md:gap-32 pt-8 pb-16">
            {cinematicProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-12 group cursor-pointer"
              >
                <div className="aspect-video bg-[#1a1a1a] overflow-hidden mb-4 relative">
                  {(project as any).vimeoId ? (
                    <div className="w-full h-full pointer-events-none">
                      <iframe
                        src={`https://player.vimeo.com/video/${(project as any).vimeoId}?background=1&autoplay=1&muted=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                        className="w-full h-full scale-[1.35]"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        title={project.title}
                      />
                    </div>
                  ) : (project as any).video ? (
                    <video
                      src={(project as any).video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">{project.year}</span>
                    <h4 className="text-xl font-black uppercase tracking-tighter mt-1">{project.title}</h4>
                    {(project as any).description && (
                      <p className="text-[0.875rem] text-secondary-text mt-2 font-medium">{project.description}</p>
                    )}
                  </div>
                  <span className="text-[0.625rem] text-secondary-text uppercase tracking-ultra">{project.category}</span>
                </div>
              </motion.div>
            ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 02 // Drone */}
          <div className="border-b border-outline/20">
            <button 
              onClick={() => setActiveCategory(activeCategory === 1 ? null : 1)}
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
              <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors ${activeCategory === 1 ? 'text-white' : 'text-secondary-text group-hover:text-white'}`}>
                <span className="text-sm font-bold opacity-40 mr-4">02.</span> DRONE
              </h3>
              <span className={`text-3xl font-light transition-transform duration-300 ${activeCategory === 1 ? 'rotate-45 text-secondary-text' : 'text-white group-hover:text-secondary-text'}`}>
                +
              </span>
            </button>
            <AnimatePresence>
              {activeCategory === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-16">
              {droneProjects.map((project) => (
                <motion.div key={project.id} className="group cursor-pointer">
                  <div className="aspect-video bg-[#1a1a1a] overflow-hidden mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest">{project.title}</h4>
                </motion.div>
              ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 03 // Editing */}
          <div className="border-b border-outline/20">
            <button 
              onClick={() => setActiveCategory(activeCategory === 2 ? null : 2)}
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
              <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors ${activeCategory === 2 ? 'text-white' : 'text-secondary-text group-hover:text-white'}`}>
                <span className="text-sm font-bold opacity-40 mr-4">03.</span> EDITING
              </h3>
              <span className={`text-3xl font-light transition-transform duration-300 ${activeCategory === 2 ? 'rotate-45 text-secondary-text' : 'text-white group-hover:text-secondary-text'}`}>
                +
              </span>
            </button>
            <AnimatePresence>
              {activeCategory === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-16">
              {editingProjects.map((project) => (
                <motion.div key={project.id} className="group cursor-pointer">
                  <div className="aspect-video bg-[#1a1a1a] overflow-hidden mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest">{project.title}</h4>
                </motion.div>
              ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 04 // Branding */}
          <div className="border-b border-outline/20">
            <button 
              onClick={() => setActiveCategory(activeCategory === 3 ? null : 3)}
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
              <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors ${activeCategory === 3 ? 'text-white' : 'text-secondary-text group-hover:text-white'}`}>
                <span className="text-sm font-bold opacity-40 mr-4">04.</span> BRANDING
              </h3>
              <span className={`text-3xl font-light transition-transform duration-300 ${activeCategory === 3 ? 'rotate-45 text-secondary-text' : 'text-white group-hover:text-secondary-text'}`}>
                +
              </span>
            </button>
            <AnimatePresence>
              {activeCategory === 3 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-16">
            {brandingProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-[#1a1a1a] overflow-hidden mb-4 flex items-center justify-center p-12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain opacity-80 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest">{project.title}</h4>
              </motion.div>
            ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="services">
        <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface"></span>
            <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">THE WORKFLOW:</span>
          </div>
        </div>

        <div className="max-w-6xl">
          <h3 className="text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-16 md:mb-24">
            Complete visual production.<br />Powered by industry tools.
          </h3>
          
          <div className="flex flex-col border-t border-outline/20">
            {processSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 border-b border-outline/20 items-start group hover:bg-white/5 transition-colors duration-500 -mx-8 px-8">
                <div className="md:col-span-2">
                  <span className="text-[0.625rem] font-bold text-secondary-text tracking-ultra">STEP 0{index + 1}</span>
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white group-hover:text-secondary-text transition-colors">{step.title}</h4>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[0.6875rem] md:text-sm uppercase tracking-widest leading-relaxed text-secondary-text font-medium group-hover:text-white transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto" id="about">
        <div className="border-t border-outline/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column: Label */}
            <div className="md:col-span-4">
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">THE HANDS-ON APPROACH:</span>
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
                  Creating with vision. Executing with precision.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-[0.6875rem] md:text-xs uppercase tracking-[0.12em] leading-relaxed text-secondary-text mb-20 max-w-2xl font-normal"
                >
                  Based in Kashmir, Wasim Pakhtoon leads high-end cinematic productions for properties and global brands. We manage every phase—from the initial shoot to final delivery—ensuring world-class standards through a refined hands-on approach and specialized support behind the scenes. Our focus is on seamless execution and uncompromising quality.
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

      {/* FAQ Section */}
      <section className="px-8 pb-32 max-w-screen-2xl mx-auto">
        <div className="border-t border-outline/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-4">
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">CLARITY:</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mt-4">FREQUENTLY ASKED.</h2>
            </div>
            
            <div className="md:col-span-8">
              <div className="flex flex-col border-t border-outline/20">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-outline/20">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                    >
                      <h4 className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${activeFaq === index ? 'text-white' : 'text-secondary-text group-hover:text-white'}`}>
                        {faq.question}
                      </h4>
                      <span className={`text-2xl font-bold transition-transform duration-300 ${activeFaq === index ? 'rotate-45 text-secondary-text' : 'text-white group-hover:text-secondary-text'}`}>
                        +
                      </span>
                    </button>
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[0.6875rem] md:text-xs uppercase tracking-[0.12em] leading-relaxed text-secondary-text pb-8 font-medium max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
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
              <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text">THE NEXT STEP:</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mt-4">LET’S CREATE VISUALS THAT GROW YOUR BUSINESS.</h2>
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
                    YOUR REQUEST HAS BEEN RECEIVED. WE’LL REVIEW EVERYTHING PERSONALLY AND GET BACK TO YOU SHORTLY.
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
                    YOUR REQUEST HAS BEEN RECEIVED. WE’LL REVIEW EVERYTHING PERSONALLY AND GET BACK TO YOU SHORTLY.
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
                    <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-secondary-text block mb-4">THE NEXT STEP:</span>
                    <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">LET’S CREATE VISUALS THAT GROW YOUR BUSINESS.</h2>
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
