import React, { useState } from 'react';
import { Bell, ChevronLeft, ChevronRight, Menu, Shield, User, Home, CreditCard, PieChart, LogOut } from 'lucide-react';

const BankingDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sendMoneyMethod, setSendMoneyMethod] = useState('upi');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', id: 'dashboard' },
    { icon: CreditCard, label: 'Cards', id: 'cards' },
    { icon: PieChart, label: 'Analytics', id: 'analytics' },
    { icon: Shield, label: 'Security', id: 'security' },
    { icon: User, label: 'Profile', id: 'profile' },
    { icon: LogOut, label: 'Logout', id: 'logout' },
  ];

  const transactions = [
    { id: 1, name: 'Patreon Membership', type: 'Subscribe', amount: -250.00, date: '20 May 2020' },
    { id: 2, name: 'UI GEEK INC', type: 'Received', amount: 4350.00, date: '19 May 2020' },
    { id: 3, name: 'Hitam Labou', type: 'Sent', amount: -250.00, date: '20 May 2020' },
    { id: 4, name: 'Slava Kornilov', type: 'Pending', amount: -150.00, date: '18 May 2020' },
    { id: 5, name: 'iMac 5k', type: 'Purchase', amount: -6350.00, date: '20 May 2020' },
  ];

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-indigo-900 flex flex-col py-4 transition-all duration-300 ${isSidebarExpanded ? 'w-64' : 'w-20'}`}>
        <div className="flex justify-center mb-8">
          <button onClick={toggleSidebar} className="bg-red-500 p-2 rounded-lg">
            <Menu className="text-white" />
          </button>
        </div>
        <div className="space-y-6"> {/* Added space-y-6 for vertical spacing */}
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`p-2 mx-2 rounded-lg cursor-pointer flex items-center ${activeSection === item.id ? 'bg-indigo-700' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className={`${activeSection === item.id ? 'text-white' : 'text-gray-400'}`} />
              {isSidebarExpanded && (
                <span className={`ml-4 ${activeSection === item.id ? 'text-white' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Banking Dashboard</h1>
          <p className="text-gray-600">Welcome Back, Monirul</p>
          <div className="bg-green-100 px-4 py-2 rounded-lg">
            <span className="text-green-800 font-semibold">Current Balance</span>
            <div className="text-green-600 text-xl font-bold">13435.34</div>
          </div>
          <div className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full text-white">
            5
          </div>
        </header>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Current Balances (6)</h2>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Back</span>
              <ChevronLeft className="text-gray-400" />
              <ChevronRight className="text-gray-800" />
              <span className="text-gray-800">Next</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Sample balance card */}
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">xxxx-7028-3435-3434</span>
                <Menu className="text-gray-400" size={16} />
              </div>
              <div className="text-2xl font-bold mb-2">£ 3435.34</div>
              <div className="text-sm text-gray-500">
                <p>Masudur Rahman</p>
                <p>03 / 26</p>
              </div>
            </div>
            {/* More balance cards would go here */}
          </div>
        </section>

        <section className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">My Transaction</h2>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <div className={`font-semibold ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Send Money</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex space-x-2 mb-4">
                <button
                  className={`px-3 py-1 rounded ${sendMoneyMethod === 'upi' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSendMoneyMethod('upi')}
                >
                  UPI
                </button>
                <button
                  className={`px-3 py-1 rounded ${sendMoneyMethod === 'netbanking' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSendMoneyMethod('netbanking')}
                >
                  Net Banking
                </button>
                <button
                  className={`px-3 py-1 rounded ${sendMoneyMethod === 'online' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSendMoneyMethod('online')}
                >
                  Online Payment
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter amount"
                className="w-full p-2 border rounded mb-4"
              />
              <button className="w-full bg-red-500 text-white py-2 rounded">
                Send Money
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BankingDashboard;