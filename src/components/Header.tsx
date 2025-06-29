import React from 'react';
import { motion } from 'framer-motion';
import { User, Clock, Download, LogOut } from 'lucide-react';
import { useTimer } from '../hooks/useTimer';

interface HeaderProps {
  isAccessActive: boolean;
  accessEndTime: number;
  onExport: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAccessActive, accessEndTime, onExport, onLogout }) => {
  const { formattedTime, isExpired } = useTimer(accessEndTime);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <User className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Avatar Studio</h1>
              <p className="text-xs text-gray-500">AI-Powered Customization</p>
            </div>
          </div>

          {/* Session Info */}
          {isAccessActive && (
            <div className="flex items-center space-x-4">
              {/* Timer */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isExpired 
                    ? 'bg-red-100 text-red-700' 
                    : accessEndTime - Date.now() < 600000 // 10 minutes
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                <Clock size={16} />
                <span className="font-medium text-sm">
                  {isExpired ? 'Expired' : formattedTime}
                </span>
              </motion.div>

              {/* Export Button */}
              <button
                onClick={onExport}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>

              {/* Logout Button */}
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;