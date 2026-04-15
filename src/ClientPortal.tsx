/**
 * Client Portal — Wasim Pakhtoon Creative Agency
 * Connected to Supabase.
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard, Film, MessageSquare, FileText, Clock,
  Settings, Download, Play, X, ChevronRight, Send, Menu,
  LogOut, RefreshCcw, Sparkles, Lock, Eye, EyeOff,
  ArrowDownToLine, CheckCircle2, Loader2, User, ExternalLink,
} from "lucide-react";
import LogoImg from "../images/logo.png";
import { supabase } from "./lib/supabase";

// ─── Types (matching Supabase schema) ─────────────────────────────────────────

/** Flat row from the `clients` table */
type ClientData = {
  id?: string;
  username: string;
  password?: string;
  email?: string;
  project_name?: string;
  status?: string;
};

/** Row from the `deliverables` table */
type Deliverable = {
  id: string;
  title: string;
  file_url: string;
  status: string;
  client_username: string;
  created_at?: string;
};

type Message = { id: number; sender: string; role: string; text: string; time: string; isMe: boolean };
type Doc = { id: number; name: string; type: string; size: string; date: string };
type TimelineStage = { label: string; done?: boolean; active?: boolean };

// ─── Supabase Data Hook ───────────────────────────────────────────────────────

function useClientPortalData(username: string) {
  const [deliverables, setDeliverables] = useState<Deliverable[]>([]);
  const [messages] = useState<Message[]>([]);
  const [documents] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPortalData = useCallback(async () => {
    if (!username || !supabase) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("deliverables")
        .select("*")
        .eq("client_username", username);

      if (error) {
        console.error("[Deliverables Fetch Error]:", error);
        setError("Failed to load deliverables.");
      } else {
        setDeliverables(data || []);
        setError(null);
      }
      setLastUpdated(new Date());
    } catch (err) {
      console.error("[Portal Fetch Error]:", err);
      setError(err instanceof Error ? err.message : "Failed to load portal data");
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchPortalData();
  }, [fetchPortalData]);

  return { deliverables, messages, documents, loading, error, lastUpdated, refetch: fetchPortalData };
}

// ─── Portal Loading State ─────────────────────────────────────────────────────
const PortalLoadingState = () => (
  <div className="flex flex-col items-center justify-center py-24 gap-4">
    <Loader2 className="w-6 h-6 text-white/20 animate-spin" />
    <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/20">Loading...</p>
  </div>
);

// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: string }) => {
  const s = (status || "").toLowerCase();
  const colors: Record<string, string> = {
    editing: "border-amber-400/40 text-amber-300 bg-amber-400/10",
    review: "border-blue-400/40 text-blue-300 bg-blue-400/10",
    "in review": "border-blue-400/40 text-blue-300 bg-blue-400/10",
    completed: "border-green-400/40 text-green-300 bg-green-400/10",
    delivered: "border-green-400/40 text-green-300 bg-green-400/10",
    pending: "border-white/20 text-white/40 bg-white/5",
    soon: "border-white/20 text-white/40 bg-white/5",
    active: "border-blue-400/40 text-blue-300 bg-blue-400/10",
  };
  return (
    <span className={`text-[0.55rem] uppercase tracking-[0.15em] font-bold border px-2.5 py-1 rounded-sm ${colors[s] ?? "border-white/20 text-white/50"}`}>
      {status || "Active"}
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim();
    const cleanPass = password.trim();

    if (!cleanUser || !cleanPass) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (!supabase) {
        setError("Supabase configuration missing (Check .env.local)");
        return;
      }

      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .eq("username", cleanUser)
        .eq("password", cleanPass);

      if (error) {
        setError("Login failed (Database error)");
        console.error("[DB Error]:", error);
        return;
      }

      if (!data || data.length === 0) {
        setError("Invalid username or password");
        return;
      }

      onLogin(data[0] as ClientData);
    } catch (err) {
      console.error("[Login Error]:", err);
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md">
        <div className="mb-12 flex flex-col items-center text-center">
          <img src={LogoImg} alt="Wasim Pakhtoon" className="h-8 mb-8 opacity-90" />
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 bg-white/5">
            <Lock className="w-5 h-5 text-white/60" />
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Client Portal</h1>
          <p className="text-[0.7rem] text-white/40 uppercase tracking-widest">Sign in with your project credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" autoFocus
              className="w-full bg-transparent border border-white/10 text-white placeholder-white/20 pl-11 pr-4 py-4 text-sm tracking-widest focus:outline-none focus:border-white/40 transition-colors" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
              className="w-full bg-transparent border border-white/10 text-white placeholder-white/20 pl-11 pr-12 py-4 text-sm tracking-widest focus:outline-none focus:border-white/40 transition-colors" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <AnimatePresence>
            {error && <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="text-[0.65rem] text-red-400 uppercase tracking-widest pt-1">{error}</motion.p>}
          </AnimatePresence>
          <button type="submit" disabled={loading} className="w-full bg-white text-black py-4 text-[0.65rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 mt-2">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Signing in..." : "Enter Portal"}
          </button>
        </form>
        <p className="text-center text-[0.6rem] text-white/20 uppercase tracking-widest mt-8">Credentials provided by your project manager</p>
      </motion.div>
    </div>
  );
};

