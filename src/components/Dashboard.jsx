// ─── Dashboard ────────────────────────────────────────────────────────────────
//
// Props:
//   loadedSections — object tracking which honeycomb sections have loaded
//   e.g. { inbox: true, contacts: false, ai: true, ... }
//
// Usage:
//   import Dashboard from "./Dashboard";
//   <Dashboard loadedSections={loadedSections} />

const TABS = [
  {
    id: "inbox",
    label: "Inbox",
    path: "M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 6 9 6 9-6",
  },
  {
    id: "contacts",
    label: "Contacts",
    path: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4 10v-2a3 3 0 0 0-3-3",
  },
  {
    id: "ai",
    label: "AI Employees",
    path: "M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z",
  },
  {
    id: "workflows",
    label: "Workflows",
    path: "M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 5v6m0 0-5 5m5-5 5 5",
  },
  {
    id: "campaigns",
    label: "Campaigns",
    path: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-14a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 4h.01",
  },
];

// ─── Skeleton shimmer ─────────────────────────────────────────────────────────

function Skeleton() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "4px 0" }}>
        {[80, 100, 65, 90, 75].map((w, i) => (
          <div key={i} style={{
            height: 11,
            width: `${w}%`,
            borderRadius: 4,
            background: "linear-gradient(90deg, #f0f0f0 25%, #e4e4e4 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: `shimmer 1.4s infinite`,
            animationDelay: `${i * 0.1}s`,
          }} />
        ))}
      </div>
    </>
  );
}

// ─── Column: Inbox sidebar ────────────────────────────────────────────────────

