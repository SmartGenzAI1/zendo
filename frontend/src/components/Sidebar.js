// src/components/Sidebar.js
import React from 'react';
import { 
  Home, 
  CheckSquare, 
  MessageSquare, 
  Calendar,
  FileText,
  BarChart3,
  Settings as SettingsIcon,
  Sparkles
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', path: '/' },
    { icon: <CheckSquare className="w-5 h-5" />, label: 'Tasks', path: '/tasks' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Chat with Zabar', path: '/chat' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Calendar', path: '/calendar' },
    { icon: <FileText className="w-5 h-5" />, label: 'Notes', path: '/notes' },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics', path: '/analytics' },
    { icon: <SettingsIcon className="w-5 h-5" />, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-saffron-900 to-shikara-900 text-white p-6">
      {/* Zabar AI Section */}
      <div className="mb-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Zabar</h3>
            <p className="text-xs text-saffron-200">Your AI Assistant</p>
          </div>
        </div>
        <p className="text-sm text-saffron-100">
          "Salaam! Ready to sprinkle saffron on your day?"
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-saffron-100 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <span className={`${item.label === 'Chat with Zabar' ? 'text-yellow-300' : ''}`}>
              {item.icon}
            </span>
            <span className="font-medium">{item.label}</span>
            {item.label === 'Chat with Zabar' && (
              <span className="ml-auto px-2 py-1 text-xs bg-pheran-500 rounded-full">
                New
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="mt-8 p-4 bg-white/5 rounded-2xl">
        <h4 className="font-semibold mb-3">Today's Snapshot</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-saffron-200">Tasks</span>
            <span className="font-bold">12/24</span>
          </div>
          <div className="w-full bg-shikara-800 rounded-full h-2">
            <div className="bg-gradient-saffron h-2 rounded-full w-1/2"></div>
          </div>
          <div className="flex justify-between text-sm mt-3">
            <span className="text-saffron-200">Focus Time</span>
            <span className="font-bold">3h 42m</span>
          </div>
        </div>
      </div>

      {/* Pattern Decoration */}
      <div className="mt-8 text-center">
        <div className="inline-block p-2 bg-white/5 rounded-lg">
          <span className="text-xs text-saffron-300">🌸 Kashmir Inspired Design</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