// ─── Overview ─────────────────────────────────────────────────────────────────
const OverviewSection = ({ data, onRevision, onGoHome }: { data: ClientData; onRevision: () => void; onGoHome: () => void }) => (
  <div className="space-y-0">
    {/* BLOCK 1 — WHITE: Welcome banner */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="bg-white p-8 md:p-10">
      <p className="text-[0.65rem] uppercase tracking-[0.15em] text-black/40 mb-3">Welcome back, {data?.username || "Client"}</p>
      <h2 className="text-2xl font-black uppercase tracking-tighter text-black mb-4">Your private project dashboard.</h2>
      <p className="text-[0.75rem] text-black/50 leading-relaxed max-w-lg">
        Track progress, review content, submit feedback, and manage all project files in one place.
      </p>
    </motion.div>

    {/* BLOCK 2 — BLACK: Project info cards */}
    <div className="bg-[#080808] border-t border-b border-white/5 grid grid-cols-1 md:grid-cols-2">
      {[
        { label: "Project", value: data?.project_name || "—" },
        { label: "Status", value: data?.status || "Active" },
      ].map((card, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`p-8 ${i === 0 ? "border-b md:border-b-0 md:border-r border-white/5" : ""}`}>
          <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/30 mb-3">{card.label}</p>
          <div className="flex items-center gap-2">
            {card.label === "Status"
              ? <StatusBadge status={card.value} />
              : <p className="font-black text-white text-lg uppercase tracking-tight leading-snug">{card.value}</p>}
          </div>
        </motion.div>
      ))}
    </div>

    {/* BLOCK 3 — WHITE: Actions */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-[#f5f5f5] p-8 flex flex-wrap gap-4 border-b border-black/10">
      <button onClick={onRevision} className="flex items-center gap-2 border border-black/20 text-black px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors">
        <RefreshCcw className="w-3.5 h-3.5" /> Request Revision
      </button>
      <button className="flex items-center gap-2 bg-black text-white px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-black/80 transition-colors">
        <ArrowDownToLine className="w-3.5 h-3.5" /> Download All Files
      </button>
    </motion.div>

    {/* BLOCK 4 — BLACK: More services CTA */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#080808] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white mb-1">Need more services?</p>
          <p className="text-[0.65rem] text-white/40 max-w-md">Explore our full range — social media reels, drone packages, and brand identity.</p>
        </div>
      </div>
      <button onClick={onGoHome} className="shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-colors flex items-center gap-2">
        View Services <ChevronRight className="w-3 h-3" />
      </button>
    </motion.div>
  </div>
);

// ─── Deliverables ─────────────────────────────────────────────────────────────
const DeliverablesSection = ({ deliverables }: { deliverables: Deliverable[] }) => {
  return (
    <div className="divide-y divide-black/10 overflow-hidden">
      {deliverables.map((item, i) => {
        const isWhite = i % 2 === 0;
        return (
          <motion.div key={item.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 transition-opacity ${
              isWhite ? "bg-white" : "bg-[#0a0a0a] border-white/5"
            }`}>
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${
                isWhite ? "bg-black/5 text-black/40" : "bg-white/5 text-white/30 border border-white/10"
              }`}>
                <Film className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-[0.7rem] font-bold uppercase tracking-widest ${ isWhite ? "text-black" : "text-white" }`}>{item.title}</p>
                <p className={`text-[0.55rem] uppercase tracking-widest mt-1 ${ isWhite ? "text-black/30" : "text-white/30" }`}>
                  {item.created_at ? new Date(item.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : ""}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <StatusBadge status={item.status} />
              {item.file_url && (
                <a
                  href={item.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 text-[0.6rem] font-bold uppercase tracking-widest transition-colors ${
                    isWhite
                      ? "bg-black text-white hover:bg-black/80"
                      : "bg-white text-black hover:bg-white/90"
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View File
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
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

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  return (
    <div className="flex flex-col h-[600px] border border-white/10 bg-white/[0.02]">
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        <MessageSquare className="w-4 h-4 text-white/40" />
        <span className="text-[0.65rem] uppercase tracking-[0.15em] font-bold text-white/60">Project Feedback</span>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-3">
            <MessageSquare className="w-8 h-8 text-white/10" />
            <p className="text-[0.6rem] uppercase tracking-widest text-white/20">No messages yet. Start the conversation below.</p>
          </div>
        )}
        {messages.map((msg) => (
          <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}>
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
        <button type="submit" className="bg-white text-black px-5 py-3 hover:bg-white/90 transition-colors"><Send className="w-4 h-4" /></button>
      </form>
    </div>
  );
};

// ─── Documents ────────────────────────────────────────────────────────────────
const DocumentsSection = ({ documents }: { documents: Doc[] }) => (
  <div className="border border-white/10 bg-white/[0.02] divide-y divide-white/5 text-center md:text-left">
    {documents.length > 0 ? documents.map((doc, i) => (
      <motion.div key={doc.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
        className="flex flex-col md:flex-row items-center justify-between px-6 py-4 group hover:bg-white/5 transition-colors gap-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-[0.5rem] font-bold text-white/40 uppercase">{doc.type}</div>
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white">{doc.name}</p>
            <p className="text-[0.55rem] text-white/30 mt-0.5">{doc.size} · {doc.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[0.55rem] uppercase tracking-widest text-white/30 hover:text-white transition-colors px-3 py-1.5 border border-transparent hover:border-white/20">View</button>
          <button className="w-8 h-8 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white/40"><Download className="w-3.5 h-3.5" /></button>
        </div>
      </motion.div>
    )) : (
      <div className="py-24 text-center">
        <FileText className="w-8 h-8 text-white/10 mx-auto mb-4" />
        <p className="text-[0.6rem] uppercase tracking-widest text-white/20">No documents shared yet</p>
      </div>
    )}
  </div>
);

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TimelineSection = ({ stages }: { stages?: TimelineStage[] }) => (
  <div className="border border-white/10 bg-white/[0.02] p-8">
    <p className="text-[0.6rem] uppercase tracking-[0.15em] text-white/30 mb-10">Production Pipeline</p>
    {(!stages || stages.length === 0) ? (
      <div className="py-12 text-center">
        <Clock className="w-8 h-8 text-white/10 mx-auto mb-4" />
        <p className="text-[0.6rem] uppercase tracking-widest text-white/20">Timeline coming soon</p>
      </div>
    ) : (
      <>
        <div className="relative hidden md:block">
          <div className="absolute top-4 left-0 right-0 h-px bg-white/10" />
          <div className="flex justify-between relative">
            {stages.map((stage, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 text-center">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 relative ${stage.active ? "border-white bg-white" : stage.done ? "border-white/60 bg-white/20" : "border-white/15 bg-transparent"}`}>
                  {stage.done && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                  {stage.active && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                </div>
                <span className={`text-[0.6rem] uppercase tracking-widest font-bold ${stage.active ? "text-white" : stage.done ? "text-white/60" : "text-white/20"}`}>{stage.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-6 md:hidden">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${stage.active ? "border-white bg-white" : stage.done ? "border-white/50 bg-white/10" : "border-white/15"}`}>
                {stage.active && <div className="w-2 h-2 rounded-full bg-black" />}
              </div>
              <span className={`text-[0.65rem] font-bold uppercase tracking-widest ${stage.active ? "text-white" : stage.done ? "text-white/50" : "text-white/20"}`}>{stage.label}</span>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

// ─── Settings ─────────────────────────────────────────────────────────────────
const SettingsSection = ({ data, onLogout }: { data: ClientData; onLogout: () => void }) => (
  <div className="overflow-hidden">
    {[
      { label: "Username", value: data?.username || "—" },
      { label: "Email", value: data?.email || "—" },
      { label: "Project", value: data?.project_name || "—" },
      { label: "Access Level", value: "Premium Partner" },
    ].map((field, i) => {
      const isWhite = i % 2 === 0;
      return (
        <div key={field.label} className={`px-8 py-6 border-b ${ isWhite ? "bg-white border-black/10" : "bg-[#080808] border-white/5" }`}>
          <p className={`text-[0.5rem] uppercase tracking-[0.2em] mb-1.5 ${ isWhite ? "text-black/30" : "text-white/30" }`}>{field.label}</p>
          <p className={`text-[0.8rem] font-black tracking-widest uppercase ${ isWhite ? "text-black" : "text-white" }`}>{field.value}</p>
        </div>
      );
    })}
    <div className="bg-[#080808] px-8 py-6">
      <button onClick={onLogout}
        className="flex items-center gap-2 border border-red-400/30 text-red-400/70 px-6 py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-red-400/10 transition-all duration-300">
        <LogOut className="w-3.5 h-3.5" /> Sign Out
      </button>
    </div>
  </div>
);

// ─── Revision Modal ───────────────────────────────────────────────────────────
const RevisionModal = ({ onClose }: { onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  const [val, setVal] = useState("");
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-6 backdrop-blur-xl" onClick={onClose}>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} className="w-full max-w-md border border-white/10 bg-[#0a0a0a] p-8">
        <div className="flex justify-between items-start mb-6">
          <div><h3 className="text-sm font-black uppercase tracking-tighter text-white mb-1">Request Revision</h3><p className="text-[0.6rem] text-white/30 uppercase tracking-widest">Describe changes needed</p></div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
        </div>
        {!sent ? (
          <form onSubmit={(e) => { e.preventDefault(); if (val.trim()) setSent(true); }} className="space-y-4">
            <textarea value={val} onChange={(e) => setVal(e.target.value)} rows={5} placeholder="e.g. Please extend the opening shot..."
              className="w-full bg-transparent border border-white/10 text-white text-[0.7rem] px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none" />
            <button type="submit" className="w-full bg-white text-black py-3 text-[0.6rem] font-bold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors">Submit Request</button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
            <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-white mb-1">Request Sent!</p>
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

  const portal = useClientPortalData(data.username);

  const renderSection = () => {
    switch (active) {
      case "overview": return <OverviewSection data={data} onRevision={() => setShowRevision(true)} onGoHome={onGoHome} />;
      case "deliverables":
        if (portal.loading) return <PortalLoadingState />;
        return portal.deliverables.length > 0 ? (
          <DeliverablesSection deliverables={portal.deliverables} />
        ) : (
          <div className="py-24 text-center border border-white/5 bg-white/[0.02]">
            <Film className="w-8 h-8 text-white/10 mx-auto mb-4" />
            <p className="text-[0.6rem] uppercase tracking-widest text-white/20">No deliverables yet</p>
          </div>
        );
      case "feedback": return <FeedbackSection initialMessages={portal.messages} clientName={data?.username || "Client"} />;
      case "documents": return <DocumentsSection documents={portal.documents} />;
      case "timeline": return <TimelineSection />;
      case "settings": return <SettingsSection data={data} onLogout={onLogout} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] flex">
      <AnimatePresence>
        {sidebarOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 z-[90] md:hidden" onClick={() => setSidebarOpen(false)} />)}
      </AnimatePresence>
      <aside className={`fixed top-0 left-0 h-full z-[95] w-64 bg-[#050505] border-r border-white/5 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="p-6 border-b border-white/5"><img src={LogoImg} alt="Wasim Pakhtoon" className="h-7 opacity-90" /><p className="text-[0.5rem] text-white/20 uppercase tracking-[0.2em] mt-2">Client Portal</p></div>
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
            <p className="text-[0.6rem] font-bold uppercase tracking-tight text-white/60 leading-snug">{data?.project_name || "—"}</p>
            <div className="mt-2">
              <StatusBadge status={data?.status || "active"} />
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-white/5">
          <button onClick={onGoHome} className="w-full flex items-center gap-2 px-3 py-2.5 text-[0.6rem] uppercase tracking-widest font-bold text-white/20 hover:text-white hover:bg-white/5 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Back to Website
          </button>
        </div>
      </aside>
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-white/5 px-6 md:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white/50 hover:text-white transition-colors"><Menu className="w-5 h-5" /></button>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-[0.7rem] font-black uppercase tracking-tight text-white">{data?.project_name || "Your Project"}</h1>
                  <StatusBadge status={data?.status || "active"} />
                </div>
                <p className="text-[0.55rem] text-white/30 uppercase tracking-widest mt-0.5">Client: {data?.username || "Client"}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={onGoHome} className="hidden sm:flex items-center gap-1.5 text-[0.55rem] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors border-l border-white/10 pl-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Back
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 px-6 md:px-10 py-8">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
            {currentNav && <currentNav.icon className="w-4 h-4 text-white/30" />}
            <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/50">{currentNav?.label}</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
        <footer className="px-6 md:px-10 py-4 border-t border-white/5 flex items-center justify-between gap-4">
          <p className="text-[0.5rem] text-white/15 uppercase tracking-widest">© Wasim Pakhtoon Creative — Confidential Client Portal</p>
          <div className="flex items-center gap-2 shrink-0">
            {portal.error
              ? <span className="text-[0.5rem] text-red-400/50 uppercase tracking-widest">Offline</span>
              : portal.lastUpdated
                ? <span className="text-[0.5rem] text-white/15 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-green-500/60 animate-pulse inline-block" />
                    Live · {portal.lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                : <span className="text-[0.5rem] text-white/10 uppercase tracking-widest flex items-center gap-1.5"><Loader2 className="w-2.5 h-2.5 animate-spin" /> Syncing...</span>
            }
          </div>
        </footer>
      </div>
      <AnimatePresence>{showRevision && <RevisionModal onClose={() => setShowRevision(false)} />}</AnimatePresence>
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
          <Dashboard data={clientData} onLogout={handleLogout} onGoHome={onClose ?? (() => { })} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
