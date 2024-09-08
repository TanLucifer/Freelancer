import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import profile from '../../../assets/profile.jpg';

const SocialMediaApp = () => {
  const [message, setMessage] = useState('');

  const posts = [
    { id: 1, author: 'Tanmay Mirgal', content: "What's up?", avatar: '👤' },
    { id: 2, author: 'Adtiya Shah', content: "Haha, that's funny", avatar: '👤' },
    { id: 3, author: 'Mandar Gaikwad', content: "Check out this pic!", avatar: '👤' },
    { id: 4, author: 'Purva Lad', content: "Let's hang out soon", avatar: '👤' },
    { id: 5, author: 'Disha Patel', content: "Sounds good to me", avatar: '👤' },
    { id: 6, author: 'Ashlesh Kadam', content: "Nice, I love cats too!", avatar: '👤' },
    { id: 7, author: 'Gouresh Parab', content: "Why did you disappear?", avatar: '🌅' },
  ];

  const messages = [
    { id: 1, content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aenean commodo ligula eget dolor', sender: 'other', time: 'Fri 8:30 AM' },
    { id: 2, content: 'You got this! Keep going.', sender: 'user' },
    { id: 3, content: 'Almost there. Can\'t wait to', sender: 'other', time: '12:00 PM' },
    { id: 4, content: 'Just around', sender: 'user' },
    { id: 5, content: 'Running a bit', sender: 'user' },
    { id: 6, content: 'Oops, my', sender: 'user' },
    { id: 7, content: 'You crack me up!', sender: 'other' },
    { id: 8, content: "Haha, I'm here! :D", sender: 'user' },
    { id: 9, content: "https://example.com/image.jpg", sender: 'user', type: 'image' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-white text-gray-800 flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Feed</h2>
        <div className="mb-4 flex items-center">
          <span className="mr-2">Profile</span>
          <span className="material-icons text-gray-600">location_on</span>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for friends"
            className="w-full p-2 rounded bg-gray-200 text-gray-800"
          />
        </div>
        <div className="flex-grow overflow-y-auto">
          {posts.map((post) => (
            <div key={post.id} className="mb-3 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                {post.avatar}
              </div>
              <div>
                <p className="font-semibold">Latest post from {post.author}</p>
                <p className="text-sm text-gray-600">{post.author}: {post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-200 p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
            <img src={profile} alt="" style={{ width: '100%', height: '100%',borderRadius: '50%' }} />
          </div>
          <div>
            <h2 className="text-xl">Tanmay Mirgal</h2>
            <span className="text-sm text-green-600">Active now</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-2 ${
                msg.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.type === 'image' ? (
                  <img src={msg.content} alt="Shared" className="max-w-xs rounded" />
                ) : (
                  msg.content
                )}
              </div>
              {msg.time && (
                <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 p-2 rounded-l bg-gray-300 text-gray-800"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaApp;
