import { useState, useEffect } from 'react';
import HoneycombLoader from './HoneyComb';
import Dashboard from './Dashboard';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { ChatListPanel } from './ChatListPanel';
import { ChatWindow } from './ChatWindow';
import { DetailsPanel } from './DetailsPanel';

export function DashboardLayout() {
  const [phase, setPhase] = useState('honeycomb'); // 'honeycomb' | 'dashboard'
  const [loadedSections, setLoadedSections] = useState({});
  const [activeTab, setActiveTab] = useState('Inbox');
  const [conversations, setConversations] = useState([]);
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [dataReady, setDataReady] = useState(false);

  // Fetch data in background while honeycomb is showing
  useEffect(() => {
    Promise.all([
      fetch('https://dummyjson.com/users?limit=9').then(r => r.json()),
      fetch('https://dummyjson.com/comments?limit=8').then(r => r.json()),
      fetch('https://dummyjson.com/users/1').then(r => r.json()),
    ])
      .then(([usersData, commentsData, meData]) => {
        setCurrentUser({
          id: String(meData.id),
          name: `${meData.firstName} ${meData.lastName}`,
          avatar: meData.firstName[0] + meData.lastName[0],
          avatarColor: 'bg-red-500',
        });

        const avatarColors = [
          'bg-blue-500', 'bg-yellow-500', 'bg-green-500',
          'bg-orange-500', 'bg-yellow-400', 'bg-orange-400',
          'bg-purple-500', 'bg-gray-500', 'bg-cyan-500',
        ];

        const builtConversations = usersData.users.map((user, i) => ({
          id: String(user.id),
          participant: {
            id: i === 0 ? 'other' : String(user.id),
            name: `${user.firstName} ${user.lastName}`,
            avatar: user.firstName[0],
            avatarColor: avatarColors[i % avatarColors.length],
            email: user.email,
            phone: user.phone,
          },
          messages: i === 0
            ? commentsData.comments.map((c, idx) => ({
                id: String(c.id),
                senderId: idx % 2 === 0 ? 'other' : String(meData.id),
                content: c.body,
                timestamp: `${20 + idx}:0${idx}`,
                read: true,
              }))
            : [],
          lastMessage: {
            id: `last-${user.id}`,
            senderId: 'other',
            content: commentsData.comments[i]?.body || 'Hey there!',
            timestamp: `${10 + i}:${i < 10 ? '0' + i : i}`,
            read: true,
          },
          unreadCount: 0,
        }));

        setConversations(builtConversations);
        setSelectedConversationId(builtConversations[0].id);
        setDataReady(true);
      })
      .catch(err => {
        console.error('API fetch failed:', err);
        setDataReady(true);
      });
  }, []);

  // When user clicks a honeycomb — mark that section as loaded in the preview
  const handleHoneycombSelect = (id) => {
    setLoadedSections(prev => ({ ...prev, [id]: true }));
    // After animation (~900ms), transition to real dashboard
    setTimeout(() => setPhase('dashboard'), 950);
  };

  const selectedConversation = conversations.find(c => c.id === selectedConversationId);

  // ── Main dashboard ────────────────────────────────────────────────────────
  if (phase === 'dashboard') {
    return (
      <div className="h-screen w-full flex flex-col bg-white overflow-hidden">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} currentUser={currentUser} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          {!dataReady ? (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
              Loading...
            </div>
          ) : (
            <>
              <ChatListPanel
                conversations={conversations}
                selectedConversationId={selectedConversationId}
                onSelectConversation={setSelectedConversationId}
                currentUser={currentUser}
              />
              {selectedConversation && (
                <ChatWindow conversation={selectedConversation} currentUser={currentUser} />
              )}
              {selectedConversation && (
                <DetailsPanel conversation={selectedConversation} />
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Honeycomb screen with dashboard preview below ─────────────────────────
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(160deg, #020d1f 0%, #041535 40%, #062050 70%, #020d1f 100%)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Honeycomb loader — top portion */}
      <div style={{ flexShrink: 0 }}>
        <HoneycombLoader onSelect={handleHoneycombSelect} />
      </div>

      {/* Dashboard preview — peeking from bottom */}
      <div
        style={{
          flex: 1,
          margin: '0 40px',
          borderRadius: '16px 16px 0 0',
          overflow: 'hidden',
          boxShadow: '0 -8px 60px rgba(0,80,255,0.25), 0 0 0 1px rgba(255,255,255,0.08)',
          minHeight: 0,
        }}
      >
        <Dashboard loadedSections={loadedSections} />
      </div>
    </div>
  );
}