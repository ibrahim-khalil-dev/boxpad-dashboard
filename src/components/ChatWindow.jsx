import { Message } from './Message';
import { CURRENT_USER } from '../lib/mockData';
import { MoreHorizontal, Moon, Layout, Zap, Mic, Image, Video, FileText, Smile, CornerUpLeft } from 'lucide-react';

export function ChatWindow({ conversation }) {
  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
        <div>
          <h2 className="font-semibold text-gray-900">{conversation.participant.name}</h2>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreHorizontal size={18} className="text-gray-500" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <Moon size={18} className="text-gray-500" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <Layout size={18} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {/* Date badge */}
        <div className="flex justify-center">
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">28 August 2025</span>
        </div>

        {conversation.messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwn={message.senderId === CURRENT_USER.id}
            senderAvatar={conversation.participant.avatar}
            senderAvatarColor={conversation.participant.avatarColor}
          />
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 flex-shrink-0">
        {/* Input */}
        <div className="px-4 pt-3 pb-2">
          <input
            type="text"
            placeholder="Type something...."
            className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
        </div>
        {/* Toolbar */}
        <div className="px-3 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><Image size={18} className="text-gray-500" /></button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><Video size={18} className="text-gray-500" /></button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><FileText size={18} className="text-gray-500" /></button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><Smile size={18} className="text-gray-500" /></button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><CornerUpLeft size={18} className="text-gray-500" /></button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><Zap size={18} className="text-gray-500" /></button>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"><Mic size={18} className="text-gray-500" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}