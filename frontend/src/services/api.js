import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "https://zendo-backend-a0hj.onrender.com/api/chat";

export const askZabar = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.response || "I'm here to help!";
  } catch (error) {
    console.error('API Error:', error);
    // Fallback responses
    const fallbacks = {
      hello: "Salaam! I'm Zabar, your Kashmiri AI assistant. How can I help? 🌸",
      help: "I can: 1) Manage tasks 2) Create schedules 3) Set reminders 4) Give suggestions",
      task: "Try: 'Remind me to buy milk at 5 PM' or 'Add task: Call mom tomorrow'",
      default: "Zabar is thinking... (Backend might be waking up from sleep on free tier)"
    };
    
    for (const key in fallbacks) {
      if (message.toLowerCase().includes(key)) {
        return fallbacks[key];
      }
    }
    
    return fallbacks.default;
  }
};
