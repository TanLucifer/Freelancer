import React, { useState } from 'react';
import profile from '../../../assets/profile.jpg';
import {Link} from 'react-router-dom';

function ProfilePage() {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'User',
      content: 'User is excited about life',
      timestamp: 'Just now',
      images: [1, 2, 3, 4]
    }
  ]);

  const handlePost = () => {
    if (postText.trim()) {
      setPosts([
        {
          id: posts.length + 1,
          user: 'User',
          content: postText,
          timestamp: 'Just now',
          images: []
        },
        ...posts
      ]);
      setPostText('');
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="mt-4">
          <div className="relative">
            <div className="w-full h-48 bg-gray-200">
              <img src="https://images.unsplash.com/photo-1620640585245-31bea5f56ba3?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-48 object-cover rounded-lg shadow-md' />
            </div>
            <div className="absolute bottom-0 left-4 transform translate-y-1/2">
              <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center">
              <Link to='/profile'><img src={profile} alt="User profile" className="rounded-full" /></Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Tanmay Mirgal</h2>
                <p className="text-gray-600">367 connections</p>
              </div>
              <div className="flex space-x-2 mt-4 sm:mt-0">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition">Connect</button>
                <button className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-200 transition">Chat</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-4 space-y-2 sm:space-y-0 sm:space-x-2 overflow-x-auto">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition">Posts</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-200 transition">About</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-200 transition">Gallery</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-200 transition">Clips</button>
              <button className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-200 transition">Contacts</button>
            </div>

            <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-full sm:w-1/3 space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Personal Details</h3>
                  <div className="flex flex-col space-y-2">
                    <button className="w-full py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Update bio</button>
                    <button className="w-full py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Edit profile</button>
                    <button className="w-full py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Add interests</button>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Memories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-full h-24 bg-gray-300 rounded"></div>
                    <div className="w-full h-24 bg-gray-300 rounded"></div>
                    <div className="w-full h-24 bg-gray-300 rounded"></div>
                    <div className="w-full h-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-2/3 space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row items-center mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mb-2 sm:mb-0 sm:mr-2 flex items-center justify-center">
                     
                      <img src={profile} alt="User profile" className="rounded-full " />
                    </div>
                    <input 
                      type="text" 
                      placeholder="What's new with you today?"
                      className="flex-grow bg-transparent outline-none border-b-2 border-gray-400 py-2 px-4 mb-2 sm:mb-0"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex space-x-2 mb-2 sm:mb-0">
                      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">📷</button>
                      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">📎</button>
                      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">📍</button>
                      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">😊</button>
                    </div>
                    <button 
                      className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition"
                      onClick={handlePost}
                    >
                      Share
                    </button>
                  </div>
                </div>

                {posts.map(post => (
                  <div key={post.id} className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
                        
                        <img src={profile} alt="User profile" className="rounded-full " />
                      </div>
                      <div>
                        <p className="font-bold">{post.user}</p>
                        <p className="text-sm text-gray-600">{post.timestamp}</p>
                      </div>
                      <button className="ml-auto text-gray-600 hover:text-gray-500 transition">...</button>
                    </div>
                    <p className="mb-4">{post.content}</p>
                    {post.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {post.images.map(img => (
                          <div key={img} className="w-full h-32 bg-gray-300 rounded"></div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
