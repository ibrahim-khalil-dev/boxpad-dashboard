import { useState, useRef } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

const InboxIcon = ({ active }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#90c8ff" : "rgba(160,200,255,0.9)"}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="14" rx="2" />
    <polyline points="3,9 12,15 21,9" />
  </svg>
);

const ContactsIcon = ({ active }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#90c8ff" : "rgba(160,200,255,0.9)"}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
    <circle cx="17" cy="11" r="3" />
    <path d="M14 21v-2a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2" />
  </svg>
);

const AIIcon = ({ active }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#90c8ff" : "rgba(160,200,255,0.9)"}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const WorkflowsIcon = ({ active }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#90c8ff" : "rgba(160,200,255,0.9)"}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <line x1="12" y1="7" x2="12" y2="12" />
    <line x1="12" y1="12" x2="6" y2="17" />
    <line x1="12" y1="12" x2="18" y2="17" />
  </svg>
);

const CampaignsIcon = ({ active }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#90c8ff" : "rgba(160,200,255,0.9)"}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill={active ? "#90c8ff" : "rgba(160,200,255,0.9)"} />
  </svg>
);

const TeamIcon = ({ active }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#90c8ff" : "rgba(160,200,255,0.9)"}
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="8" r="3" />
    <path d="M2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 11a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5" />
  </svg>
);

const ICON_MAP = {
  inbox: InboxIcon,
  contacts: ContactsIcon,
  ai: AIIcon,
  workflows: WorkflowsIcon,
  campaigns: CampaignsIcon,
  team: TeamIcon,
};

// ─── Honeycomb positions — 3 left, 3 right ────────────────────────────────────

const HONEYCOMBS = [
  { id: "ai",        top: "14%", left: "22%" },
  { id: "inbox",     top: "50%", left: "11%" },
  { id: "contacts",  top: "68%", left: "25%" },
  { id: "team",      top: "10%", right: "7%"  },
  { id: "workflows", top: "36%", right: "15%" },
  { id: "campaigns", top: "62%", right: "7%"  },
];

// ─── Single Honeycomb Cell ────────────────────────────────────────────────────

function HoneycombCell({ id, top, left, right, isActive, onClick, refCallback }) {
  const Icon = ICON_MAP[id];

  return (
    <div
      ref={refCallback}
      onClick={onClick}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.07)";
        if (!isActive) e.currentTarget.firstChild.style.filter = "brightness(1.35)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        if (!isActive) e.currentTarget.firstChild.style.filter = "brightness(1)";
      }}
      style={{
        position: "absolute",
        top,
        ...(left  ? { left  } : {}),
        ...(right ? { right } : {}),
        width: 68,
        height: 78,
        cursor: "pointer",
        zIndex: 10,
        transition: "transform 0.18s ease",
      }}
    >
      <div style={{
        width: "100%",
        height: "100%",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: isActive
          ? "linear-gradient(135deg, rgba(0,100,255,0.6) 0%, rgba(20,60,200,0.75) 100%)"
          : "rgba(10,30,70,0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease, filter 0.3s ease",
        filter: isActive
          ? "brightness(1.3) drop-shadow(0 0 8px rgba(80,160,255,0.7))"
          : "brightness(1)",
      }}>
        {Icon && <Icon active={isActive} />}
      </div>
    </div>
  );
}

// ─── Glowing Orb with GIF ─────────────────────────────────────────────────────

function GlowOrb() {
  return (
    <>
      <style>{`
        @keyframes bp-spin  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes bp-spinR { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
      `}</style>
      <div style={{
        position: "absolute",
        left: "50%",
        top: "5%",
        transform: "translateX(-50%)",
        width: 200,
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
      }}>
         
        <div style={{
          position: "absolute", width: 148, height: 148, borderRadius: "50%",
          border: "2px solid transparent",
          borderBottomColor: "rgba(100,180,255,0.6)", borderRightColor: "rgba(80,160,255,0.3)",
          animation: "bp-spinR 3.5s linear infinite",
        }} />
        {/* ── Replace src with your gif import if using a bundler ── */}
        <img
          src="/src/assets/loader.gif"
          alt="loading"
          style={{
            width: 220, height: 220,
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            zIndex: 6,
            
          }}
        />
      </div>
    </>
  );
}

