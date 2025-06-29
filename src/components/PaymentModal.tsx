import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CreditCard, Clock, Shield, Zap, Star } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPayment: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onPayment }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = async () => {
    if (!email || !cardNumber || !expiry || !cvv) {
      alert('Please fill in all payment details');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing with Razorpay
    setTimeout(() => {
      setIsProcessing(false);
      onPayment();
      onClose();
      
      // Show success message
      alert('Payment successful! Welcome to Avatar Studio! 🎉');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto border border-gray-100"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Unlock Avatar Studio</h2>
            <p className="text-sm text-gray-600">Start creating amazing avatars now!</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl font-bold">₹100</div>
                <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-medium">
                  Best Value
                </div>
              </div>
              <div className="text-lg opacity-90 mb-6">for 1 Hour Premium Access</div>
              
              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="text-white" size={18} />
                  <span className="text-sm">60 minutes of unlimited access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-white" size={18} />
                  <span className="text-sm">15+ clothing options per gender</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-white" size={18} />
                  <span className="text-sm">50+ accessories & customizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="text-white" size={18} />
                  <span className="text-sm">High-quality avatar export</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim())}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                      value = value.substring(0, 2) + '/' + value.substring(2, 4);
                    }
                    setExpiry(value);
                  }}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing Payment...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <CreditCard size={20} />
                <span>Pay ₹100 & Start Creating</span>
              </div>
            )}
          </button>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-2">
              <Shield size={16} />
              <span>256-bit SSL encrypted payment</span>
            </div>
            <p className="text-xs text-gray-400">
              Powered by Razorpay • Your payment information is secure
            </p>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-center space-x-2 text-green-700">
              <Shield size={16} />
              <span className="font-semibold text-sm">30-Day Money Back Guarantee</span>
            </div>
            <p className="text-xs text-green-600 mt-1">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentModal;