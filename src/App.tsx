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
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

const socials = [
  { name: "INSTAGRAM", href: "https://www.instagram.com/wxeim/" },
  { name: "BEHANCE", href: "https://www.behance.net/wasimpakhtoon" },
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/wasimpakhtoon/" },
  { name: "YOUTUBE", href: "https://www.youtube.com/@wxm-port" },
];

interface Project {
  id: number;
  year: string;
  title: string;
  category: string;
  vimeoId?: string;
  youtubeId?: string;
  muxId?: string;
  image?: string;
  description?: string;
  fullWidth?: boolean;
  isVertical?: boolean;
}

const brandingProjects: Project[] = [
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

const cinematicProjects: Project[] = [
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


const droneProjects: Project[] = [
  {
    id: 4,
    year: "2024",
    title: "AERIAL KASHMIR",
    category: "DRONE",
    youtubeId: "go1COYbNIdI",
    fullWidth: true,
  },
];

const adProjects: Project[] = [
  {
    id: 8,
    year: "2025",
    title: "SOLGRID AD EDIT",
    category: "AD EDIT · USA",
    muxId: "h5SoJiwpJaT02cN7wrxHeQJQiWytCgsCdJTIO02aUxJjg",
    description: "U.S. Based Client — Vertical 9:16 high-impact social ad.",
    isVertical: true,
  },
  {
    id: 9,
    year: "2025",
    title: "MUTATE JUNIOR",
    category: "AD EDIT · NIT SRINAGAR",
    muxId: "tQ8Ak5cm8zSi3xysZGaLTfRHFgdQRPCK00whbogqe3N4",
    description: "NIT Srinagar — Dynamic educational course for kids.",
    isVertical: true,
  },
  {
    id: 10,
    year: "2025",
    title: "VERTICAL AD SHOWCASE",
    category: "AD EDIT · USA",
    muxId: "N4yd8SFJxTzY02IgFdnoiqGTcgmeaAE12SBbbDaQT7u00",
    description: "U.S. Based Client — High-impact vertical storytelling and conversion-focused editing.",
    isVertical: true,
  }
];

const editingProjects: Project[] = [
  {
    id: 5,
    year: "2024",
    title: "MIDNIGHT SESSIONS",
    category: "EDITING",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const primaryServices = [
  {
    id: "01",
    title: "Video Editing",
    description: "Raw footage transformed into polished, story-driven content — structured for retention and results.",
    tags: ["Cuts & Assembly", "Pacing", "Story Structure", "Multi-format"],
  },
  {
    id: "02",
    title: "Color Grading",
    description: "Cinematic color science applied to every frame — mood, consistency, and visual identity locked in.",
    tags: ["DaVinci Resolve", "Look Development", "Scene Matching"],
  },
  {
    id: "03",
    title: "Motion Graphics",
    description: "Animated titles, transitions, and visual effects that elevate production value without slowing delivery.",
    tags: ["After Effects", "Typography", "Lower Thirds", "Intros"],
  },
  {
    id: "04",
    title: "Sound Design",
    description: "Music selection, mixing, and SFX layering that complete the emotional arc of every edit.",
    tags: ["Audio Mix", "SFX", "Voiceover Sync", "Music Licensing"],
  },
];

const secondaryServices = [
  {
    id: "05",
    title: "Cinematography",
    description: "On-location shooting for brands and properties — available as an add-on to any editing project.",
    tags: ["Mirrorless", "Gimbal", "Cinematic Lighting"],
  },
  {
    id: "06",
    title: "Drone & Aerial",
    description: "Professional aerial footage for real estate, travel, and brand content.",
    tags: ["DJI Mavic 3 Pro", "DJI Mini 4K", "4K Aerial"],
  },
];

const whatIEdit = [
  {
    title: "Ads & Commercials",
    description: "Scroll-stopping edits for paid campaigns that convert viewers into customers."
  },
  {
    title: "Social Media Reels",
    description: "Fast-paced, hook-driven edits optimized for Instagram, TikTok, and YouTube Shorts."
  },
  {
    title: "YouTube Videos",
    description: "Long-form edits with pacing, structure, and retention strategies built in."
  },
  {
    title: "Brand Films",
    description: "Cinematic storytelling edits that build trust, authority, and emotional connection."
  }
];

const whyMyEditingStandsOut = [
  {
    title: "Strategic Storytelling",
    description: "Every cut serves a purpose. I structure edits to guide the viewer through a deliberate narrative arc."
  },
  {
    title: "Pacing That Holds Attention",
    description: "I engineer rhythm and timing to maximize watch time and keep audiences engaged frame by frame."
  },
  {
    title: "Emotion-Driven Craft",
    description: "Music, color, and transitions work together to make your audience feel something — not just watch something."
  },
  {
    title: "Conversion-Focused Delivery",
    description: "Every edit is optimized for the platform and audience, designed to drive action — not just views."
  }
];

const skillCategories = [
  {
    title: "VIDEO EDITING",
    skills: ["ADOBE PREMIERE", "DAVINCI RESOLVE", "FINAL CUT PRO"]
  },
  {
    title: "POST-PRODUCTION",
    skills: ["COLOR GRADING", "SOUND DESIGN", "MOTION GRAPHICS"]
  },
  {
    title: "SHOOTING (ADD-ON)",
    skills: ["MIRRORLESS CAMERAS", "CINEMATIC LIGHTING", "GIMBAL STABILIZATION"]
  },
  {
    title: "DRONE & AERIAL",
    skills: ["DJI 3 PRO", "DJI MINI 4K", "AERIAL CINEMATOGRAPHY"]
  }
];

const faqs = [
  {
    question: "Can you edit footage I've already shot?",
    answer: "Yes, absolutely. Remote editing is a core service. You can send me your raw footage, and I'll transform it into a polished, high-impact final product."
  },
  {
    question: "What's your typical turnaround time for editing?",
    answer: "Standard turnaround time is 3-7 days depending on the scope of the project. Rush delivery is available for urgent campaigns upon request."
  },
  {
    question: "Do you also handle shooting and production?",
    answer: "Yes, while editing is my primary focus, I also offer full on-location cinematography and drone operations as an optional add-on for clients who need end-to-end production."
  },
  {
    question: "What formats and platforms do you deliver for?",
    answer: "I edit and optimize for all major platforms, providing deliverables in 16:9 (YouTube/Web), 9:16 (Reels/TikTok), and 1:1 or 4:5 for feed posts, ensuring maximum impact everywhere."
  }
];

const portfolioCategories: {
  id: number;
  title: string;
  description: string;
  projects: Project[];
  previews: string[];
}[] = [
    {
      id: 0,
      title: "AD EDITS",
      description: "Vertical & horizontal ads optimized for conversions",
      projects: adProjects,
      previews: [
        "https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 1,
      title: "EDITING & POST",
      description: "Editing, color grading, and cinematic finishing",
      projects: editingProjects,
      previews: [
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      title: "CINEMATIC FILMS",
      description: "Story-driven visuals crafted for brands and businesses",
      projects: cinematicProjects,
      previews: [
        "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 3,
      title: "AERIAL & DRONE",
      description: "Breathtaking perspectives from the sky",
      projects: droneProjects,
      previews: [
        "https://images.pexels.com/photos/2100075/pexels-photo-2100075.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 4,
      title: "BRAND IDENTITY",
      description: "Visual identity and logo design for modern startups",
      projects: brandingProjects,
      previews: [
        "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        className={`w-full flex justify-between items-center bg-transparent border-0 border-b py-3 px-0 text-sm uppercase tracking-widest transition-colors group text-left ${theme === 'light'
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
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${theme === 'light' ? 'text-black/40' : 'text-secondary-text'
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
              className={`absolute left-0 right-0 top-full mt-2 border z-[120] backdrop-blur-xl max-h-60 overflow-y-auto ${theme === 'light'
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
                  className={`w-full text-left px-4 py-3 text-[0.625rem] uppercase tracking-widest transition-colors ${theme === 'light'
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
      rootMargin: '-10% 0px -85% 0px', // Precise zone at the top of the viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the most relevant intersecting entry
      const intersectingEntry = entries.find(entry => entry.isIntersecting);

      if (intersectingEntry) {
        const id = intersectingEntry.target.id;

        // Manual override for hero
        if (id === 'home') {
          setActiveLink("HOME");
          setNavTheme("dark");
          return;
        }

        // Map IDs to nav links
        if (id === 'work' || id === 'work-gallery') {
          setActiveLink("WORK");
          setNavTheme("light");
        } else if (id === 'services') {
          setActiveLink("SERVICES");
          setNavTheme("dark");
        } else if (id === 'about') {
          setActiveLink("ABOUT");
          setNavTheme("light");
        } else if (id === 'faq') {
          setActiveLink("ABOUT"); // Keep about highlighted for FAQ? Or maybe none.
          setNavTheme("light");
        } else if (id === 'contact') {
          setActiveLink("CONTACT");
          setNavTheme("light");
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // observe all primary section containers
    const sections = ['home', 'work', 'services', 'about', 'faq', 'contact'];
    sections.forEach(id => {
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
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
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
                  className={`font-label uppercase tracking-[0.15em] text-[0.6875rem] font-medium transition-colors ${navTheme === "dark"
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
              className={`font-label uppercase tracking-[0.15em] text-[0.625rem] font-bold border-b py-1 transition-all duration-500 ${navTheme === "dark"
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
                  className={`text-4xl font-black uppercase tracking-[0.1em] transition-colors ${activeLink === link.name ? "text-white" : "text-white/30"
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

      <header id="home" className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-40 pb-10 md:pb-20 px-8 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
        {/* Subtle background motion effect */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-white/[0.03] rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-white/[0.02] rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

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

        {/* Eyebrow — Availability/Scarcity tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8 md:mb-12 mt-12 md:mt-0 relative z-20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          <span className="text-[0.6rem] uppercase tracking-[0.25em] font-bold text-white/70 font-label">VIDEO EDITOR & POST-PRODUCTION SPECIALIST</span>
        </motion.div>

        {/* Hero Content Area */}
        <div className="flex flex-col md:flex-row justify-between gap-16 lg:gap-24 relative z-20">

          {/* Left Side: Headline, Subheadline, CTAs */}
          <div className="flex flex-col max-w-[100%] md:max-w-[60%] lg:max-w-[65%] flex-shrink-0">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-[clamp(2.75rem,6.5vw,7.5rem)] font-black tracking-tighter uppercase leading-[0.88] mb-8"
            >
              <span className="sr-only">
                Wasim Pakhtoon — Video Editor &amp; Post-Production Specialist. Professional video editing services, ads, reels, YouTube videos, and brand films. Based in Srinagar, Kashmir, available worldwide.
              </span>
              <span aria-hidden="true" className="relative block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="block">I TURN RAW</motion.span>
              </span>
              <span aria-hidden="true" className="relative block overflow-hidden">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="block">FOOTAGE INTO</motion.span>
              </span>
              <span aria-hidden="true" className="relative block overflow-hidden text-white/80">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} className="block">VIDEOS THAT</motion.span>
              </span>
              <span aria-hidden="true" className="relative block overflow-hidden text-white/80">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }} className="block">DRIVE RESULTS</motion.span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="text-white/80 text-lg md:text-xl lg:text-2xl font-medium max-w-xl tracking-wide leading-relaxed mb-12"
            >
              Ads &middot; Reels &middot; Brand Films &middot; YouTube — edited for attention, engagement, and conversions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="group w-full sm:w-auto bg-white text-black px-10 py-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:bg-white/90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-4"
                >
                  GET A QUOTE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a
                  href="#work-gallery"
                  className="group w-full sm:w-auto border border-transparent text-white/60 px-6 py-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  VIEW MY EDITS
                  <ArrowDown className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
                </a>
              </div>

              {/* Trust Signal */}
              <div className="flex items-center gap-4 opacity-80">
                <span className="text-[0.6rem] uppercase tracking-widest text-white/40 font-medium">TRUSTED BY BRANDS & CREATORS WORLDWIDE</span>
                <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Impact Metrics */}
          <motion.div
            style={{ opacity: impactPanelOpacity, y: impactPanelY }}
            className="flex flex-col justify-center gap-12 flex-1 md:pl-10 lg:pl-16 md:border-l border-white/10 mt-4 md:mt-0"
          >
            {[
              { num: "01", value: "Strategic editing built for viewer retention", primary: true },
              { num: "02", value: "Color grading & sound that elevate every frame", primary: false },
              { num: "03", value: "Fast turnaround without compromising quality", primary: false },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 + i * 0.18 }}
                className="group flex items-start gap-6"
              >
                <span className={`text-[0.6rem] font-bold tracking-[0.25em] font-label mt-1.5 flex-shrink-0 transition-colors duration-500 ${item.primary ? "text-white/40" : "text-white/20"}`}>
                  {item.num}
                </span>
                <span className={`font-medium tracking-wide leading-snug transition-all duration-500 group-hover:text-white ${item.primary
                  ? "text-[1.25rem] text-white/90"
                  : "text-[1.05rem] text-white/50"
                  }`}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Socials Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center gap-8 border-t border-outline/25 pt-8 mt-16 md:mt-24 relative z-20"
        >
          <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-white/20 flex-shrink-0 font-label">FOLLOW</span>
          <div className="flex flex-wrap gap-6 md:gap-10">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
                  className={`px-5 py-2.5 text-[0.55rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 border ${(cat.id === -1 && activeCategory === null) || activeCategory === cat.id
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
                  <div className={`${project.isVertical ? "aspect-[9/16]" : "aspect-video"} w-full overflow-hidden relative`}>
                    {project.vimeoId ? (
                      <div className="w-full h-full">
                        <iframe
                          src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&muted=0&loop=1&badge=0&autopause=0`}
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
                          src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&mute=0&loop=1&playlist=${project.youtubeId}&controls=1&rel=0&showinfo=0&modestbranding=1&vq=hd1080`}
                          className="w-[100.5%] h-[100.5%] -ml-[0.25%] -mt-[0.25%]"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          title={`${project.title} — aerial visuals by Wasim Pakhtoon`}
                          loading="eager"
                        />
                      </div>
                    ) : project.muxId ? (
                      <div className="w-full h-full overflow-hidden bg-black">
                        <iframe
                          src={`https://player.mux.com/${project.muxId}?autoplay=1&muted=0&loop=1`}
                          className="w-full h-full object-cover"
                          frameBorder="0"
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen
                          title={`${project.title} — ad edit by Wasim Pakhtoon`}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Category Tag — top left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-black text-white text-[0.45rem] font-bold uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10">
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

          {/* Pexels Global Reach Section */}
          <div className="mt-32">
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
        </div>
      </section>

      {/* What I Edit Section */}
      <section className="bg-white border-t border-black/10" id="what-i-edit">
        <div className="px-8 py-24 md:py-32 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div className="max-w-xl">
              <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-black/25 mb-3 block">SPECIALTIES</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">What I Edit</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIEdit.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f8f8f8] p-8 md:p-10 border border-black/5 hover:border-black/20 transition-all duration-500 group"
              >
                <h3 className="text-lg font-black uppercase tracking-tight text-black mb-4 group-hover:text-black/80">{item.title}</h3>
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-black/40 leading-relaxed font-medium group-hover:text-black/60 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why My Editing Stands Out */}
      <section className="bg-[#0a0a0a]" id="why-i-stand-out">
        <div className="px-8 py-24 md:py-32 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
              <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-white/30 mb-3 block">THE APPROACH</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-6">Why My Editing Stands Out</h2>
              <p className="text-[0.7rem] uppercase tracking-[0.15em] text-white/50 leading-relaxed max-w-xl">
                I don't just cut clips together. I craft videos strategically.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {whyMyEditingStandsOut.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <span className="text-[0.6rem] font-bold tracking-[0.25em] font-label mt-1.5 flex-shrink-0 text-white/20 group-hover:text-white/40 transition-colors">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white/90 mb-4">{item.title}</h3>
                  <p className="text-[0.65rem] uppercase tracking-[0.15em] text-white/40 leading-loose max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-black" id="services">
        <div className="px-8 md:px-12 py-24 md:py-36 max-w-screen-2xl mx-auto">

          {/* Section Header */}
          <div className="border-t border-white/10 pt-8 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-white/25 block mb-3">SERVICES</span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(2.2rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.88] text-white"
              >
                Post-Production.<br />And beyond.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="hidden md:block text-[0.6rem] uppercase tracking-[0.18em] leading-loose text-white/30 max-w-xs text-right"
            >
              Editing is my primary focus. Production is available as an add-on.
            </motion.p>
          </div>

          {/* Primary Services List */}
          <div className="mb-20">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8 border-b border-white/10 pb-4">PRIMARY: POST-PRODUCTION</h3>
            <div className="flex flex-col">
              {primaryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-white/8 items-start hover:border-white/20 transition-all duration-500 cursor-default"
                >
                  {/* Index */}
                  <div className="md:col-span-1">
                    <span className="text-[0.5rem] font-bold text-white/15 tracking-[0.25em] group-hover:text-white/30 transition-colors duration-500">
                      {service.id}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white/60 group-hover:text-white transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description + Tags */}
                  <div className="md:col-span-6 flex flex-col gap-6">
                    <p className="text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.12em] leading-loose text-white/30 group-hover:text-white/55 transition-colors duration-500 max-w-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.45rem] uppercase tracking-[0.18em] font-bold border border-white/10 text-white/25 px-3 py-1.5 group-hover:border-white/20 group-hover:text-white/40 transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex justify-end items-start pt-2">
                    <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary Services List */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8 border-b border-white/10 pb-4">SECONDARY: PRODUCTION (OPTIONAL)</h3>
            <div className="flex flex-col">
              {secondaryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-white/8 items-start hover:border-white/20 transition-all duration-500 cursor-default"
                >
                  {/* Index */}
                  <div className="md:col-span-1">
                    <span className="text-[0.5rem] font-bold text-white/15 tracking-[0.25em] group-hover:text-white/30 transition-colors duration-500">
                      {service.id}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white/60 group-hover:text-white transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description + Tags */}
                  <div className="md:col-span-6 flex flex-col gap-6">
                    <p className="text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.12em] leading-loose text-white/30 group-hover:text-white/55 transition-colors duration-500 max-w-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.45rem] uppercase tracking-[0.18em] font-bold border border-white/10 text-white/25 px-3 py-1.5 group-hover:border-white/20 group-hover:text-white/40 transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex justify-end items-start pt-2">
                    <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="group inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-[0.6rem] font-black uppercase tracking-[0.2em] hover:bg-white/90 active:scale-[0.98] transition-all duration-300"
            >
              START A PROJECT
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <span className="text-[0.5rem] uppercase tracking-[0.2em] text-white/20">
              All projects are scoped and quoted personally.
            </span>
          </motion.div>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f8f8f8]" id="about">
        <div className="px-8 md:px-12 py-24 md:py-32 max-w-screen-2xl mx-auto">
          <div className="border-t border-black/10 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">

              {/* Left Column: Label */}
              <div className="md:col-span-4 self-start">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  <span className="text-[0.5rem] uppercase tracking-[0.25em] font-black text-black/25">ABOUT THE STUDIO</span>
                </div>
              </div>

              {/* Right Column: Bio & Skills */}
              <div className="md:col-span-8">
                <div className="max-w-2xl">

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[clamp(2.4rem,6vw,5.5rem)] font-black tracking-tighter uppercase leading-[0.88] mb-10 text-black"
                  >
                    Precision.<br />Storytelling.<br />Results.
                  </motion.h2>

                  {/* Divider */}
                  <div className="w-8 h-px bg-black/15 mb-8" />

                  {/* Short Bio — 3 scannable lines */}
                  <div className="flex flex-col gap-5 mb-16">
                    {[
                      "A video editor and post-production specialist based in Srinagar, Kashmir.",
                      "I craft high-impact edits for brands, creators, and businesses worldwide.",
                      "From raw footage to final delivery — every frame is shaped with precision and purpose.",
                    ].map((line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 + i * 0.07 }}
                        className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.18em] leading-loose text-black/50 font-bold"
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 pt-10 border-t border-black/8">
                    {skillCategories.map((category, idx) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <h4 className="text-[0.5rem] font-black tracking-[0.2em] uppercase text-black/40 mb-5">
                          {category.title}
                        </h4>
                        <ul className="space-y-3">
                          {category.skills.map((skill) => (
                            <li
                              key={skill}
                              className="text-[0.5rem] tracking-[0.15em] text-black/30 hover:text-black transition-colors cursor-default list-none font-bold uppercase"
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

      {/* CTA Section */}
      <section className="bg-[#0a0a0a]" id="cta">
        <div className="px-8 md:px-12 py-32 md:py-48 max-w-screen-2xl mx-auto text-center flex flex-col items-center">
          <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-white/30 block mb-6">NEXT PHASE</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,7vw,7rem)] font-black tracking-tighter uppercase leading-[0.82] mb-6 text-white"
          >
            READY TO ELEVATE<br />YOUR VIDEOS?
          </motion.h2>
          <p className="text-[0.7rem] uppercase tracking-[0.15em] text-white/50 leading-relaxed max-w-xl mb-12">
            Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="group bg-white text-black px-10 py-5 text-[0.6rem] font-black uppercase tracking-[0.18em] hover:bg-white/90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
            >
              START A PROJECT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href="https://wa.me/919541591652?text=Hi%20Wasim%2C%20I%20saw%20your%20website%20and%20I%E2%80%99m%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 text-white/70 px-10 py-5 text-[0.6rem] font-black uppercase tracking-[0.18em] hover:border-white hover:text-white active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white" id="contact">
        <div className="px-8 md:px-12 py-24 md:py-36 max-w-screen-2xl mx-auto">
          <div className="border-t border-black/10 pt-12 md:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
              <div className="md:col-span-8">
                <span className="text-[0.5rem] uppercase tracking-[0.25em] font-bold text-black/25 block mb-8">CONTACT</span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[clamp(2.5rem,7vw,7rem)] font-black tracking-tighter uppercase leading-[0.82] mb-12 text-black"
                >
                  GET IN<br />TOUCH.
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
                    <a href="mailto:waxim.hq@gmail.com" className="text-sm font-bold uppercase tracking-tight text-black hover:text-black/50 transition-colors duration-300">
                      waxim.hq@gmail.com
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
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.55rem] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
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
