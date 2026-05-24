import { useState, useEffect } from 'react';
import { User, Users, HelpCircle, Globe, MessageCircle, ChevronDown } from 'lucide-react';

export function Sidebar() {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=5')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setUsersLoading(false);
      })
      .catch(() => setUsersLoading(false));
  }, []);

  const avatarColors = [
    'bg-blue-500', 'bg-green-500', 'bg-orange-500',
    'bg-purple-500', 'bg-pink-500',
  ];

  return (
    <div className="hidden md:flex md:w-48 bg-white border-r border-gray-200 flex-col text-sm overflow-y-auto">

      {/* Inbox */}
      <div className="px-3 py-4 space-y-0.5">
        <h3 className="text-base font-bold text-gray-900 mb-2 px-2">Inbox</h3>
        {[
          { name: 'My Inbox', icon: <User size={15} /> },
          { name: 'All', count: 28, icon: <Users size={15} /> },
          { name: 'Unassigned', count: 5, icon: <HelpCircle size={15} /> },
        ].map((item) => (
          <button key={item.name} className="w-full text-left px-2 py-1.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
            {item.count > 0 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded-full font-semibold">{item.count}</span>
            )}
          </button>
        ))}
      </div>

      {/* Teams */}
      <div className="px-3 py-2 space-y-0.5 border-t border-gray-100">
        <button className="w-full flex justify-between items-center px-2 py-1.5 text-gray-900 font-bold hover:bg-gray-100 rounded-lg">
          <span>Teams</span>
          <ChevronDown size={14} className="text-gray-400" />
        </button>
        {[
          { name: 'Sales', count: 7, icon: <Globe size={15} className="text-blue-500" /> },
          { name: 'Customer Support', count: 16, icon: <MessageCircle size={15} className="text-green-500" /> },
        ].map((team) => (
          <button key={team.name} className="w-full text-left px-2 py-1.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex justify-between items-center">
            <div className="flex items-center gap-2">
              {team.icon}
              <span className="font-medium">{team.name}</span>
            </div>
            <span className="text-xs font-semibold text-gray-500">{team.count}</span>
          </button>
        ))}
      </div>

      {/* Users — fetched from dummyjson API */}
      <div className="px-3 py-2 space-y-0.5 border-t border-gray-100">
        <button
          onClick={() => setUsersOpen(!usersOpen)}
          className="w-full flex justify-between items-center px-2 py-1.5 text-gray-900 font-bold hover:bg-gray-100 rounded-lg"
        >
          <span>Users</span>
          <ChevronDown size={14} className={`text-gray-400 transition-transform ${usersOpen ? '' : '-rotate-90'}`} />
        </button>

        {usersOpen && (
          <div className="space-y-0.5">
            {usersLoading ? (
              /* Skeleton loading */
              [1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-2 px-2 py-1.5">
                  <div className="h-6 w-6 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse flex-1" />
                </div>
              ))
            ) : (
              users.map((user, i) => (
                <button key={user.id} className="w-full text-left px-2 py-1.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                  <div className={`h-6 w-6 rounded-full ${avatarColors[i % avatarColors.length]} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                    {user.firstName[0]}
                  </div>
                  <span className="font-medium truncate">{user.firstName} {user.lastName}</span>
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* Channels */}
      <div className="px-3 py-2 space-y-0.5 border-t border-gray-100">
        <button className="w-full flex justify-between items-center px-2 py-1.5 text-gray-900 font-bold hover:bg-gray-100 rounded-lg">
          <span>Channels</span>
          <ChevronDown size={14} className="text-gray-400" />
        </button>
        {[
          { name: 'Fit4Life', color: 'bg-green-500' },
          { name: 'Fit4Life 2', color: 'bg-green-400' },
        ].map((channel) => (
          <button key={channel.name} className="w-full text-left px-2 py-1.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
            <span className={`h-4 w-4 rounded-full ${channel.color} flex-shrink-0`} />
            <span className="font-medium">{channel.name}</span>
          </button>
        ))}
      </div>

    </div>
  );
}