// src/pages/Dashboard.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  Calendar as CalendarIcon,
  BellRing
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: <Target className="w-6 h-6" />, label: 'Today\'s Goals', value: '3/5', color: 'bg-gradient-saffron' },
    { icon: <Clock className="w-6 h-6" />, label: 'Focus Time', value: '2h 18m', color: 'bg-gradient-to-r from-shikara-500 to-chinar-500' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Productivity', value: '78%', color: 'bg-gradient-to-r from-pheran-500 to-saffron-500' },
    { icon: <CheckCircle className="w-6 h-6" />, label: 'Completed', value: '42', color: 'bg-gradient-to-r from-chinar-500 to-shikara-500' },
  ];

  const quickActions = [
    { title: 'Add Task', icon: '➕', color: 'bg-saffron-100 border-saffron-300', text: 'text-saffron-700' },
    { title: 'Ask Zabar', icon: '🤖', color: 'bg-shikara-100 border-shikara-300', text: 'text-shikara-700' },
    { title: 'Set Reminder', icon: '⏰', color: 'bg-pheran-100 border-pheran-300', text: 'text-pheran-700' },
    { title: 'Schedule', icon: '📅', color: 'bg-chinar-100 border-chinar-300', text: 'text-chinar-700' },
  ];

  const recentTasks = [
    { id: 1, title: 'Morning Yoga Session', time: '7:00 AM', completed: true },
    { id: 2, title: 'Team Meeting - Project Review', time: '10:00 AM', completed: false },
    { id: 3, title: 'Lunch with Client', time: '1:30 PM', completed: false },
    { id: 4, title: 'Grocery Shopping', time: '6:00 PM', completed: false },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-saffron-50 to-white rounded-3xl p-8 border border-saffron-200"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-shikara-900 mb-2">
              Good Morning! <span className="text-saffron-600">👋</span>
            </h1>
            <p className="text-shikara-600">
              "The beautiful thing about learning is that no one can take it away from you." 
              <span className="italic text-saffron-500 ml-2">- Kashmir Proverb</span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-3 bg-gradient-saffron rounded-2xl">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-shikara-900">December 7</p>
              <p className="text-saffron-600">Thursday, 2024</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.color} text-white rounded-2xl p-6 shadow-lg`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                {stat.icon}
              </div>
              <span className="text-3xl font-bold">{stat.value}</span>
            </div>
            <h3 className="text-lg font-semibold">{stat.label}</h3>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions & Recent Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl border border-saffron-200 p-6">
            <h2 className="text-2xl font-bold text-shikara-900 mb-6 flex items-center">
              <BellRing className="w-6 h-6 mr-2 text-saffron-500" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${action.color} ${action.text} border rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition-shadow`}
                >
                  <span className="text-3xl">{action.icon}</span>
                  <span className="font-semibold">{action.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white rounded-3xl border border-saffron-200 p-6">
          <h2 className="text-2xl font-bold text-shikara-900 mb-6">Recent Tasks</h2>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 rounded-xl bg-saffron-50 hover:bg-saffron-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${task.completed ? 'bg-chinar-500' : 'bg-saffron-500'}`}>
                    {task.completed ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-shikara-900">{task.title}</h4>
                    <p className="text-sm text-shikara-600">{task.time}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-white rounded-lg transition-colors">
                  <span className="text-saffron-500">⋯</span>
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-gradient-saffron text-white rounded-xl font-semibold hover:shadow-lg transition-shadow">
            View All Tasks
          </button>
        </div>
      </div>

      {/* Zabar AI Prompt */}
      <div className="bg-gradient-to-r from-shikara-900 to-saffron-800 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need help planning your day?</h2>
            <p className="text-saffron-200">Zabar can create a personalized schedule just for you</p>
          </div>
          <button className="bg-white text-shikara-900 px-8 py-3 rounded-xl font-semibold hover:bg-saffron-100 transition-colors">
            Ask Zabar Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
