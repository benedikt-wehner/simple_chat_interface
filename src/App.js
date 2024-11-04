import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Log the user's message to console
    console.log('User message:', inputValue);
    
    // Add user message to chat
    const newMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        text: "I'm a bot response",
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="App">
      <header className="top-bar">
        <div className="logo-space">
          <img src={logo} className="logo-image" alt="ChatBot Logo" />
        </div>
        <div className="title-space">
          DChatBot
        </div>
      </header>
      
      <main className="chat-container">
        <div className="messages-area">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-timestamp">
                {message.timestamp}
              </div>
            </div>
          ))}
        </div>
        
        <div className="input-area">
          <input 
            type="text" 
            placeholder="Type your message..."
            className="message-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="send-button"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
