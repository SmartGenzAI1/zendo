// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-snow-500">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1">
            <Header />
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            className: 'bg-saffron-100 text-shikara-800 border border-saffron-300',
            style: {
              background: 'linear-gradient(135deg, #FF9933 0%, #B4161B 100%)',
              color: 'white',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
