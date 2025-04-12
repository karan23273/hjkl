import React, { useState } from 'react';
import { LogIn, Lock, Mail, UserPlus, ArrowLeft, User, LayoutDashboard, Package, ClipboardList, BarChart3, Settings, Search, Globe, LogOut } from 'lucide-react';

type UserType = 'customer' | 'admin' | 'supplier';

interface AuthUser {
  name?: string;
  email: string;
  type: UserType;
}

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<UserType>('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
      setUser({ email, type: userType });
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Simulate signup
      setUser({ name, email, type: userType });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setEmail('');
    setPassword('');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  if (user && user.type === 'admin') {
    return (
      <div className="min-h-screen bg-[#0A0B14]">
        {/* Top Navigation */}
        <nav className="bg-[#12141F] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-white">Bizarre Bazaar</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-white">
                  <Search className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Globe className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-[#12141F] h-[calc(100vh-4rem)] p-4">
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-emerald-500 bg-[#0A0B14] rounded-lg">
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-[#0A0B14] rounded-lg">
                <Package className="h-5 w-5" />
                <span>Products</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-[#0A0B14] rounded-lg">
                <ClipboardList className="h-5 w-5" />
                <span>Orders</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-[#0A0B14] rounded-lg">
                <BarChart3 className="h-5 w-5" />
                <span>Reports</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:bg-[#0A0B14] rounded-lg">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">DASHBOARD</h2>
              <h1 className="text-4xl font-bold text-white mb-4">
                Intelligent End-to-End Supply<br />
                Chain Management
              </h1>
              <p className="text-gray-400 text-lg">
                Real-time visibility and control over your supply chain operations with AI-powered insights and predictive analytics.
              </p>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#12141F] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Total Orders</h3>
                <p className="text-3xl font-bold text-emerald-500">1,234</p>
                <p className="text-gray-400 mt-2">+12.5% from last month</p>
              </div>
              <div className="bg-[#12141F] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-emerald-500">$45,678</p>
                <p className="text-gray-400 mt-2">+8.3% from last month</p>
              </div>
              <div className="bg-[#12141F] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Active Users</h3>
                <p className="text-3xl font-bold text-emerald-500">892</p>
                <p className="text-gray-400 mt-2">+15.7% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Welcome to InvenFlow
          </h1>
          <p className="text-gray-600">
            Please login to continue
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-md shadow p-6">
          {!isLogin && (
            <button
              onClick={toggleAuthMode}
              className="flex items-center text-blue-500 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </button>
          )}

          <div className="flex gap-2 mb-4">
            {(['customer', 'admin', 'supplier'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-1 px-3 rounded text-sm ${
                  userType === type
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder={`${userType}@invenflow.com`}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-gray-600 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLogin ? `Login as ${userType}` : 'Sign Up'}
            </button>
          </form>

          {isLogin && (
            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">No account? </span>
              <button
                onClick={toggleAuthMode}
                className="text-blue-500 hover:text-blue-700"
              >
                Create one
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;