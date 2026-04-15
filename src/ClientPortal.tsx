/**
 * Client Portal Dashboard — Wasim Pakhtoon Creative Agency
 * Premium, minimalist project dashboard for clients.
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Film,
  MessageSquare,
  FileText,
  Clock,
  Settings,
  Download,
  Play,
  X,
  ChevronRight,
  Send,
  Menu,
  LogOut,
  RefreshCcw,
  PackageOpen,
  Sparkles,
  Lock,
  Eye,
  EyeOff,
  ArrowDownToLine,
  CheckCircle2,
  Circle,
  Loader2,
} from "lucide-react";
import LogoImg from "../images/logo.png";

// ─── Demo Data ───────────────────────────────────────────────────────────────

const PROJECT = {
  name: "The Khyber Resort Campaign",
  client: "Zubair Malik",
  status: "Editing" as "Editing" | "Review" | "Completed",
  startDate: "Apr 01, 2025",
  deliveryDate: "Apr 30, 2025",
  progress: 62,
};

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "deliverables", label: "Deliverables", icon: Film },
  { id: "feedback", label: "Feedback", icon: MessageSquare },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "settings", label: "Settings", icon: Settings },
];

const DELIVERABLES = [
  {
    id: 1,
    title: "Teaser — Draft V1",
    type: "VIDEO",
    duration: "0:45",
    status: "In Review",
    thumb: "https://images.pexels.com/photos/35066424/pexels-photo-35066424.jpeg?auto=compress&cs=tinysrgb&w=600",
    vimeoId: "1183128960",
  },
  {
    id: 2,
    title: "Main Film — Draft V1",
    type: "VIDEO",
    duration: "3:12",
    status: "Editing",
    thumb: "https://images.pexels.com/photos/35028172/pexels-photo-35028172.jpeg?auto=compress&cs=tinysrgb&w=600",
    vimeoId: "1183128507",
  },
  {
    id: 3,
    title: "Aerial Highlights",
    type: "VIDEO",
    duration: "1:30",
    status: "Delivered",
    thumb: "https://images.pexels.com/photos/21908308/pexels-photo-21908308.jpeg?auto=compress&cs=tinysrgb&w=600",
    vimeoId: null,
  },
  {
    id: 4,
    title: "Social Cuts Pack",
    type: "VIDEO",
    duration: "0:30 × 4",
    status: "Pending",
    thumb: "https://images.pexels.com/photos/35296645/pexels-photo-35296645.jpeg?auto=compress&cs=tinysrgb&w=600",
    vimeoId: null,
  },
];

const MESSAGES = [
  {
    id: 1,
    sender: "Wasim Pakhtoon",
    role: "Director",
    text: "Hey Zubair, Draft V1 of the teaser is now live in your Deliverables tab. Please review and share your feedback below!",
    time: "Apr 12 · 10:24 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "Zubair Malik",
    role: "Client",
    text: "Looks amazing! The opening shot is stunning. Can we extend the drone sequence by about 5 seconds?",
    time: "Apr 12 · 2:41 PM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Wasim Pakhtoon",
    role: "Director",
    text: "Absolutely — I'll incorporate that into Draft V2. Should be ready within 48 hours.",
    time: "Apr 12 · 3:10 PM",
    isMe: false,
  },
];

const DOCUMENTS = [
  { id: 1, name: "Project Contract", type: "PDF", size: "1.2 MB", date: "Apr 01, 2025" },
  { id: 2, name: "Invoice #001", type: "PDF", size: "340 KB", date: "Apr 01, 2025" },
  { id: 3, name: "Brand Guidelines", type: "ZIP", size: "28.4 MB", date: "Apr 03, 2025" },
  { id: 4, name: "Shoot Location Brief", type: "PDF", size: "2.1 MB", date: "Apr 05, 2025" },
  { id: 5, name: "Music License", type: "PDF", size: "210 KB", date: "Apr 08, 2025" },
];

const TIMELINE_STAGES = [
  { label: "Script", done: true },
  { label: "Shooting", done: true },
  { label: "Editing", active: true },
  { label: "Review", done: false },
  { label: "Delivery", done: false },
];

const DEMO_PASSWORD = "khyber2025";

// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    Editing: "border-amber-400/40 text-amber-300 bg-amber-400/10",
    Review: "border-blue-400/40 text-blue-300 bg-blue-400/10",
    Completed: "border-green-400/40 text-green-300 bg-green-400/10",
    "In Review": "border-blue-400/40 text-blue-300 bg-blue-400/10",
    Delivered: "border-green-400/40 text-green-300 bg-green-400/10",
    Pending: "border-white/20 text-white/40 bg-white/5",
  };
  return (
    <span className={`text-[0.55rem] uppercase tracking-[0.15em] font-bold border px-2.5 py-1 rounded-sm ${colors[status] ?? "border-white/20 text-white/50"}`}>
      {status}
    </span>
  );
};

// ─── Password Gate ────────────────────────────────────────────────────────────
const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (value === DEMO_PASSWORD) {
        onUnlock();
      } else {
        setError(true);
        setLoading(false);
        setTimeout(() => setError(false), 2000);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <div className="mb-12 flex flex-col items-center text-center">
          <img src={LogoImg} alt="Wasim Pakhtoon" className="h-8 mb-8 opacity-90" />
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 bg-white/5">
            <Lock className="w-5 h-5 text-white/60" />
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Client Portal</h1>
          <p className="text-[0.7rem] text-white/40 uppercase tracking-widest">Enter your project password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-transparent border border-white/10 text-white placeholder-white/20 px-4 py-4 pr-12 text-sm tracking-widest focus:outline-none focus:border-white/40 transition-colors rounded-none"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[0.65rem] text-red-400 uppercase tracking-widest"
              >
                Incorrect password. Please try again.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 text-[0.65rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {loading ? "Verifying..." : "Enter Portal"}
          </button>
        </form>

        <p className="text-center text-[0.6rem] text-white/20 uppercase tracking-widest mt-8">
          Password provided by your project manager
        </p>
        <p className="text-center text-[0.55rem] text-white/15 mt-2">
          Demo password: khyber2025
        </p>
      </motion.div>
    </div>
  );
};

// ─── Section: Overview ────────────────────────────────────────────────────────
const OverviewSection = ({ onRevision }: { onRevision: () => void }) => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="border border-white/10 bg-white/[0.02] p-8"
    >
      <p className="text-[0.65rem] uppercase tracking-[0.15em] text-white/40 mb-3">Welcome back, {PROJECT.client}</p>
      <h2 className="text-xl font-black uppercase tracking-tighter text-white mb-4">
        Welcome to your private project dashboard.
      </h2>
      <p className="text-[0.75rem] text-white/50 leading-relaxed max-w-lg">
        Track progress, review content, submit feedback, and manage all project files in one place. Everything is kept private and accessible only to you.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { label: "Project", value: PROJECT.name, sub: "Active Campaign" },
        { label: "Start Date", value: PROJECT.startDate, sub: "Kick-off" },
        { label: "Delivery", value: PROJECT.deliveryDate, sub: "Final deadline" },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
          className="border border-white/10 bg-white/[0.02] p-6"
        >
          <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/30 mb-2">{card.label}</p>
          <p className="font-black text-white text-sm uppercase tracking-tight leading-snug mb-1">{card.value}</p>
          <p className="text-[0.6rem] text-white/30 uppercase tracking-widest">{card.sub}</p>
        </motion.div>
      ))}
    </div>

    {/* Progress */}
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
      className="border border-white/10 bg-white/[0.02] p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-[0.6rem] uppercase tracking-[0.15em] text-white/40">Overall Progress</span>
        <span className="text-lg font-black text-white">{PROJECT.progress}%</span>
      </div>
      <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }} animate={{ width: `${PROJECT.progress}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="h-full bg-white"
        />
      </div>
    </motion.div>

    {/* Actions */}
    <div className="flex flex-wrap gap-4">
      <button
        onClick={onRevision}
        className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
      >
        <RefreshCcw className="w-3.5 h-3.5" /> Request Revision
      </button>
      <button className="flex items-center gap-2 bg-white text-black px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-all duration-300">
        <ArrowDownToLine className="w-3.5 h-3.5" /> Download All Files
      </button>
    </div>

    {/* Upsell */}
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
      className="border border-white/10 bg-white/[0.02] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
    >
      <div className="flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white mb-1">Need more services?</p>
          <p className="text-[0.65rem] text-white/40 max-w-md">
            Explore our full range — social media reels, drone packages, brand identity, and more.
          </p>
        </div>
      </div>
      <a
        href="/"
        className="shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
      >
        View Services <ChevronRight className="w-3 h-3" />
      </a>
    </motion.div>
  </div>
);

// ─── Section: Deliverables ────────────────────────────────────────────────────
const DeliverablesSection = () => {
  const [activeVideo, setActiveVideo] = useState<typeof DELIVERABLES[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {DELIVERABLES.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }}
            className="border border-white/10 bg-white/[0.02] group overflow-hidden"
          >
            <div className="relative aspect-video bg-[#111] overflow-hidden cursor-pointer" onClick={() => item.vimeoId && setActiveVideo(item)}>
              <img src={item.thumb} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-14 h-14 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm ${item.vimeoId ? "bg-white/10 cursor-pointer" : "bg-white/5 opacity-30"}`}
                >
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </motion.div>
              </div>
              <div className="absolute top-3 right-3">
                <StatusBadge status={item.status} />
              </div>
              <div className="absolute bottom-3 left-3 text-[0.55rem] text-white/50 font-bold uppercase tracking-widest bg-black/60 px-2 py-1 backdrop-blur-sm">
                {item.duration}
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-white">{item.title}</p>
                <p className="text-[0.55rem] text-white/30 uppercase tracking-widest mt-0.5">{item.type}</p>
              </div>
              <button className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 text-white/50 hover:text-black">
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-6 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=1&badge=0&autopause=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title={activeVideo.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ─── Section: Feedback ────────────────────────────────────────────────────────
const FeedbackSection = () => {
  const [messages, setMessages] = useState(MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: PROJECT.client, role: "Client", text: input.trim(), time: "Just now", isMe: true },
    ]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px] border border-white/10 bg-white/[0.02]">
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        <MessageSquare className="w-4 h-4 text-white/40" />
        <span className="text-[0.65rem] uppercase tracking-[0.15em] font-bold text-white/60">Project Feedback</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[0.55rem] uppercase tracking-widest font-bold text-white/40">{msg.sender}</span>
              <span className="text-[0.5rem] text-white/20">{msg.time}</span>
            </div>
            <div className={`max-w-sm px-4 py-3 text-[0.7rem] leading-relaxed ${
              msg.isMe
                ? "bg-white text-black"
                : "border border-white/10 bg-white/5 text-white/80"
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add feedback or reply..."
          className="flex-1 bg-transparent border border-white/10 text-white text-[0.7rem] px-4 py-3 placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
        />
        <button
          type="submit"
          className="bg-white text-black px-5 py-3 flex items-center justify-center hover:bg-white/90 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

// ─── Section: Documents ───────────────────────────────────────────────────────
const DocumentsSection = () => (
  <div className="border border-white/10 bg-white/[0.02] divide-y divide-white/5">
    {DOCUMENTS.map((doc, i) => (
      <motion.div
        key={doc.id}
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
        className="flex items-center justify-between px-6 py-4 group hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-[0.5rem] font-bold text-white/40 uppercase">
            {doc.type}
          </div>
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white">{doc.name}</p>
            <p className="text-[0.55rem] text-white/30 mt-0.5">{doc.size} · {doc.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[0.55rem] uppercase tracking-widest text-white/30 hover:text-white transition-colors px-3 py-1.5 border border-transparent hover:border-white/20">
            View
          </button>
          <button className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 text-white/40">
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
);

// ─── Section: Timeline ────────────────────────────────────────────────────────
const TimelineSection = () => (
  <div className="border border-white/10 bg-white/[0.02] p-8">
    <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/30 mb-10">Production Pipeline</p>

    {/* Horizontal */}
    <div className="relative hidden md:block">
      <div className="absolute top-4 left-0 right-0 h-px bg-white/10" />
      <div className="flex justify-between relative">
        {TIMELINE_STAGES.map((stage, i) => {
          const isDone = stage.done;
          const isActive = stage.active;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <motion.div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 relative ${
                  isActive
                    ? "border-white bg-white"
                    : isDone
                    ? "border-white/60 bg-white/20"
                    : "border-white/15 bg-transparent"
                }`}
              >
                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                {isActive && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                {!isDone && !isActive && <Circle className="w-3 h-3 text-white/20" />}
              </motion.div>
              <span className={`text-[0.6rem] uppercase tracking-widest font-bold ${
                isActive ? "text-white" : isDone ? "text-white/60" : "text-white/20"
              }`}>
                {stage.label}
              </span>
              {isActive && (
                <span className="text-[0.5rem] uppercase tracking-wider text-amber-400 border border-amber-400/30 px-2 py-0.5">
                  Current
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Mobile vertical */}
    <div className="space-y-6 md:hidden">
      {TIMELINE_STAGES.map((stage, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
            stage.active ? "border-white bg-white" : stage.done ? "border-white/50 bg-white/10" : "border-white/15"
          }`}>
            {stage.done && <CheckCircle2 className="w-3 h-3 text-white" />}
            {stage.active && <div className="w-2 h-2 rounded-full bg-black" />}
          </div>
          <span className={`text-[0.65rem] font-bold uppercase tracking-widest ${
            stage.active ? "text-white" : stage.done ? "text-white/50" : "text-white/20"
          }`}>
            {stage.label}
            {stage.active && <span className="ml-3 text-[0.5rem] text-amber-400">← Current</span>}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Section: Settings ────────────────────────────────────────────────────────
const SettingsSection = ({ onLogout }: { onLogout: () => void }) => (
  <div className="space-y-4">
    {[
      { label: "Client Name", value: PROJECT.client },
      { label: "Project", value: PROJECT.name },
      { label: "Password", value: "••••••••••" },
    ].map((field) => (
      <div key={field.label} className="border border-white/10 bg-white/[0.02] px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/30 mb-1">{field.label}</p>
          <p className="text-[0.7rem] font-bold text-white tracking-widest">{field.value}</p>
        </div>
      </div>
    ))}
    <button
      onClick={onLogout}
      className="flex items-center gap-2 border border-red-400/30 text-red-400/70 px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-red-400/10 transition-all duration-300 mt-4"
    >
      <LogOut className="w-3.5 h-3.5" /> Sign Out
    </button>
  </div>
);

// ─── Revision Modal ───────────────────────────────────────────────────────────
const RevisionModal = ({ onClose }: { onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  const [val, setVal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!val.trim()) return;
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-6 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md border border-white/10 bg-[#0a0a0a] p-8"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-sm font-black uppercase tracking-tighter text-white mb-1">Request Revision</h3>
            <p className="text-[0.6rem] text-white/30 uppercase tracking-widest">Describe the changes you need</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={val}
              onChange={(e) => setVal(e.target.value)}
              rows={5}
              placeholder="e.g. Please extend the opening drone shot by 5 seconds and add a fade transition..."
              className="w-full bg-transparent border border-white/10 text-white text-[0.7rem] px-4 py-3 placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors"
            >
              Submit Revision Request
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-center py-6"
          >
            <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white mb-1">Request Sent!</p>
            <p className="text-[0.6rem] text-white/40">We'll review your feedback within 24 hours.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// ─── Main Dashboard ───────────────────────────────────────────────────────────
const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showRevision, setShowRevision] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "overview":     return <OverviewSection onRevision={() => setShowRevision(true)} />;
      case "deliverables": return <DeliverablesSection />;
      case "feedback":     return <FeedbackSection />;
      case "documents":    return <DocumentsSection />;
      case "timeline":     return <TimelineSection />;
      case "settings":     return <SettingsSection onLogout={onLogout} />;
      default:             return null;
    }
  };

  const currentNav = NAV_ITEMS.find((n) => n.id === activeSection);

  return (
    <div className="min-h-screen bg-[#080808] flex">
      {/* Sidebar */}
      <>
        {/* Mobile overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-[90] md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        <motion.aside
          className={`
            fixed top-0 left-0 h-full z-[95] w-64 bg-[#050505] border-r border-white/5
            flex flex-col transition-transform duration-300
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Logo */}
          <div className="p-6 border-b border-white/5">
            <img src={LogoImg} alt="Wasim Pakhtoon" className="h-7 opacity-90" />
            <p className="text-[0.5rem] text-white/20 uppercase tracking-[0.2em] mt-2">Client Portal</p>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveSection(item.id); setIsSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-[0.65rem] uppercase tracking-widest font-bold transition-all duration-200 text-left group ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/30 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-black" : "text-white/30 group-hover:text-white"}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Project badge */}
          <div className="p-4 border-t border-white/5">
            <div className="bg-white/[0.03] border border-white/8 p-3 rounded-sm">
              <p className="text-[0.5rem] uppercase tracking-widest text-white/20 mb-1">Active Project</p>
              <p className="text-[0.6rem] font-bold uppercase tracking-tight text-white/60 leading-snug">{PROJECT.name}</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white/40" style={{ width: `${PROJECT.progress}%` }} />
                </div>
                <span className="text-[0.5rem] text-white/30">{PROJECT.progress}%</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </>

      {/* Main content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-white/5 px-6 md:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden text-white/50 hover:text-white transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-[0.7rem] font-black uppercase tracking-tight text-white">{PROJECT.name}</h1>
                  <StatusBadge status={PROJECT.status} />
                </div>
                <p className="text-[0.55rem] text-white/30 uppercase tracking-widest mt-0.5">
                  Client: {PROJECT.client}
                </p>
              </div>
            </div>

            {/* Progress pill */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full bg-white" style={{ width: `${PROJECT.progress}%` }} />
              </div>
              <span className="text-[0.55rem] text-white/40 font-bold">{PROJECT.progress}%</span>
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 px-6 md:px-10 py-8">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
            {currentNav && <currentNav.icon className="w-4 h-4 text-white/30" />}
            <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/50">{currentNav?.label}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="px-6 md:px-10 py-4 border-t border-white/5">
          <p className="text-[0.5rem] text-white/15 uppercase tracking-widest">
            © Wasim Pakhtoon Creative — Confidential Client Portal
          </p>
        </footer>
      </div>

      {/* Revision Modal */}
      <AnimatePresence>
        {showRevision && <RevisionModal onClose={() => setShowRevision(false)} />}
      </AnimatePresence>
    </div>
  );
};

// ─── Root Portal Component ────────────────────────────────────────────────────
export default function ClientPortal() {
  const [unlocked, setUnlocked] = useState(false);

  const handleLogout = () => setUnlocked(false);

  return (
    <AnimatePresence mode="wait">
      {!unlocked ? (
        <motion.div key="gate" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <PasswordGate onUnlock={() => setUnlocked(true)} />
        </motion.div>
      ) : (
        <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Dashboard onLogout={handleLogout} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
