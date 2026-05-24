import { useState } from 'react';
import { ConversationItem } from './ConversationItem';
import { Search, Layout, SlidersHorizontal, PenSquare, ChevronDown } from 'lucide-react';

export function ChatListPanel({ conversations, selectedConversationId, onSelectConversation, currentUser }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter((conv) =>
    conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <Layout size={18} className="text-gray-500" />
          </button>
          <h2 className="text-base font-semibold text-gray-900">
            {currentUser?.name || 'User'}
          </h2>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
          <PenSquare size={16} className="text-gray-500" />
        </button>
      </div>

      <div className="px-3 py-2 border-b border-gray-200">
        <div className="relative flex items-center">
          <Search size={14} className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-8 py-1.5 bg-gray-100 outline-none rounded-lg text-sm text-gray-700 placeholder-gray-400"
          />
          <button className="absolute right-3">
            <SlidersHorizontal size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="px-3 py-2 border-b border-gray-200 flex items-center justify-between">
        <button className="flex items-center gap-1 text-sm text-gray-700 font-medium">
          Open <ChevronDown size={14} />
        </button>
        <button className="flex items-center gap-1 text-sm text-gray-500">
          Newest <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            isActive={selectedConversationId === conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
}