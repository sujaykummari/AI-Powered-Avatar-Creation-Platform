import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, User, Palette, Download, Clock, Star, Zap, Shield } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: User,
      title: 'Diverse Avatar Models',
      description: 'Choose from multiple genders with 9 different skin tones'
    },
    {
      icon: Palette,
      title: 'Unlimited Customization',
      description: '15+ clothing options, 50+ accessories, custom colors'
    },
    {
      icon: Download,
      title: 'High-Quality Export',
      description: 'Download your avatar in HD resolution instantly'
    },
    {
      icon: Clock,
      title: 'Flexible Access',
      description: 'Pay per hour, use as needed - no subscriptions'
    }
  ];

  const sampleAvatars = [
    { gender: 'male', skinTone: '#F4C2A1', hair: '#8B4513', top: '#4F46E5', bottom: '#1F2937' },
    { gender: 'female', skinTone: '#D2B48C', hair: '#000000', top: '#DC2626', bottom: '#7C3AED' },
    { gender: 'male', skinTone: '#8B4513', hair: '#000000', top: '#059669', bottom: '#374151' },
    { gender: 'female', skinTone: '#FFDBAC', hair: '#DEB887', top: '#F59E0B', bottom: '#1F2937' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-indigo-200">
              <Sparkles size={18} />
              <span>AI-Powered Avatar Creation Platform</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-gray-800 mb-8 leading-tight">
              Create Your Perfect
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                Digital Avatar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Design stunning, personalized avatars with our advanced customization tools. 
              Choose from diverse models, customize every detail, and export in high quality.
            </p>
          </motion.div>

          {/* Enhanced Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 max-w-md mx-auto relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    🔥 LIMITED TIME
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-2">₹100</div>
                  <div className="text-gray-600 text-lg">per hour access</div>
                </div>

                {/* Mini features */}
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <Star size={16} className="text-yellow-500" />
                    <span>50+ Customization Options</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Zap size={16} className="text-indigo-500" />
                    <span>Instant HD Export</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield size={16} className="text-green-500" />
                    <span>30-Day Money Back</span>
                  </div>
                </div>
                
                <button
                  onClick={onGetStarted}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  🚀 Start Creating Now
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  No subscription • Pay as you go • Cancel anytime
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Sample Avatars Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sample Avatars</h2>
          <p className="text-xl text-gray-600 mb-12">See what you can create with our platform</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {sampleAvatars.map((avatar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Mini Avatar Preview */}
                <div className="w-32 h-40 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  {/* Head */}
                  <div className="w-16 h-20 rounded-full mx-auto mt-4 relative" style={{ backgroundColor: avatar.skinTone }}>
                    {/* Hair */}
                    <div className="absolute -top-1 -left-1 w-18 h-12 rounded-t-full" style={{ backgroundColor: avatar.hair }}></div>
                    {/* Eyes */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-white">
                        <div className="w-1 h-1 rounded-full bg-blue-600 m-0.5"></div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-white">
                        <div className="w-1 h-1 rounded-full bg-blue-600 m-0.5"></div>
                      </div>
                    </div>
                    {/* Mouth */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
                  </div>
                  
                  {/* Body */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-14 rounded-t-lg mb-1" style={{ backgroundColor: avatar.top }}></div>
                    <div className="w-10 h-12 rounded-b-lg" style={{ backgroundColor: avatar.bottom }}></div>
                  </div>
                </div>
                
                <p className="text-sm font-semibold text-gray-700 capitalize">
                  {avatar.gender} Avatar {i + 1}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">Ready to create your own unique avatar?</p>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Started for ₹100
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeScreen;