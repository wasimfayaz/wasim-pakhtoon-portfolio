/**
 * Client Portal — Wasim Pakhtoon Creative Agency
 * Single URL, multi-client: username + password login.
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard, Film, MessageSquare, FileText, Clock,
  Settings, Download, Play, X, ChevronRight, Send, Menu,
  LogOut, RefreshCcw, Sparkles, Lock, Eye, EyeOff,
  ArrowDownToLine, CheckCircle2, Circle, Loader2, User,
} from "lucide-react";
import LogoImg from "../images/logo.png";

// ─── Client Registry ──────────────────────────────────────────────────────────
// To add a new client: add an entry here with their username, password, and data.

const CLIENTS: Record<string, ClientData> = {
  khyber: {
    password: "khyber2025",
    project: {
      name: "The Khyber Resort Campaign",
      client: "Zubair Malik",
      status: "Editing",
      startDate: "Apr 01, 2025",
      deliveryDate: "Apr 30, 2025",
      progress: 62,
    },
    deliverables: [
      { id: 1, title: "Teaser — Draft V1", type: "VIDEO", duration: "0:45", status: "In Review", thumb: "https://images.pexels.com/photos/35066424/pexels-photo-35066424.jpeg?auto=compress&cs=tinysrgb&w=600", vimeoId: "1183128960" },
      { id: 2, title: "Main Film — Draft V1", type: "VIDEO", duration: "3:12", status: "Editing", thumb: "https://images.pexels.com/photos/35028172/pexels-photo-35028172.jpeg?auto=compress&cs=tinysrgb&w=600", vimeoId: "1183128507" },
      { id: 3, title: "Aerial Highlights", type: "VIDEO", duration: "1:30", status: "Delivered", thumb: "https://images.pexels.com/photos/21908308/pexels-photo-21908308.jpeg?auto=compress&cs=tinysrgb&w=600", vimeoId: null },
      { id: 4, title: "Social Cuts Pack", type: "VIDEO", duration: "0:30 × 4", status: "Pending", thumb: "https://images.pexels.com/photos/35296645/pexels-photo-35296645.jpeg?auto=compress&cs=tinysrgb&w=600", vimeoId: null },
    ],
    messages: [
      { id: 1, sender: "Wasim Pakhtoon", role: "Director", text: "Hey Zubair, Draft V1 of the teaser is now live in your Deliverables tab. Please review and share your feedback!", time: "Apr 12 · 10:24 AM", isMe: false },
      { id: 2, sender: "Zubair Malik", role: "Client", text: "Looks amazing! Can we extend the drone sequence by about 5 seconds?", time: "Apr 12 · 2:41 PM", isMe: true },
      { id: 3, sender: "Wasim Pakhtoon", role: "Director", text: "Absolutely — I'll incorporate that into Draft V2. Should be ready within 48 hours.", time: "Apr 12 · 3:10 PM", isMe: false },
    ],
    documents: [
      { id: 1, name: "Project Contract", type: "PDF", size: "1.2 MB", date: "Apr 01, 2025" },
      { id: 2, name: "Invoice #001", type: "PDF", size: "340 KB", date: "Apr 01, 2025" },
      { id: 3, name: "Brand Guidelines", type: "ZIP", size: "28.4 MB", date: "Apr 03, 2025" },
      { id: 4, name: "Shoot Location Brief", type: "PDF", size: "2.1 MB", date: "Apr 05, 2025" },
    ],
    timeline: [
      { label: "Script", done: true },
      { label: "Shooting", done: true },
      { label: "Editing", active: true },
      { label: "Review", done: false },
      { label: "Delivery", done: false },
    ],
  },

  shayan: {
    password: "shayan2025",
    project: {
      name: "Brand & Visual Campaign",
      client: "Shayan Ahmad Donoo",
      status: "Editing",
      startDate: "Apr 15, 2025",
      deliveryDate: "May 10, 2025",
      progress: 35,
    },
    deliverables: [
      { id: 1, title: "Brand Identity — Draft V1", type: "VIDEO", duration: "1:20", status: "In Review", thumb: "https://images.pexels.com/photos/35028172/pexels-photo-35028172.jpeg?auto=compress&cs=tinysrgb&w=600", vimeoId: "1183128960" },
      { id: 2, title: "Product Film — Draft V1", type: "VIDEO", duration: "2:45", status: "Editing", thumb: "https://images.pexels.com/photos/21908308/pexels-photo-21908308.jpeg?auto=compress&cs=tinysrgb&w=600", vimeoId: null },
      { id: 3, title: "Social Reels Pack", type: "VIDEO", duration: "0:30 × 3", status: "Pending", thumb: "https://images.pexels.com/photos/35296645/pexels-photo-35296645.jpeg?auto=compress&cs=tinysrgb&w=600", vimeoId: null },
    ],
    messages: [
      { id: 1, sender: "Wasim Pakhtoon", role: "Director", text: "Hey Shayan, Draft V1 of the brand identity film is now live. Let me know what you think of the color grading!", time: "Apr 16 · 10:24 AM", isMe: false },
      { id: 2, sender: "Shayan Ahmad Donoo", role: "Client", text: "Looks incredible! The contrast is perfect. Can we tweak the ending title font?", time: "Apr 16 · 2:41 PM", isMe: true },
      { id: 3, sender: "Wasim Pakhtoon", role: "Director", text: "Of course — I'll update the typography and send Draft V2 within 24 hours.", time: "Apr 16 · 4:00 PM", isMe: false },
    ],
    documents: [
      { id: 1, name: "Project Contract", type: "PDF", size: "980 KB", date: "Apr 15, 2025" },
      { id: 2, name: "Invoice #001", type: "PDF", size: "280 KB", date: "Apr 15, 2025" },
      { id: 3, name: "Brand Brief", type: "PDF", size: "4.2 MB", date: "Apr 16, 2025" },
    ],
    timeline: [
      { label: "Brief", done: true },
      { label: "Concept", done: true },
      { label: "Shooting", active: true },
      { label: "Editing", done: false },
      { label: "Delivery", done: false },
    ],
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type Deliverable = { id: number; title: string; type: string; duration: string; status: string; thumb: string; vimeoId: string | null };
type Message = { id: number; sender: string; role: string; text: string; time: string; isMe: boolean };
type Doc = { id: number; name: string; type: string; size: string; date: string };
type TimelineStage = { label: string; done?: boolean; active?: boolean };
type Project = { name: string; client: string; status: string; startDate: string; deliveryDate: string; progress: number };

type ClientData = {
  password: string;
  project: Project;
  deliverables: Deliverable[];
  messages: Message[];
  documents: Doc[];
  timeline: TimelineStage[];
};

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

// ─── Login Gate ───────────────────────────────────────────────────────────────
const LoginGate = ({ onLogin }: { onLogin: (data: ClientData) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) { setError("Please enter both username and password."); return; }
    setLoading(true);
    setTimeout(() => {
      const client = CLIENTS[username.toLowerCase().trim()];
      if (client && client.password === password) {
        onLogin(client);
      } else {
        setError("Incorrect username or password. Please try again.");
        setLoading(false);
        setTimeout(() => setError(""), 3000);
      }
    }, 900);
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
          <p className="text-[0.7rem] text-white/40 uppercase tracking-widest">Sign in with your project credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Username */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoFocus
              className="w-full bg-transparent border border-white/10 text-white placeholder-white/20 pl-11 pr-4 py-4 text-sm tracking-widest focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-transparent border border-white/10 text-white placeholder-white/20 pl-11 pr-12 py-4 text-sm tracking-widest focus:outline-none focus:border-white/40 transition-colors"
            />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="text-[0.65rem] text-red-400 uppercase tracking-widest pt-1">
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 text-[0.65rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Signing in..." : "Enter Portal"}
          </button>
        </form>

        <p className="text-center text-[0.6rem] text-white/20 uppercase tracking-widest mt-8">
          Credentials provided by your project manager
        </p>
      </motion.div>
    </div>
  );
};

