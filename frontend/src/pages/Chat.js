// src/pages/Chat.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Clock,
  Calendar,
  Lightbulb
} from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Salaam! I'm Zabar, your saffron-scented AI assistant. How can I help you today?", isAI: true, time: "10:00 AM" },
    { id: 2, text: "Hi Zabar! Can you help me plan my day?", isAI: false, time: "10:01 AM" },
    { id: 3, text: "Of course! Based on your schedule, I suggest: 1) Morning meditation 2) Project work 3) Client call at 3 PM. Would you like me to schedule these?", isAI: true, time: "10:01 AM" },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        isAI: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInput('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "I understand! Let me help with that. Give me a moment... 🌸",
          isAI: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const quickPrompts = [
    { icon: <Calendar className="w-4 h-4" />, text: "Plan my day" },
    { icon: <Clock className="w-4 h-4" />, text: "Set a reminder" },
    { icon: <Lightbulb className="w-4 h-4" />, text: "Give me suggestions" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Extract tasks from my message" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-saffron-500 to-pheran-500 rounded-3xl p-8 text-white mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="w-14 h-14 bg-gradient-saffron rounded-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Chat with Zabar</h1>
              <p className="text-saffron-100">Your personal Kashmiri AI assistant</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">🌸</p>
            <p className="text-sm opacity-90">Always here to help</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Prompts */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl border border-saffron-200 p-6">
            <h3 className="font-bold text-shikara-900 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-saffron-500" />
              Quick Prompts
            </h3>
            <div className="space-y-3">
              {quickPrompts.map((prompt, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setInput(prompt.text)}
                  className="w-full p-3 bg-saffron-50 hover:bg-saffron-100 rounded-xl text-left flex items-center space-x-3 transition-colors"
                >
                  <div className="p-2 bg-white rounded-lg">
                    {prompt.icon}
                  </div>
                  <span className="font-medium text-shikara-800">{prompt.text}</span>
                </motion.button>
              ))}
            </div>

            {/* AI Capabilities */}
            <div className="mt-8">
              <h4 className="font-bold text-shikara-900 mb-3">Zabar Can:</h4>
              <ul className="space-y-2 text-sm text-shikara-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-saffron-500 rounded-full mr-2"></div>
                  Extract tasks from messages
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-chinar-500 rounded-full mr-2"></div>
                  Create daily schedules
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pheran-500 rounded-full mr-2"></div>
                  Set smart reminders
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-shikara-500 rounded-full mr-2"></div>
                  Give personalized suggestions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl border border-saffron-200 overflow-hidden">
            {/* Messages Container */}
            <div className="h-[500px] overflow-y-auto p-6">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.isAI ? 'justify-start' : 'justify-end'} mb-6`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        message.isAI
                          ? 'bg-saffron-50 rounded-tl-none border border-saffron-200'
                          : 'bg-gradient-to-r from-shikara-500 to-shikara-600 text-white rounded-tr-none'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          message.isAI ? 'bg-gradient-saffron' : 'bg-white'
                        }`}>
                          {message.isAI ? (
                            <Bot className="w-4 h-4 text-white" />
                          ) : (
                            <User className="w-4 h-4 text-shikara-600" />
                          )}
                        </div>
                        <span className="text-sm opacity-75">{message.isAI ? 'Zabar' : 'You'}</span>
                        <span className="ml-2 text-xs opacity-60">{message.time}</span>
                      </div>
                      <p className="text-sm md:text-base">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-saffron-200 p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message to Zabar..."
                    className="w-full px-6 py-4 bg-saffron-50 border border-saffron-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron-300 focus:border-transparent"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 ${
                    input.trim()
                      ? 'bg-gradient-saffron text-white hover:shadow-lg'
                      : 'bg-saffron-100 text-saffron-300 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>Send</span>
                </motion.button>
              </div>
              <p className="text-center text-sm text-shikara-600 mt-4">
                Zabar uses AI to help organize your life • Ask about tasks, schedules, or advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