// ─── Flying Dot ───────────────────────────────────────────────────────────────

function FlyingDot({ fly }) {
  if (!fly) return null;
  return (
    <div style={{
      position: "absolute",
      left: fly.x,
      top: fly.y,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "radial-gradient(circle, #80c8ff, #2266ff)",
      boxShadow: "0 0 12px #4488ff, 0 0 24px rgba(68,136,255,0.5)",
      pointerEvents: "none",
      zIndex: 50,
      transition: [
        "left 0.65s cubic-bezier(0.4,0,0.2,1)",
        "top 0.65s cubic-bezier(0.4,0,0.2,1)",
        "opacity 0.3s ease 0.45s",
      ].join(", "),
      opacity: fly.fading ? 0 : 1,
    }} />
  );
}

// ─── HoneycombLoader — default export ────────────────────────────────────────
//
// Props:
//   onSelect(id) — fires after fly animation completes.
//                  id is one of: "inbox" | "contacts" | "ai" | "team" | "workflows" | "campaigns"
//
// Usage:
//   import HoneycombLoader from "./HoneycombLoader";
//   <HoneycombLoader onSelect={(id) => console.log(id)} />
// 
//
// Note: If using Vite/CRA, import the gif at the top instead:
//   import loaderGif from "./assets/loader.gif";
//   then replace src="/src/assets/loader.gif" with src={loaderGif}

export default function HoneycombLoader({ onSelect }) {
  const [activeId, setActiveId] = useState(null);
  const [fly, setFly]           = useState(null);

  const fieldRef = useRef(null);
  const hcRefs   = useRef({});

  const handleSelect = (hc) => {
    setActiveId(hc.id);

    const fieldRect = fieldRef.current.getBoundingClientRect();
    const hcEl      = hcRefs.current[hc.id];
    if (!hcEl) return;
    const hcRect = hcEl.getBoundingClientRect();

    const startX = hcRect.left - fieldRect.left + hcRect.width  / 2 - 7;
    const startY = hcRect.top  - fieldRect.top  + hcRect.height / 2 - 7;
    const endX   = fieldRect.width  / 2 - 7;
    const endY   = fieldRect.height - 16;

    setFly({ x: startX, y: startY, fading: false });
    setTimeout(() => setFly({ x: endX, y: endY, fading: false }), 30);
    setTimeout(() => setFly(f => f ? { ...f, fading: true } : null), 480);
    setTimeout(() => {
      setFly(null);
      onSelect?.(hc.id);
    }, 900);
  };

  return (
    <div
      ref={fieldRef}
      style={{
        position: "relative",
        width: "100%",
        height: 420,
        background: "transparent",
        borderRadius: "16px 16px 0 0",
        overflow: "hidden",
        userSelect: "none",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <GlowOrb />

      <div style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "60%",
        textAlign: "center",
        zIndex: 5,
        width: 450,
      }}>
        <p style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 36,
          fontWeight: 700,
          color: "#fff",
          margin: "0 0 6px",
          letterSpacing: "0.01em",
        }}>
          Extracting Information...
        </p>
        <p style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 18,
          color: "rgba(180,210,255,0.8)",
          margin: 0,
          lineHeight: 1.6,
        }}>
          We are extracting information from the above honey combs to your system
        </p>
      </div>

      {HONEYCOMBS.map(hc => (
        <HoneycombCell
          key={hc.id}
          id={hc.id}
          top={hc.top}
          left={hc.left}
          right={hc.right}
          isActive={activeId === hc.id}
          onClick={() => handleSelect(hc)}
          refCallback={el => { hcRefs.current[hc.id] = el; }}
        />
      ))}

      <FlyingDot fly={fly} />
    </div>
  );
}