function InboxColumn({ loaded }) {
  return (
    <div style={colWrap}>
      <p style={colTitle}>Inbox</p>
      {!loaded ? <Skeleton /> : (
        <div style={{ animation: "fadeUp 0.4s ease forwards" }}>
          {[
            { label: "My Inbox" },
            { label: "All",        count: 28 },
            { label: "Unassigned", count: 5  },
          ].map((item, i) => (
            <div key={i} style={rowStyle}>
              <span>{item.label}</span>
              {item.count !== undefined && (
                <span style={badgeStyle}>{item.count}</span>
              )}
            </div>
          ))}
          <p style={sectionLabel}>Teams</p>
          {[{ label: "Sales", count: 7 }, { label: "Customer Support", count: 16 }].map((item, i) => (
            <div key={i} style={rowStyle}>
              <span>{item.label}</span>
              <span style={badgeStyle}>{item.count}</span>
            </div>
          ))}
          <p style={sectionLabel}>Users</p>
          {[{ label: "Admins", count: 3 }].map((item, i) => (
            <div key={i} style={rowStyle}>
              <span>{item.label}</span>
              <span style={badgeStyle}>{item.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Column: Chat list ────────────────────────────────────────────────────────

function ChatListColumn({ loaded }) {
  const chats = [
    { name: "Olivia Mckinsey", preview: "Oh my god 🤩 I'll try it ASAP, thank...", color: "#7c3aed", initials: "O", time: "23:23" },
    { name: "Sara Williams",   preview: "Good Evening, Emily! Hope you are...",    color: "#0e9f6e", initials: "E", time: "23:16" },
    { name: "Frank Thompson",  preview: "Thank you for signing up Frank! If t...",  color: "#e3722b", initials: "F", time: "22:28" },
  ];

  return (
    <div style={colWrap}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <p style={{ ...colTitle, margin: 0 }}>Michael Johnson</p>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </div>

      {/* Search bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#f5f5f5", borderRadius: 6, padding: "5px 10px", marginBottom: 8 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span style={{ fontSize: 11, color: "#bbb" }}>Search Chat</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 11, color: "#555", fontWeight: 500 }}>Open ▾</span>
        <span style={{ fontSize: 11, color: "#555", fontWeight: 500 }}>Newest ▾</span>
      </div>

      {!loaded ? <Skeleton /> : (
        <div style={{ animation: "fadeUp 0.4s ease forwards" }}>
          {chats.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 8, padding: "6px 0", borderBottom: "1px solid #f5f5f5", alignItems: "flex-start", cursor: "pointer" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: c.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                {c.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#222" }}>{c.name}</span>
                  <span style={{ fontSize: 10, color: "#aaa" }}>{c.time}</span>
                </div>
                <div style={{ fontSize: 10.5, color: "#888", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.preview}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Column: Active chat ──────────────────────────────────────────────────────

function ActiveChatColumn({ loaded }) {
  const messages = [
    { text: "Hi, I recently joined Fit4Life and I'm trying to access my workout plan, but I can't login. Can you help?", me: false, time: "23:08" },
    { text: "Hello Olivia 👋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you confirm the email address?", me: true, time: "23:08" },
    { text: "Yes, it's olivia.Mckinsey@gmail.com", me: false, time: "23:16" },
    { text: "Thanks! Looks like your reset wasn't completed. I've sent a new link — check your inbox!", me: true, time: "23:16" },
  ];

  return (
    <div style={colWrap}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <p style={{ ...colTitle, margin: 0 }}>Olivia Mckinsey</p>
        <div style={{ display: "flex", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </div>
      </div>

      <div style={{ fontSize: 10, color: "#aaa", textAlign: "center", marginBottom: 6 }}>28 August 2025</div>

      {!loaded ? <Skeleton /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 5, animation: "fadeUp 0.4s ease forwards" }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: msg.me ? "flex-end" : "flex-start" }}>
              <div style={{
                fontSize: 11,
                padding: "6px 9px",
                borderRadius: 8,
                maxWidth: "88%",
                background: msg.me ? "#dbeafe" : "#f3f4f6",
                color: "#333",
                lineHeight: 1.45,
              }}>
                {msg.text}
              </div>
              <span style={{ fontSize: 9.5, color: "#bbb", marginTop: 2 }}>{msg.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Column: Details panel ────────────────────────────────────────────────────

function DetailsColumn({ loaded }) {
  return (
    <div style={{ ...colWrap, borderRight: "none" }}>
      <p style={colTitle}>Details</p>
      {!loaded ? <Skeleton /> : (
        <div style={{ animation: "fadeUp 0.4s ease forwards" }}>
          <p style={sectionLabel}>Chat Data</p>
          {[["Assignee", "James West"], ["Team", "Sales Team"]].map(([k, v], i) => (
            <div key={i} style={rowStyle}>
              <span style={{ color: "#888" }}>{k}</span>
              <span style={{ color: "#222", fontWeight: 500 }}>{v}</span>
            </div>
          ))}
          <p style={sectionLabel}>Contact Data</p>
          {[
            ["First Name",    "Olivia"],
            ["Last Name",     "Mckinsey"],
            ["Phone number",  "+1 (312) 555-0134"],
            ["Email",         "olivia.m@gmail.com"],
          ].map(([k, v], i) => (
            <div key={i} style={rowStyle}>
              <span style={{ color: "#888" }}>{k}</span>
              <span style={{ color: "#222", fontWeight: 500, fontSize: 10.5 }}>{v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const colWrap = {
  padding: "12px 14px",
  borderRight: "1px solid #f0f0f0",
  fontFamily: "'Roboto', sans-serif",
  minWidth: 0,
  overflowY: "auto",
};

const colTitle = {
  fontWeight: 600,
  fontSize: 13,
  color: "#111",
  margin: "0 0 8px",
};

const sectionLabel = {
  fontSize: 11,
  fontWeight: 600,
  color: "#aaa",
  margin: "8px 0 4px",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4px 0",
  fontSize: 12,
  color: "#444",
  borderBottom: "1px solid #f5f5f5",
};

const badgeStyle = {
  background: "#eef2ff",
  color: "#3b5bdb",
  borderRadius: 10,
  padding: "0 7px",
  fontSize: 11,
  fontWeight: 500,
};

// ─── Dashboard — default export ───────────────────────────────────────────────

export default function Dashboard({ loadedSections = {} }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "0 0 16px 16px",
      overflow: "hidden",
      fontFamily: "'Roboto', sans-serif",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    }}>
      {/* Top bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        height: 46,
        borderBottom: "1px solid #eee",
        gap: 0,
        overflowX: "auto",
      }}>
        <div style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: "#1a4fd6",
          marginRight: 20,
          flexShrink: 0,
        }}>
          BOX<span style={{ color: "#111" }}>pad</span>
        </div>

        {TABS.map(tab => (
          <div key={tab.id} style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "0 12px",
            height: 46,
            fontSize: 12,
            color: loadedSections[tab.id] ? "#1a4fd6" : "#666",
            borderBottom: loadedSections[tab.id] ? "2px solid #1a4fd6" : "2px solid transparent",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
            transition: "color 0.25s, border-color 0.25s",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={tab.path} />
            </svg>
            {tab.label}
          </div>
        ))}

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#c0392b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff" }}>
            MJ
          </div>
          <span style={{ fontSize: 12, fontWeight: 500, color: "#333" }}>Michael Johnson</span>
        </div>
      </div>

      {/* Body — 4 columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr 1fr 1fr",
        minHeight: 140,
        maxHeight: 260,
      }}>
        <InboxColumn      loaded={!!loadedSections.inbox}     />
        <ChatListColumn   loaded={!!loadedSections.contacts}  />
        <ActiveChatColumn loaded={!!(loadedSections.ai || loadedSections.workflows)} />
        <DetailsColumn    loaded={!!(loadedSections.campaigns || loadedSections.team)} />
      </div>
    </div>
  );
}