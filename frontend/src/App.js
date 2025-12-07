import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const askZabar = async () => {
    try {
      const res = await axios.post(
        'https://zendo-backend-a0hj.onrender.com/api/chat',
        { message }
      );
      setResponse(res.data.response);
    } catch (error) {
      setResponse('Zabar is waking up... try again in 30 seconds');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FF9933 0%, #B4161B 100%)',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ color: '#FF9933', textAlign: 'center' }}>
          🌸 Zendo - Zabar AI Assistant
        </h1>
        
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#FFF5E6',
          borderRadius: '10px',
          minHeight: '100px'
        }}>
          <strong>Zabar:</strong> {response || 'Salaam! Ask me anything...'}
        </div>

        <div style={{ marginTop: '20px' }}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid #FF9933',
              fontSize: '16px'
            }}
          />
          
          <button
            onClick={askZabar}
            style={{
              marginTop: '15px',
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #FF9933 0%, #B4161B 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '18px',
              cursor: 'pointer'
            }}
          >
            Ask Zabar
          </button>
        </div>

        <div style={{
          marginTop: '30px',
          textAlign: 'center',
          color: '#666',
          fontSize: '14px'
        }}>
          Connected to: https://zendo-backend-a0hj.onrender.com
        </div>
      </div>
    </div>
  );
}

export default App;
