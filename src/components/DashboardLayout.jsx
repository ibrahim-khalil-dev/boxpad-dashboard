import { useState } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { ChatListPanel } from './ChatListPanel';
import { ChatWindow } from './ChatWindow';
import { DetailsPanel } from './DetailsPanel';

export function DashboardLayout({
  conversations,
  selectedConversationId,
  setSelectedConversationId,
  currentUser,
  dataReady,
}) {
  const [activeTab, setActiveTab] = useState('Inbox');
  const selectedConversation = conversations.find(c => c.id === selectedConversationId);

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
              <ChatWindow
                conversation={selectedConversation}
                currentUser={currentUser}
              />
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