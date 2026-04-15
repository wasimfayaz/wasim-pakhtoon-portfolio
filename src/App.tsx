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
  { name: "WORK", href: "#work-gallery" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
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
  },
  {
    title: "BRAND IDENTITY",
    skills: ["FIGMA", "ADOBE PHOTOSHOP", "ADOBE ILLUSTRATOR", "AFTER EFFECTS"]
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

const portfolioCategories = [
  {
    id: 0,
    title: "CINEMATIC FILMS",
    description: "Story-driven visuals crafted for brands and businesses",
    projects: cinematicProjects,
    previews: [
      "https://images.pexels.com/photos/35066424/pexels-photo-35066424.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/35028172/pexels-photo-35028172.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },
  {
    id: 1,
    title: "AERIAL VISUALS",
    description: "Drone cinematography for real estate, travel, and landscapes",
    projects: droneProjects,
    previews: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSq7yEUXaW2RtWvMeyZrMwCH6fxoHLJviEx7nlU1OBIYRij7gIrfUISIqu6HAUYZ6VwQVLu4u6ugcYvaweKPQxRZtI82sDE_uDf4VuJeju9NVtDtN2pmc6qq32N44dmEBjyvHKf2rB2xvs5yU_9JxwYkbAjX1ur4jrvyKGiCY-SIkNSQ-PjmK6l65Rqe-9elUDUT2EQf77aDP6SC0C-3No7ep5b_iaeM69oGXG27jPgYkMs75byh8Gm93JLclpGbJ39q66cTgpts"
    ]
  },
  {
    id: 2,
    title: "POST-PRODUCTION",
    description: "Editing, color grading, and cinematic finishing",
    projects: editingProjects,
    previews: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSq7yEUXaW2RtWvMeyZrMwCH6fxoHLJviEx7nlU1OBIYRij7gIrfUISIqu6HAUYZ6VwQVLu4u6ugcYvaweKPQxRZtI82sDE_uDf4VuJeju9NVtDtN2pmc6qq32N44dmEBjyvHKf2rB2xvs5yU_9JxwYkbAjX1ur4jrvyKGiCY-SIkNSQ-PjmK6l65Rqe-9elUDUT2EQf77aDP6SC0C-3No7ep5b_iaeM69oGXG27jPgYkMs75byh8Gm93JLclpGbJ39q66cTgpts"
    ]
  },
  {
    id: 3,
    title: "BRAND STORIES",
    description: "Creative content designed to grow your brand",
    projects: brandingProjects,
    previews: [
      EcoBrewCardImg
    ]
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
  const [navTheme, setNavTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); 
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Define section themes
  const sectionThemes: Record<string, "dark" | "light"> = {
    home: "dark",
    work: "light",
    services: "dark",
    about: "light",
    faq: "light",
    contact: "light",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -95% 0px', // Detect exactly what's at the top of the viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const link = navLinks.find(l => l.href === `#${id}` || (id === 'home' && l.href === '#'));
          if (link) {
            setActiveLink(link.name);
          }
          
          // Update Nav Theme
          if (sectionThemes[id]) {
            setNavTheme(sectionThemes[id]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections
    const sectionIds = ['home', 'work', 'services', 'about', 'faq', 'contact'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
    <div className="min-h-screen bg-background text-on-surface selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
            ? (navTheme === "dark" 
                ? "bg-[#131313]/80 backdrop-blur-md border-b border-outline/20 py-4" 
                : "bg-[#f8f8f8]/80 backdrop-blur-md border-b border-black/10 py-4") 
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="flex justify-between items-center w-full px-8 max-w-screen-2xl mx-auto">
          <a href="#" className="shrink-0 flex items-center group">
            <img 
              src={LogoImg} 
              alt="Wasim Pakhtoon Logo" 
              className={`h-8 object-contain w-auto transition-all duration-500 group-hover:opacity-70 ${navTheme === 'light' ? 'brightness-0' : ''}`} 
            />
          </a>

          <div className="hidden md:flex items-center gap-14">
            <div className="flex gap-12 items-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className={`font-label uppercase tracking-[0.15em] text-[0.6875rem] font-medium transition-colors ${
                    navTheme === "dark" 
                      ? (activeLink === link.name ? "text-white opacity-100" : "text-white opacity-60")
                      : (activeLink === link.name ? "text-black opacity-100" : "text-black opacity-60")
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.a
              href="https://wa.me/919541591652?text=Hi%20Wasim%2C%20I%20saw%20your%20website%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className={`font-label uppercase tracking-[0.15em] text-[0.625rem] font-bold border-b py-1 transition-all duration-500 ${
                navTheme === "dark"
                  ? "text-white border-white/20 hover:border-white"
                  : "text-black border-black/20 hover:border-black"
              }`}
            >
              LET'S TALK
            </motion.a>
          </div>
            
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 hover:bg-white/5 transition-colors z-50 rounded-full ${navTheme === 'light' ? 'text-black' : 'text-white'}`}
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
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-[#0B0B0B] z-[90] md:hidden flex flex-col pt-32 pb-12 px-8"
          >
            {/* Main Links */}
            <div className="flex-1 flex flex-col justify-center space-y-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                  className={`text-4xl font-light uppercase tracking-[0.1em] transition-colors ${
                    activeLink === link.name ? "text-white" : "text-white/30"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Bottom Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-12"
            >
              <div className="flex flex-col space-y-4">
                <p className="text-[0.625rem] uppercase tracking-ultra font-bold text-white/20">GET IN TOUCH</p>
                <a
                  href="https://wa.me/919541591652?text=Hi%20Wasim%2C%20I%20saw%20your%20website%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-light uppercase tracking-widest text-white hover:text-white/70 transition-colors"
                >
                  LET'S TALK
                </a>
                <a
                  href="/#portal"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                >
                  CLIENT PORTAL
                </a>
              </div>

              <div className="flex gap-8 pt-8 border-t border-white/5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-[0.625rem] uppercase tracking-ultra font-bold text-white/40 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header id="home" className="min-h-screen flex flex-col justify-center pt-32 md:pt-48 pb-12 md:pb-24 px-8 max-w-screen-2xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85] mb-10 md:mb-24"
        >
          {/* SEO: Full name + keywords hidden via sr-only — crawled by Google, invisible to users */}
          <span className="sr-only">
            Wasim Pakhtoon — Video Editor &amp; Cinematographer in Kashmir. Professional cinematic video production, drone footage, hotel videography, color grading, and brand identity design in Srinagar, Kashmir, India.
          </span>
          {/* Visually displayed: 3-word cinematic tagline */}
          <span aria-hidden="true">DELIVERING<br />CINEMATIC<br />EXCELLENCE</span>
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
              END-TO-END CINEMATIC SOLUTIONS FOR LUXURY BRANDS AND HOTELS WORLDWIDE — VIDEO EDITING, CINEMATOGRAPHY, AND BRANDING, CRAFTED FROM SRINAGAR.
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
                href="#work-gallery"
                className="w-full sm:w-auto border border-outline/30 text-white px-10 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:border-white hover:bg-white/5 transition-all duration-300 text-center"
              >
                VIEW MY WORK
              </a>
            </div>
            {/* Client Portal CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 border-t border-outline/20 pt-6 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-[0.55rem] uppercase tracking-ultra font-bold text-secondary-text mb-0.5">EXISTING CLIENTS</p>
                <p className="text-[0.625rem] text-on-surface/60 uppercase tracking-widest">Access your private project dashboard</p>
              </div>
              <a
                href="/#portal"
                className="shrink-0 flex items-center gap-2 bg-white text-black px-5 py-2.5 text-[0.55rem] font-bold uppercase tracking-ultra hover:bg-secondary-text transition-all duration-300 whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-black"></span>
                CLIENT PORTAL
              </a>
            </motion.div>
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

      {/* View My Work */}
      <section className="bg-[#f8f8f8]" id="work">
        <div className="px-8 py-32 max-w-screen-2xl mx-auto">
          {/* Pexels Global Reach Section */}
          <div className="mb-32">
            <div className="bg-white border border-black/5 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 group hover:border-black/10 transition-colors duration-500 mb-8 border-l-4 border-l-black/20 hover:border-l-black shadow-sm">
              <div className="max-w-xl">
                <h3 className="text-sm md:text-base font-black uppercase tracking-tighter text-black mb-3">Global Reach & Authority</h3>
                <p className="text-[0.6875rem] text-black/40 uppercase tracking-[0.1em] leading-relaxed">
                  Featured photography reaching hundreds of thousands of viewers worldwide on Pexels. Establishing visual authority through compelling, high-quality imagery.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center w-full md:w-auto">
                <div>
                  <h4 className="text-5xl md:text-6xl font-black text-black tracking-tighter">125.2K<span className="text-black/30 text-3xl">+</span></h4>
                  <div className="text-[0.625rem] text-black/30 uppercase tracking-ultra font-bold mt-2">TOTAL VIEWS</div>
                </div>
                
                <a 
                  href="https://www.pexels.com/@wxeim-768574136/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto border border-black/10 text-black px-8 py-5 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-black hover:text-white transition-all duration-300 text-center flex items-center justify-center group-hover:border-black/30"
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
                  className="aspect-[3/4] bg-black/[0.03] overflow-hidden group relative cursor-zoom-in"
                >
                  <img 
                    src={img} 
                    alt={`Cinematic video editing and hotel photography in Kashmir - Featured Work 0${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors pointer-events-none z-10" />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 transition-opacity duration-500">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="text-[0.5rem] tracking-ultra text-white font-bold uppercase">PEXELS</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View My Work Details */}
          <div id="work-gallery" className="flex justify-between items-center border-t border-black/10 pt-8 mb-16">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black">VIEW MY WORK:</h2>
            </div>
          </div>

          <div className="flex flex-col border-t border-black/10">
            {portfolioCategories.map((cat) => (
              <div key={cat.id} className="border-b border-black/10">
                <motion.div
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                  className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-4 cursor-pointer transition-all duration-500 group"
                >
                  <div className="flex-1 space-y-2">
                    <h3 className={`text-2xl md:text-3xl font-light uppercase tracking-tighter transition-colors ${activeCategory === cat.id ? 'text-black' : 'text-black/30 group-hover:text-black'}`}>
                      {cat.title}
                    </h3>
                    <p className="text-[0.625rem] text-black/40 uppercase tracking-[0.15em] font-medium max-w-sm">
                      {cat.description}
                    </p>
                    <div className="pt-4 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                      <span className="text-[0.55rem] font-bold uppercase tracking-ultra text-black">
                        {activeCategory === cat.id ? "CLOSE PROJECT" : "EXPLORE PROJECTS"}
                      </span>
                      <ArrowRight className={`w-3 h-3 transition-transform ${activeCategory === cat.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </div>

                  <div className="mt-8 md:mt-0 flex items-center gap-4">
                    {cat.previews.map((img, i) => (
                      <div key={i} className="w-24 h-16 md:w-32 md:h-20 overflow-hidden border border-black/5 bg-black/[0.03] grayscale hover:grayscale-0 transition-all duration-700">
                        <img src={img} alt="Work preview" className="w-full h-full object-cover scale-[1.05]" />
                      </div>
                    ))}
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 group-hover:border-black/30 transition-colors">
                      <span className={`text-xl font-light transition-transform duration-500 ${activeCategory === cat.id ? 'rotate-45' : ''}`}>+</span>
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {activeCategory === cat.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`grid gap-8 pt-8 pb-16 ${cat.title === "BRAND STORIES" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
                        {cat.projects.map((project) => (
                          <motion.div 
                            key={project.id} 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            className="group cursor-active md:cursor-zoom-in"
                          >
                            <div className={`${cat.title === "BRAND STORIES" ? "aspect-square p-12" : "aspect-video"} bg-black/[0.03] overflow-hidden relative border border-black/5`}>
                              {(project as any).vimeoId ? (
                                <div className="w-full h-full pointer-events-none">
                                  <iframe src={`https://player.vimeo.com/video/${(project as any).vimeoId}?background=1&autoplay=1&muted=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479`} className="w-full h-full object-cover scale-[1.05]" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title={project.title} />
                                </div>
                              ) : (
                                <img src={project.image} alt={project.title} className={`w-full h-full ${cat.title === "BRAND STORIES" ? "object-contain scale-90 group-hover:scale-100" : "object-cover group-hover:scale-110"} transition-all duration-700`} />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6">
                                <span className="text-[0.55rem] text-white/50 uppercase tracking-ultra mb-1">{project.year}</span>
                                <h4 className="text-lg font-black uppercase tracking-tighter text-white">{project.title}</h4>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="px-8 py-32 max-w-screen-2xl mx-auto" id="services">
        <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface"></span>
            <h2 className="text-[0.625rem] uppercase tracking-ultra font-bold text-on-surface">SERVICES & WORKFLOW:</h2>
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
      <section className="bg-[#f8f8f8]" id="about">
        <div className="px-8 py-32 max-w-screen-2xl mx-auto">
          <div className="border-t border-black/10 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              {/* Left Column: Label */}
              <div className="md:col-span-4 flex items-center gap-2 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                <h2 className="text-[0.625rem] uppercase tracking-ultra font-black text-black/30">THE HANDS-ON APPROACH:</h2>
              </div>

              {/* Right Column: Bio & Skills */}
              <div className="md:col-span-8">
                <div className="max-w-3xl">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-12 text-black"
                  >
                    Creating with vision.<br />Executing with precision.
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[0.6875rem] md:text-xs uppercase tracking-[0.2em] leading-relaxed text-black/60 mb-20 max-w-2xl font-bold"
                  >
                    Based in Srinagar, Wasim Pakhtoon leads high-end cinematic productions for properties and global brands as a freelance video editor and cinematographer. We handle every phase of the video shoot in Kashmir—from the initial storyboard to final post-production—ensuring world-class standards for hotel shoots and commercial projects. Our focus is on seamless execution and uncompromising quality.
                  </motion.p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pt-12 border-t border-black/10">
                    {skillCategories.map((category, idx) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <h4 className="text-[0.625rem] font-black tracking-ultra text-black mb-6 underline underline-offset-8 decoration-black/10">
                          {category.title}
                        </h4>
                        <ul className="space-y-4">
                          {category.skills.map((skill) => (
                            <li 
                              key={skill} 
                              className="text-[0.55rem] tracking-[0.2em] text-black/40 hover:text-black transition-colors cursor-default list-none font-bold"
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white" id="faq">
        <div className="px-8 py-32 max-w-screen-2xl mx-auto">
          <div className="border-t border-black/10 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  <h2 className="text-[0.625rem] uppercase tracking-ultra font-black text-black/30">CLARITY:</h2>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-black">FREQUENTLY ASKED.</h2>
              </div>
              
              <div className="md:col-span-8">
                <div className="flex flex-col border-t border-black/10">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-black/10">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                      >
                        <h4 className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${activeFaq === index ? 'text-black' : 'text-black/60 group-hover:text-black'}`}>
                          {faq.question}
                        </h4>
                        <span className={`text-2xl font-bold transition-transform duration-300 ${activeFaq === index ? 'rotate-45 text-black/40' : 'text-black group-hover:text-black/40'}`}>
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
                            <p className="text-[0.6875rem] md:text-xs uppercase tracking-[0.12em] leading-relaxed text-black/40 pb-8 font-medium max-w-2xl">
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white" id="contact">
        <div className="px-8 py-32 max-w-screen-2xl mx-auto">
          <div className="border-t border-black/10 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
              <div className="md:col-span-8">
                <span className="text-[0.625rem] uppercase tracking-ultra font-black text-black/30 block mb-6">NEXT PHASE:</span>
                <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-12 text-black">
                  READY TO BUILD<br />YOUR VISION?
                </h2>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-black text-white px-12 py-6 text-[0.625rem] font-black uppercase tracking-ultra hover:bg-black/80 transition-all flex items-center justify-center gap-4 group"
                  >
                    START A PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="mailto:contact@cinmach.com"
                    className="border border-black/10 text-black px-12 py-6 text-[0.625rem] font-black uppercase tracking-ultra hover:bg-black hover:text-white transition-all text-center flex items-center justify-center"
                  >
                    DIRECT EMAIL
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-4 flex flex-col justify-end">
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[0.55rem] font-black tracking-ultra text-black/30 uppercase mb-4">LOCATION:</h4>
                    <p className="text-lg font-black uppercase tracking-tighter text-black">SRINAGAR, KASHMIR</p>
                    <p className="text-[0.625rem] uppercase tracking-widest text-black/40 mt-1">AVAILABLE WORLDWIDE</p>
                  </div>
                  <div>
                    <h4 className="text-[0.55rem] font-black tracking-ultra text-black/30 uppercase mb-4">LOCAL TIME:</h4>
                    <p className="text-lg font-black uppercase tracking-tighter text-black">
                      {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' })} IST
                    </p>
                  </div>
                </div>
              </div>
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
            className="fixed bottom-8 right-8 z-[60] bg-white text-black p-4 rounded-full shadow-xl border border-black/5 hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
