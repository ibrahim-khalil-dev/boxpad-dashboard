import { CURRENT_USER } from '../lib/mockData';
import { Inbox, Users, Bot, GitBranch, Megaphone, Settings } from 'lucide-react';

export function Navbar({ activeTab, onTabChange }) {
  const tabs = [
    { name: 'Inbox', icon: <Inbox size={14} /> },
    { name: 'Contacts', icon: <Users size={14} /> },
    { name: 'AI Employees', icon: <Bot size={14} /> },
    { name: 'Workflows', icon: <GitBranch size={14} /> },
    { name: 'Campaigns', icon: <Megaphone size={14} /> },
  ];

  return (
    <div className="h-11 bg-white border-b border-gray-200 flex items-center px-4 gap-1 flex-shrink-0">
      <h1 className="text-lg font-bold text-blue-600 mr-4">BOXpad</h1>

      <div className="flex items-center gap-0.5 flex-1">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
              activeTab === tab.name
                ? 'bg-white border-gray-300 text-gray-900 shadow-sm'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings size={16} className="text-gray-500" />
        </button>
        <div className="flex items-center gap-2">
          <div className={`h-7 w-7 rounded-full ${CURRENT_USER.avatarColor} text-white flex items-center justify-center text-xs font-semibold`}>
            {CURRENT_USER.avatar}
          </div>
          <span className="text-sm font-medium text-gray-900">{CURRENT_USER.name}</span>
        </div>
      </div>
    </div>
  );
}