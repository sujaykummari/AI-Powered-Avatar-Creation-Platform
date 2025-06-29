import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AvatarOptions, UserSession } from './types/avatar';
import { DEFAULT_AVATAR } from './data/avatarData';
import { useTimer } from './hooks/useTimer';

// Components
import WelcomeScreen from './components/WelcomeScreen';
import PaymentModal from './components/PaymentModal';
import Header from './components/Header';
import AvatarDisplay from './components/AvatarDisplay';
import CustomizationPanel from './components/CustomizationPanel';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'app'>('welcome');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [avatar, setAvatar] = useState<AvatarOptions>(DEFAULT_AVATAR);

  // Check for existing session on load
  useEffect(() => {
    const savedSession = localStorage.getItem('avatarSession');
    if (savedSession) {
      const session = JSON.parse(savedSession);
      if (session.accessEndTime > Date.now()) {
        setUserSession(session);
        setCurrentScreen('app');
      } else {
        localStorage.removeItem('avatarSession');
      }
    }
  }, []);

  const handleGetStarted = () => {
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    const session: UserSession = {
      id: Date.now().toString(),
      email: 'user@example.com', // In production, get from form
      accessStartTime: Date.now(),
      accessEndTime: Date.now() + (60 * 60 * 1000), // 1 hour
      isActive: true
    };

    setUserSession(session);
    localStorage.setItem('avatarSession', JSON.stringify(session));
    setCurrentScreen('app');
  };

  const handleLogout = () => {
    setUserSession(null);
    localStorage.removeItem('avatarSession');
    setCurrentScreen('welcome');
  };

  const handleExport = () => {
    // In production, this would generate and download the avatar
    const avatarData = JSON.stringify(avatar, null, 2);
    const blob = new Blob([avatarData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-avatar.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const { isExpired } = useTimer(userSession?.accessEndTime || 0);

  if (currentScreen === 'welcome') {
    return (
      <>
        <WelcomeScreen onGetStarted={handleGetStarted} />
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          onPayment={handlePayment}
        />
      </>
    );
  }

  if (isExpired && userSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⏰</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Session Expired</h2>
          <p className="text-gray-600 mb-6">Your hour has ended. Purchase another session to continue creating.</p>
          <button
            onClick={() => setShowPaymentModal(true)}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Get Another Hour - ₹100
          </button>
          <button
            onClick={handleLogout}
            className="w-full mt-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          onPayment={handlePayment}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header
        isAccessActive={!!userSession}
        accessEndTime={userSession?.accessEndTime || 0}
        onExport={handleExport}
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]"
        >
          {/* Avatar Display */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Avatar Preview</h2>
              <p className="text-sm text-gray-600">See your changes in real-time</p>
            </div>
            <div className="p-6 h-full">
              <AvatarDisplay avatar={avatar} />
            </div>
          </div>

          {/* Customization Panel */}
          <div className="h-full">
            <CustomizationPanel
              avatar={avatar}
              onAvatarChange={setAvatar}
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;