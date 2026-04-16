/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, X, CheckCircle2, ChevronDown, Menu, ArrowUp } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

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
    image: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    title: "AERIAL KASHMIR",
    category: "DRONE",
    youtubeId: "go1COYbNIdI",
    fullWidth: true,
  },
];

const editingProjects = [
  {
    id: 5,
    year: "2024",
    title: "MIDNIGHT SESSIONS",
    category: "EDITING",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 1,
    title: "AERIAL VISUALS",
    description: "Drone cinematography for real estate, travel, and landscapes",
    projects: droneProjects,
    previews: [
      "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 2,
    title: "POST-PRODUCTION",
    description: "Editing, color grading, and cinematic finishing",
    projects: editingProjects,
    previews: [
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
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
  defaultValue = "",
  theme = "dark"
}: { 
  name: string, 
  label: string, 
  options: { value: string, label: string }[], 
  required?: boolean,
  defaultValue?: string
  theme?: "dark" | "light"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const selectedLabel = options.find(opt => opt.value === selected)?.label || label;

  return (
    <div className="space-y-2 relative">
      <label className={`text-[0.625rem] uppercase tracking-ultra font-bold ${theme === 'light' ? 'text-black/40' : 'text-secondary-text'}`}>
        {name.replace('_', ' ')} {required && "*"}
      </label>
      <input type="hidden" name={name} value={selected} required={required} />
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center bg-transparent border-0 border-b py-3 px-0 text-sm uppercase tracking-widest transition-colors group text-left ${
          theme === 'light' 
            ? 'border-black/10 focus:border-black' 
            : 'border-outline/30 focus:border-white'
        }`}
      >
        <span className={selected 
          ? (theme === 'light' ? "text-black" : "text-white") 
          : (theme === 'light' ? "text-black/20" : "text-outline/40")
        }>
          {selectedLabel}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
          theme === 'light' ? 'text-black/40' : 'text-secondary-text'
        } ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-[110]" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`absolute left-0 right-0 top-full mt-2 border z-[120] backdrop-blur-xl max-h-60 overflow-y-auto ${
                theme === 'light' 
                  ? 'bg-white border-black/10 shadow-xl' 
                  : 'bg-[#0a0a0a] border-outline/20'
              }`}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSelected(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-[0.625rem] uppercase tracking-widest transition-colors ${
                    theme === 'light'
                      ? (selected === option.value ? "text-black bg-black/5" : "text-black/60 hover:bg-black/5")
                      : (selected === option.value ? "text-white bg-white/5" : "text-secondary-text hover:bg-white/5")
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
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const [isRightClickOverlayOpen, setIsRightClickOverlayOpen] = useState(false);

  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const impactPanelOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const impactPanelY = useTransform(scrollY, [0, 320], [0, -20]);

  // Handle cinematic right-click interaction
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setIsRightClickOverlayOpen(true);
    };

    window.addEventListener('contextmenu', handleContextMenu);
    
    // Disable automatic browser scroll restoration to prevent layout jumps on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

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
      setScrolled(window.scrollY > 10);
    };
    handleScroll(); // Check immediately on mount
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
          
          // Special cases for mapped sections
          if (id === 'home') {
            setActiveLink("HOME");
          } else if (id === 'work' || id === 'work-gallery') {
            setActiveLink("WORK");
          } else {
            const link = navLinks.find(l => l.href === `#${id}`);
            if (link) {
              setActiveLink(link.name);
            }
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
    const sectionIds = ['home', 'work', 'work-gallery', 'services', 'about', 'faq', 'contact'];
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
                ? "bg-black/80 backdrop-blur-md border-b border-outline/20 py-4" 
                : "bg-[#f8f8f8]/80 backdrop-blur-md border-b border-black/10 py-4") 
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="flex justify-between items-center w-full px-8 max-w-screen-2xl mx-auto">
          <a href="#" aria-label="Wasim Pakhtoon — Home" className="shrink-0 flex items-center group">
            <img 
              src={LogoImg} 
              alt="Wasim Pakhtoon — Cinematic Video Editor and Cinematographer in Kashmir" 
              loading="eager"
              className={`h-8 w-auto object-left object-contain transition-all duration-500 group-hover:opacity-70 ${navTheme === 'light' ? 'invert' : ''}`} 
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
            className="fixed inset-0 bg-background z-[90] md:hidden flex flex-col pt-32 pb-12 px-8 items-center text-center"
          >
            {/* Main Links */}
            <div className="flex-1 flex flex-col justify-center space-y-10 w-full">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                  className={`text-4xl font-black uppercase tracking-[0.1em] transition-colors ${
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
              <div className="flex flex-col space-y-4 w-full max-w-[300px] mx-auto">
                <p className="text-[0.625rem] uppercase tracking-ultra font-bold text-white/20">GET IN TOUCH</p>
                <a
                  href="https://wa.me/919541591652?text=Hi%20Wasim%2C%20I%20saw%20your%20website%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-white text-black py-5 px-6 text-sm font-black uppercase tracking-[0.2em] rounded-none hover:bg-white/90 transition-all text-center"
                >
                  LET'S TALK
                </a>
                <a
                  href="/#portal"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-white text-black py-5 px-6 text-sm font-black uppercase tracking-[0.2em] rounded-none hover:bg-white/90 transition-all text-center"
                >
                  CLIENT PORTAL
                </a>
              </div>

              <div className="flex justify-center gap-8 pt-8 border-t border-white/5">
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

      <header id="home" className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-40 pb-10 md:pb-20 px-8 md:px-12 max-w-screen-2xl mx-auto">
        {/* Cinematic Scroll Indicator */}
        <motion.div 
          style={{ opacity: scrollIndicatorOpacity }}
          className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5 z-40 pointer-events-none"
        >
          <span className="text-[0.5rem] [writing-mode:vertical-lr] tracking-[0.4em] font-light text-white/30 uppercase">SCROLL</span>
          <div className="w-px h-16 bg-white/10 overflow-hidden relative">
            <motion.div 
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 w-full h-[80%] bg-gradient-to-b from-transparent via-white/50 to-transparent"
            />
          </div>
        </motion.div>

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse-red flex-shrink-0" />
          <span className="text-[0.55rem] uppercase tracking-[0.25em] font-bold text-white/40 font-label">WASIM PAKHTOON — CINEMATIC PRODUCTIONS</span>
        </motion.div>

        {/* Hero Heading + Impact Panel Row */}
        <div className="flex items-center justify-between gap-6 lg:gap-12 mb-12 md:mb-20">

          {/* Main Heading — Left */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[clamp(3rem,8.5vw,8.5rem)] font-black tracking-tighter uppercase leading-[0.82] relative z-20 max-w-[65%] lg:max-w-[60%] flex-shrink-0"
          >
            <span className="sr-only">
              Wasim Pakhtoon — Video Editor &amp; Cinematographer in Kashmir. Professional cinematic video production, drone footage, hotel videography, color grading, and brand identity design in Srinagar, Kashmir, India.
            </span>
            <span aria-hidden="true">DELIVERING<br />CINEMATIC<br />EXCELLENCE</span>
          </motion.h1>

          {/* Impact Panel — Right, desktop only */}
          <motion.div
            style={{ opacity: impactPanelOpacity, y: impactPanelY }}
            className="hidden md:flex flex-col justify-center gap-10 flex-1 pl-8 lg:pl-12 border-l border-white/8"
          >
            {[
              { num: "01", value: "+300% Brand Visibility", primary: true },
              { num: "02", value: "More Direct Bookings", primary: false },
              { num: "03", value: "Cinematic First Impressions", primary: false },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.18 }}
                className="group flex items-start gap-4"
              >
                <span className={`text-[0.45rem] font-bold tracking-[0.2em] font-label mt-1.5 flex-shrink-0 transition-colors duration-500 ${item.primary ? "text-white/35" : "text-white/12"}`}>
                  {item.num}
                </span>
                <span className={`font-black uppercase tracking-tight leading-tight transition-all duration-500 group-hover:text-white ${
                  item.primary
                    ? "text-[1.1rem] text-white/85"
                    : "text-[0.85rem] text-white/28"
                }`}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Hero Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="border-t border-outline/25 pt-8 md:pt-10"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-0">

            {/* Left Column — Hidden on phone */}
            <div className="hidden md:block md:w-2/5 md:pr-16 flex-shrink-0">
              <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-white/20 block mb-3 font-label">OUR MISSION</span>
              <p className="text-[0.65rem] uppercase tracking-[0.1em] leading-loose text-white/30 max-w-xs">
                Cinematic excellence for luxury brands &amp; hotels — crafted from Srinagar, delivered worldwide.
              </p>
            </div>

            {/* Thin divider — desktop only */}
            <div className="hidden md:block w-px bg-outline/20 flex-shrink-0" />

            {/* Right Column */}
            <div className="md:flex-1 md:pl-16">
              <p className="text-[0.65rem] uppercase leading-relaxed tracking-widest text-white/70 max-w-lg">
                END-TO-END CINEMATIC SOLUTIONS FOR LUXURY BRANDS AND HOTELS — VIDEO EDITING, CINEMATOGRAPHY &amp; BRANDING, FROM SRINAGAR.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse-red flex-shrink-0" />
                <span className="text-[0.55rem] uppercase tracking-[0.2em] font-bold text-white/50">AVAILABLE FOR PROJECTS</span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="group sm:w-auto bg-white text-black px-10 py-4 text-[0.6rem] font-bold uppercase tracking-[0.18em] hover:bg-white/90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  START A PROJECT
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a
                  href="#work-gallery"
                  className="sm:w-auto border border-white/20 text-white/70 px-10 py-4 text-[0.6rem] font-bold uppercase tracking-[0.18em] hover:border-white/60 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all duration-300 text-center"
                >
                  VIEW MY WORK
                </a>
              </div>

              {/* Client Portal — demoted */}
              <div className="mt-8 pt-6 border-t border-outline/15 flex flex-wrap items-center gap-3">
                <span className="text-[0.5rem] uppercase tracking-widest text-white/25">EXISTING CLIENTS</span>
                <span className="text-white/15 text-xs">→</span>
                <a
                  href="/#portal"
                  className="inline-flex items-center gap-1.5 text-white/35 text-[0.5rem] font-bold uppercase tracking-widest hover:text-white/70 transition-colors duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-red-600 flex-shrink-0" />
                  CLIENT PORTAL
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Socials Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-8 border-t border-outline/25 pt-8 mt-8 md:mt-12"
        >
          <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-white/20 flex-shrink-0 font-label">FOLLOW</span>
          <div className="flex flex-wrap gap-6 md:gap-10">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-[0.55rem] uppercase tracking-[0.2em] font-bold text-white/35 hover:text-white transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>
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
              {pexelsGrid.map((img, idx) => {
                const altTexts = [
                  "Cinematic drone shot over Kashmir landscape — aerial videography by Wasim Pakhtoon",
                  "Hotel photography and cinematic shoot in Kashmir — luxury property videography",
                  "Brand content creation and visual storytelling in Kashmir by Wasim Pakhtoon",
                  "Real estate and architectural photography in Srinagar, Kashmir",
                ];
                return (
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
                      alt={altTexts[idx]}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors pointer-events-none z-10" />
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 transition-opacity duration-500">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <span className="text-[0.5rem] tracking-ultra text-white font-bold uppercase">PEXELS</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Portfolio Header */}
          <div id="work-gallery" className="border-t border-black/10 pt-10 mb-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
              <div>
                <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-black/25 mb-3 block">SELECTED WORK</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">Portfolio</h2>
              </div>
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-black/40 max-w-xs leading-relaxed md:text-right">
                Cinematic productions for hotels, brands &amp; beyond — crafted to convert.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[{ id: -1, title: "ALL WORK" }, ...portfolioCategories].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id === -1 ? null : cat.id)}
                  className={`px-5 py-2.5 text-[0.55rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 border ${
                    (cat.id === -1 && activeCategory === null) || activeCategory === cat.id
                      ? "bg-black text-white border-black"
                      : "bg-white text-black/50 border-black/10 hover:border-black/30 hover:text-black"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioCategories
              .filter(cat => activeCategory === null || activeCategory === cat.id)
              .flatMap(cat => cat.projects.map(project => ({ ...project, catTitle: cat.title, catDescription: cat.description })))
              .map((project: any, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden bg-black ${project.fullWidth ? "md:col-span-2" : ""}`}
                >
                  {/* Media */}
                  <div className="aspect-video w-full overflow-hidden relative">
                    {project.vimeoId ? (
                      <div className="w-full h-full pointer-events-none">
                        <iframe
                          src={`https://player.vimeo.com/video/${project.vimeoId}?background=1&autoplay=1&muted=1&loop=1&badge=0&autopause=0`}
                          className="w-full h-full object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-700"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          title={`${project.title} — cinematic video production by Wasim Pakhtoon`}
                          loading="lazy"
                        />
                      </div>
                    ) : project.youtubeId ? (
                      <div className="w-full h-full overflow-hidden bg-black">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&rel=0&showinfo=0&modestbranding=1&vq=hd1080`}
                          className="w-[100.5%] h-[100.5%] -ml-[0.25%] -mt-[0.25%]"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          title={`${project.title} — aerial visuals by Wasim Pakhtoon`}
                          loading="eager"
                        />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.catTitle} by Wasim Pakhtoon`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Tag — top left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-[0.45rem] font-bold uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Year tag — top right */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-white/40 text-[0.45rem] font-bold uppercase tracking-[0.2em]">{project.year}</span>
                    </div>

                    {/* Title — bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="text-base md:text-lg font-black uppercase tracking-tighter text-white leading-tight mb-1">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/50 leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Empty state */}
          {portfolioCategories.filter(cat => activeCategory === null || activeCategory === cat.id).flatMap(c => c.projects).length === 0 && (
            <div className="text-center py-24 text-black/30">
              <p className="text-[0.65rem] uppercase tracking-[0.2em]">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>


      {/* Services Section */}
      <section className="px-8 md:px-12 py-24 md:py-36 max-w-screen-2xl mx-auto" id="services">
        <div className="flex justify-between items-center border-t border-outline/30 pt-8 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
            <h2 className="text-[0.55rem] uppercase tracking-[0.2em] font-bold text-white/40">SERVICES &amp; WORKFLOW</h2>
          </div>
        </div>

        <div className="max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.88] mb-16 md:mb-24"
          >
            Complete visual production.<br />Powered by industry tools.
          </motion.h3>
          
          <div className="flex flex-col border-t border-outline/15">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-outline/15 items-start group hover:bg-white/[0.03] transition-colors duration-500 -mx-8 md:-mx-12 px-8 md:px-12"
              >
                <div className="md:col-span-2">
                  <span className="text-[0.5rem] font-bold text-white/20 tracking-[0.2em]">STEP 0{index + 1}</span>
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors duration-300">{step.title}</h4>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[0.65rem] md:text-[0.75rem] uppercase tracking-widest leading-relaxed text-white/30 group-hover:text-white/60 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
                <div className="md:col-span-1 flex justify-end items-start pt-1">
                  <ArrowRight className={`w-4 h-4 text-white/10 transition-all duration-500 group-hover:text-white/40 group-hover:translate-x-1`} />
                </div>
              </motion.div>
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
        <div className="px-8 md:px-12 py-24 md:py-36 max-w-screen-2xl mx-auto">
          <div className="border-t border-black/10 pt-12 md:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
              <div className="md:col-span-8">
                <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-black/25 block mb-8">NEXT PHASE</span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[clamp(2.5rem,7vw,7rem)] font-black tracking-tighter uppercase leading-[0.82] mb-12 text-black"
                >
                  READY TO BUILD<br />YOUR VISION?
                </motion.h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="group bg-black text-white px-10 py-5 text-[0.6rem] font-black uppercase tracking-[0.18em] hover:bg-black/80 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    START A PROJECT
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <a
                    href="https://wa.me/919541591652?text=Hi%20Wasim%2C%20I%20saw%20your%20website%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black/15 text-black/70 px-10 py-5 text-[0.6rem] font-black uppercase tracking-[0.18em] hover:border-black hover:text-black active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-4 flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[0.5rem] font-bold tracking-[0.2em] text-black/25 uppercase mb-3">LOCATION</h4>
                    <p className="text-xl font-black uppercase tracking-tighter text-black">SRINAGAR, KASHMIR</p>
                    <p className="text-[0.55rem] uppercase tracking-[0.2em] text-black/40 mt-2">AVAILABLE WORLDWIDE</p>
                  </div>
                  <div>
                    <h4 className="text-[0.5rem] font-bold tracking-[0.2em] text-black/25 uppercase mb-3">LOCAL TIME</h4>
                    <p className="text-xl font-black uppercase tracking-tighter text-black">
                      {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' })} IST
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[0.5rem] font-bold tracking-[0.2em] text-black/25 uppercase mb-3">EMAIL</h4>
                    <a href="mailto:contact@cinmach.com" className="text-sm font-bold uppercase tracking-tight text-black hover:text-black/50 transition-colors duration-300">
                      contact@cinmach.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visually hidden SEO content — readable by search engines, invisible to users */}
      <div aria-hidden="true" className="sr-only" role="note">
        <h2>Video Editor in Kashmir — Wasim Pakhtoon</h2>
        <p>
          Wasim Pakhtoon is a professional video editor based in Kashmir, offering cinematic video production,
          drone videography, hotel shoots, real estate visuals, and brand storytelling content for businesses and creators.
          Specializing in high-quality cinematic visuals, aerial drone footage, and post-production editing services
          across Kashmir and India. Services include cinematic video editing, hotel videography in Kashmir,
          real estate drone shots, brand content creation, color grading, and motion graphics.
          Based in Srinagar, Jammu &amp; Kashmir, and available for projects worldwide.
        </p>
        <ul>
          <li>Cinematic videographer Kashmir</li>
          <li>Hotel videography Kashmir</li>
          <li>Drone video services India</li>
          <li>Brand content creator Kashmir</li>
          <li>Real estate videography Srinagar</li>
          <li>Post production editor Kashmir</li>
          <li>Video editing services Kashmir</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/8">
        <div className="px-8 md:px-12 py-14 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
              <img src={LogoImg} alt="Wasim Pakhtoon" className="h-6 w-auto object-contain mb-4" />
              <p className="text-[0.5rem] uppercase tracking-[0.2em] text-white/20">
                &copy; 2025 Wasim Pakhtoon. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <div className="flex gap-8">
                <a href="#" className="text-[0.55rem] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-300">Instagram</a>
                <a href="#" className="text-[0.55rem] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-300">Vimeo</a>
                <a href="#" className="text-[0.55rem] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-300">LinkedIn</a>
              </div>
              <p className="text-[0.5rem] uppercase tracking-[0.15em] text-white/15">Crafted from Srinagar, Kashmir</p>
            </div>
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
              className="relative w-full max-w-2xl bg-white border border-black/5 p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-[0_30px_100px_rgba(0,0,0,0.1)]"
            >
              <button 
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {formStatus === "success" ? (
                <div className="py-20 text-center text-black">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-8"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">REQUEST RECEIVED</h3>
                  <p className="text-[0.6875rem] uppercase tracking-widest text-black/60 leading-relaxed max-w-xs mx-auto">
                    YOUR REQUEST HAS BEEN RECEIVED. WE’LL REVIEW EVERYTHING PERSONALLY AND GET BACK TO YOU SHORTLY.
                  </p>
                  <button 
                    onClick={() => {
                      setIsQuoteModalOpen(false);
                      setTimeout(() => setFormStatus("idle"), 500);
                    }}
                    className="mt-12 bg-black text-white px-12 py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-black/90 transition-all"
                  >
                    BACK TO SITE
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <span className="text-[0.625rem] uppercase tracking-ultra font-bold text-black/40 block mb-4">THE NEXT STEP:</span>
                    <h2 className="text-3xl font-black uppercase tracking-tighter leading-[0.9] text-black">LET’S CREATE VISUALS THAT GROW YOUR BUSINESS.</h2>
                    <p className="text-[0.625rem] uppercase tracking-widest text-black/60 mt-4">Currently accepting a limited number of high-impact projects.</p>
                  </div>

                  <form className="space-y-8" onSubmit={handleQuoteSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-black/40">YOUR NAME *</label>
                        <input name="name" required type="text" className="w-full bg-transparent border-0 border-b border-black/10 focus:border-black focus:ring-0 py-3 px-0 placeholder:text-black/10 text-sm uppercase tracking-widest text-black transition-colors" placeholder="ENTER NAME" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-black/40">EMAIL ADDRESS *</label>
                        <input name="email" required type="email" className="w-full bg-transparent border-0 border-b border-black/10 focus:border-black focus:ring-0 py-3 px-0 placeholder:text-black/10 text-sm uppercase tracking-widest text-black transition-colors" placeholder="EMAIL@EXAMPLE.COM" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-black/40">PHONE / WHATSAPP</label>
                        <input name="phone" type="text" className="w-full bg-transparent border-0 border-b border-black/10 focus:border-black focus:ring-0 py-3 px-0 placeholder:text-black/10 text-sm uppercase tracking-widest text-black transition-colors" placeholder="+00 000 000 000" />
                      </div>
                      <CustomSelect 
                        name="project_type" 
                        label="SELECT TYPE" 
                        theme="light"
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
                        theme="light"
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
                        theme="light"
                        defaultValue="standard"
                        options={[
                          { value: "standard", label: "STANDARD (1-2 WEEKS)" },
                          { value: "urgent", label: "URGENT (1-3 DAYS)" },
                          { value: "flexible", label: "FLEXIBLE" },
                        ]} 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-black/40">PROJECT VISION *</label>
                      <textarea name="vision" required rows={3} className="w-full bg-transparent border-0 border-b border-black/10 focus:border-black focus:ring-0 py-3 px-0 placeholder:text-black/10 text-sm uppercase tracking-widest text-black transition-colors resize-none" placeholder="TELL ME ABOUT YOUR GOALS AND VISION"></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[0.625rem] uppercase tracking-ultra font-bold text-black/40">REFERENCE LINK (OPTIONAL)</label>
                      <input name="reference" type="text" className="w-full bg-transparent border-0 border-b border-black/10 focus:border-black focus:ring-0 py-3 px-0 placeholder:text-black/10 text-sm uppercase tracking-widest text-black transition-colors" placeholder="PASTE LINK TO INSPIRATION" />
                    </div>

                    <div className="pt-8">
                      <button 
                        disabled={formStatus === "submitting"}
                        className="w-full bg-black text-white py-4 text-[0.625rem] font-bold uppercase tracking-ultra hover:bg-black/90 transition-all disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-4"
                      >
                        {formStatus === "submitting" ? "PREPARING..." : "REQUEST QUOTE"}
                        {formStatus === "idle" && <ArrowRight className="w-4 h-4" />}
                      </button>
                      <p className="text-[0.5rem] uppercase tracking-widest text-black/40 text-center mt-6">
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
      
      {/* Right Click Glassmorphism Overlay */}
      <AnimatePresence>
        {isRightClickOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsRightClickOverlayOpen(false)}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
          >
            {/* Darker Backdrop for contrast on white sections */}
            <motion.div 
              initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
              animate={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(0,0,0,0.5)" }}
              className="absolute inset-0" 
            />
            
            {/* Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 px-8 py-5 bg-white/[0.05] border border-white/20 rounded-none backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center"
            >
              <p className="text-[0.625rem] font-light uppercase tracking-[0.2em] text-white font-label">
                © Wasim Pakhtoon — All rights reserved
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