// ─── Overview ─────────────────────────────────────────────────────────────────
const OverviewSection = ({ data, onRevision, onGoHome }: { data: ClientData; onRevision: () => void; onGoHome: () => void }) => (
  <div className="space-y-8">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="border border-white/10 bg-white/[0.02] p-8">
      <p className="text-[0.65rem] uppercase tracking-[0.15em] text-white/40 mb-3">Welcome back, {data.project.client}</p>
      <h2 className="text-xl font-black uppercase tracking-tighter text-white mb-4">Your private project dashboard.</h2>
      <p className="text-[0.75rem] text-white/50 leading-relaxed max-w-lg">
        Track progress, review content, submit feedback, and manage all project files in one place. Everything is private and accessible only to you.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { label: "Project", value: data.project.name, sub: "Active Campaign" },
        { label: "Start Date", value: data.project.startDate, sub: "Kick-off" },
        { label: "Delivery", value: data.project.deliveryDate, sub: "Final deadline" },
      ].map((card, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
          className="border border-white/10 bg-white/[0.02] p-6">
          <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/30 mb-2">{card.label}</p>
          <p className="font-black text-white text-sm uppercase tracking-tight leading-snug mb-1">{card.value}</p>
          <p className="text-[0.6rem] text-white/30 uppercase tracking-widest">{card.sub}</p>
        </motion.div>
      ))}
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
      className="border border-white/10 bg-white/[0.02] p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[0.6rem] uppercase tracking-[0.15em] text-white/40">Overall Progress</span>
        <span className="text-lg font-black text-white">{data.project.progress}%</span>
      </div>
      <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${data.project.progress}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="h-full bg-white" />
      </div>
    </motion.div>

    <div className="flex flex-wrap gap-4">
      <button onClick={onRevision}
        className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300">
        <RefreshCcw className="w-3.5 h-3.5" /> Request Revision
      </button>
      <button className="flex items-center gap-2 bg-white text-black px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-all duration-300">
        <ArrowDownToLine className="w-3.5 h-3.5" /> Download All Files
      </button>
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
      className="border border-white/10 bg-white/[0.02] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white mb-1">Need more services?</p>
          <p className="text-[0.65rem] text-white/40 max-w-md">Explore our full range — social media reels, drone packages, brand identity, and more.</p>
        </div>
      </div>
      <button onClick={onGoHome} className="shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
        View Services <ChevronRight className="w-3 h-3" />
      </button>
    </motion.div>
  </div>
);

