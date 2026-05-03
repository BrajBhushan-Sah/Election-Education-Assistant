import React, { useState } from 'react';
import { CHAT_CONFIG } from '../utils/constants';

// Reusable, small component focused only on UI logic
const ChatAssistant = ({ onSendMessage, isTyping }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && input.length <= CHAT_CONFIG.MAX_MESSAGE_LENGTH) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-container bg-white rounded shadow-lg p-4 flex flex-col">
      <div className="messages-area flex-grow overflow-y-auto mb-4">
        {/* Messages would render here */}
        {isTyping && <div className="text-gray-500 italic text-sm">Assistant is typing...</div>}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about elections..."
          maxLength={CHAT_CONFIG.MAX_MESSAGE_LENGTH}
          className="flex-grow border rounded px-3 py-2 focus:outline-none focus:border-orange-500"
          aria-label="Chat input"
        />
        <button 
          type="submit" 
          disabled={!input.trim() || isTyping}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatAssistant;
