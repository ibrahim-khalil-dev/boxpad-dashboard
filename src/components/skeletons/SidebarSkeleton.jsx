import { User, Users, HelpCircle, Globe, MessageCircle, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:w-56 bg-white border-r border-gray-200 flex-col">
      {/* Inbox Section */}
      <div className="px-4 py-4 space-y-1">
        <h3 className="text-base font-semibold text-gray-900 mb-3">Inbox</h3>
        {[
          { name: 'My Inbox', icon: <User size={15} /> },
          { name: 'All', count: 28, icon: <Users size={15} /> },
          { name: 'Unassigned', count: 5, icon: <HelpCircle size={15} /> },
        ].map((item) => (
          <button
            key={item.name}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.name}</span>
            </div>
            {item.count > 0 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                {item.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Teams Section */}
      <div className="px-4 py-3 space-y-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold text-gray-900">Teams</h3>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
        {[
          { name: 'Sales', count: 7, icon: <Globe size={15} /> },
          { name: 'Customer Support', count: 16, icon: <MessageCircle size={15} /> },
        ].map((team) => (
          <button
            key={team.name}
            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {team.icon}
              <span>{team.name}</span>
            </div>
            <span className="text-xs text-gray-500">{team.count}</span>
          </button>
        ))}
      </div>

      
    </div>
  );
}