// ─── Deliverables ─────────────────────────────────────────────────────────────
const DeliverablesSection = ({ deliverables }: { deliverables: Deliverable[] }) => {
  const [activeVideo, setActiveVideo] = useState<Deliverable | null>(null);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {deliverables.map((item, i) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }}
            className="border border-white/10 bg-white/[0.02] group overflow-hidden">
            <div className="relative aspect-video bg-[#111] overflow-hidden cursor-pointer" onClick={() => item.vimeoId && setActiveVideo(item)}>
              <img src={item.thumb} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.1 }}
                  className={`w-14 h-14 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm ${item.vimeoId ? "bg-white/10" : "bg-white/5 opacity-30"}`}>
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </motion.div>
              </div>
              <div className="absolute top-3 right-3"><StatusBadge status={item.status} /></div>
              <div className="absolute bottom-3 left-3 text-[0.55rem] text-white/50 font-bold uppercase tracking-widest bg-black/60 px-2 py-1 backdrop-blur-sm">{item.duration}</div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-white">{item.title}</p>
                <p className="text-[0.55rem] text-white/30 uppercase tracking-widest mt-0.5">{item.type}</p>
              </div>
              <button className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 text-white/50">
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-6 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}>
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }} className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=1&badge=0&autopause=0`}
                className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title={activeVideo.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ─── Feedback ─────────────────────────────────────────────────────────────────
const FeedbackSection = ({ initialMessages, clientName }: { initialMessages: Message[]; clientName: string }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), sender: clientName, role: "Client", text: input.trim(), time: "Just now", isMe: true }]);
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
          <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[0.55rem] uppercase tracking-widest font-bold text-white/40">{msg.sender}</span>
              <span className="text-[0.5rem] text-white/20">{msg.time}</span>
            </div>
            <div className={`max-w-sm px-4 py-3 text-[0.7rem] leading-relaxed ${msg.isMe ? "bg-white text-black" : "border border-white/10 bg-white/5 text-white/80"}`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-3">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add feedback or reply..."
          className="flex-1 bg-transparent border border-white/10 text-white text-[0.7rem] px-4 py-3 placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors" />
        <button type="submit" className="bg-white text-black px-5 py-3 flex items-center justify-center hover:bg-white/90 transition-colors">
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

// ─── Documents ────────────────────────────────────────────────────────────────
const DocumentsSection = ({ documents }: { documents: Doc[] }) => (
  <div className="border border-white/10 bg-white/[0.02] divide-y divide-white/5">
    {documents.map((doc, i) => (
      <motion.div key={doc.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
        className="flex items-center justify-between px-6 py-4 group hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-[0.5rem] font-bold text-white/40 uppercase">{doc.type}</div>
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white">{doc.name}</p>
            <p className="text-[0.55rem] text-white/30 mt-0.5">{doc.size} · {doc.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[0.55rem] uppercase tracking-widest text-white/30 hover:text-white transition-colors px-3 py-1.5 border border-transparent hover:border-white/20">View</button>
          <button className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 text-white/40">
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
);

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TimelineSection = ({ stages }: { stages: TimelineStage[] }) => (
  <div className="border border-white/10 bg-white/[0.02] p-8">
    <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/30 mb-10">Production Pipeline</p>
    <div className="relative hidden md:block">
      <div className="absolute top-4 left-0 right-0 h-px bg-white/10" />
      <div className="flex justify-between relative">
        {stages.map((stage, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 text-center">
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 relative ${stage.active ? "border-white bg-white" : stage.done ? "border-white/60 bg-white/20" : "border-white/15 bg-transparent"}`}>
              {stage.done && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
              {stage.active && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
              {!stage.done && !stage.active && <Circle className="w-3 h-3 text-white/20" />}
            </div>
            <span className={`text-[0.6rem] uppercase tracking-widest font-bold ${stage.active ? "text-white" : stage.done ? "text-white/60" : "text-white/20"}`}>{stage.label}</span>
            {stage.active && <span className="text-[0.5rem] uppercase tracking-wider text-amber-400 border border-amber-400/30 px-2 py-0.5">Current</span>}
          </motion.div>
        ))}
      </div>
    </div>
    <div className="space-y-6 md:hidden">
      {stages.map((stage, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${stage.active ? "border-white bg-white" : stage.done ? "border-white/50 bg-white/10" : "border-white/15"}`}>
            {stage.done && <CheckCircle2 className="w-3 h-3 text-white" />}
            {stage.active && <div className="w-2 h-2 rounded-full bg-black" />}
          </div>
          <span className={`text-[0.65rem] font-bold uppercase tracking-widest ${stage.active ? "text-white" : stage.done ? "text-white/50" : "text-white/20"}`}>
            {stage.label}
            {stage.active && <span className="ml-3 text-[0.5rem] text-amber-400">← Current</span>}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Settings ─────────────────────────────────────────────────────────────────
const SettingsSection = ({ data, onLogout }: { data: ClientData; onLogout: () => void }) => (
  <div className="space-y-4">
    {[
      { label: "Client Name", value: data.project.client },
      { label: "Project", value: data.project.name },
      { label: "Password", value: "••••••••••" },
    ].map((field) => (
      <div key={field.label} className="border border-white/10 bg-white/[0.02] px-6 py-4">
        <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/30 mb-1">{field.label}</p>
        <p className="text-[0.7rem] font-bold text-white tracking-widest">{field.value}</p>
      </div>
    ))}
    <button onClick={onLogout}
      className="flex items-center gap-2 border border-red-400/30 text-red-400/70 px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-red-400/10 transition-all duration-300 mt-4">
      <LogOut className="w-3.5 h-3.5" /> Sign Out
    </button>
  </div>
);

// ─── Revision Modal ───────────────────────────────────────────────────────────
const RevisionModal = ({ onClose }: { onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  const [val, setVal] = useState("");
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-6 backdrop-blur-xl" onClick={onClose}>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md border border-white/10 bg-[#0a0a0a] p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-sm font-black uppercase tracking-tighter text-white mb-1">Request Revision</h3>
            <p className="text-[0.6rem] text-white/30 uppercase tracking-widest">Describe the changes you need</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
        </div>
        {!sent ? (
          <form onSubmit={(e) => { e.preventDefault(); if (val.trim()) setSent(true); }} className="space-y-4">
            <textarea value={val} onChange={(e) => setVal(e.target.value)} rows={5}
              placeholder="e.g. Please extend the opening shot by 5 seconds and adjust the title font..."
              className="w-full bg-transparent border border-white/10 text-white text-[0.7rem] px-4 py-3 placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none" />
            <button type="submit" className="w-full bg-white text-black py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors">
              Submit Revision Request
            </button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
            <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white mb-1">Request Sent!</p>
            <p className="text-[0.6rem] text-white/40">We'll review your feedback within 24 hours.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// ─── Nav Items ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "deliverables", label: "Deliverables", icon: Film },
  { id: "feedback", label: "Feedback", icon: MessageSquare },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "settings", label: "Settings", icon: Settings },
];

// ─── Dashboard ────────────────────────────────────────────────────────────────
const Dashboard = ({ data, onLogout, onGoHome }: { data: ClientData; onLogout: () => void; onGoHome: () => void }) => {
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showRevision, setShowRevision] = useState(false);
  const currentNav = NAV_ITEMS.find((n) => n.id === active);

  const renderSection = () => {
    switch (active) {
      case "overview":     return <OverviewSection data={data} onRevision={() => setShowRevision(true)} onGoHome={onGoHome} />;
      case "deliverables": return <DeliverablesSection deliverables={data.deliverables} />;
      case "feedback":     return <FeedbackSection initialMessages={data.messages} clientName={data.project.client} />;
      case "documents":    return <DocumentsSection documents={data.documents} />;
      case "timeline":     return <TimelineSection stages={data.timeline} />;
      case "settings":     return <SettingsSection data={data} onLogout={onLogout} />;
      default:             return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] flex">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[90] md:hidden" onClick={() => setSidebarOpen(false)} />
        )}
      </AnimatePresence>

      <aside className={`fixed top-0 left-0 h-full z-[95] w-64 bg-[#050505] border-r border-white/5 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="p-6 border-b border-white/5">
          <img src={LogoImg} alt="Wasim Pakhtoon" className="h-7 opacity-90" />
          <p className="text-[0.5rem] text-white/20 uppercase tracking-[0.2em] mt-2">Client Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button key={item.id} onClick={() => { setActive(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-[0.65rem] uppercase tracking-widest font-bold transition-all duration-200 text-left group ${isActive ? "bg-white text-black" : "text-white/30 hover:text-white hover:bg-white/5"}`}>
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-black" : "text-white/30 group-hover:text-white"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/5">
          <div className="bg-white/[0.03] border border-white/[0.08] p-3 rounded-sm">
            <p className="text-[0.5rem] uppercase tracking-widest text-white/20 mb-1">Active Project</p>
            <p className="text-[0.6rem] font-bold uppercase tracking-tight text-white/60 leading-snug">{data.project.name}</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white/40" style={{ width: `${data.project.progress}%` }} />
              </div>
              <span className="text-[0.5rem] text-white/30">{data.project.progress}%</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-white/5 px-6 md:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white/50 hover:text-white transition-colors">
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-[0.7rem] font-black uppercase tracking-tight text-white">{data.project.name}</h1>
                  <StatusBadge status={data.project.status} />
                </div>
                <p className="text-[0.55rem] text-white/30 uppercase tracking-widest mt-0.5">Client: {data.project.client}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full bg-white" style={{ width: `${data.project.progress}%` }} />
              </div>
              <span className="text-[0.55rem] text-white/40 font-bold">{data.project.progress}%</span>
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 md:px-10 py-8">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
            {currentNav && <currentNav.icon className="w-4 h-4 text-white/30" />}
            <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/50">{currentNav?.label}</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="px-6 md:px-10 py-4 border-t border-white/5">
          <p className="text-[0.5rem] text-white/15 uppercase tracking-widest">© Wasim Pakhtoon Creative — Confidential Client Portal</p>
        </footer>
      </div>

      <AnimatePresence>
        {showRevision && <RevisionModal onClose={() => setShowRevision(false)} />}
      </AnimatePresence>
    </div>
  );
};

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function ClientPortal({ onClose }: { onClose?: () => void }) {
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const handleLogout = () => { setClientData(null); onClose?.(); };
  return (
    <AnimatePresence mode="wait">
      {!clientData ? (
        <motion.div key="login" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <LoginGate onLogin={setClientData} />
        </motion.div>
      ) : (
        <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Dashboard data={clientData} onLogout={handleLogout} onGoHome={onClose ?? (() => {})} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
