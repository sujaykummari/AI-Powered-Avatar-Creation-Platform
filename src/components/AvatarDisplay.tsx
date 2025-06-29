import React from 'react';
import { motion } from 'framer-motion';
import { AvatarOptions } from '../types/avatar';

interface AvatarDisplayProps {
  avatar: AvatarOptions;
}

const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ avatar }) => {
  // Enhanced 3D-style avatar representation
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* 3D Avatar Container */}
        <div className="w-80 h-96 relative">
          {/* Background with depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-full opacity-30 blur-sm"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-40"></div>
          
          {/* Main Avatar Body */}
          <motion.div
            key={`${avatar.base.gender}-${avatar.base.skinTone}`}
            initial={{ scale: 0.9, rotateY: -10 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-4 rounded-full flex flex-col items-center justify-center overflow-hidden shadow-2xl"
            style={{ 
              backgroundColor: avatar.base.skinTone,
              background: `linear-gradient(145deg, ${avatar.base.skinTone}, ${avatar.base.skinTone}dd)`
            }}
          >
            {/* Head with enhanced features */}
            <div className="w-28 h-36 rounded-full relative mb-2 shadow-lg" 
                 style={{ 
                   backgroundColor: avatar.base.skinTone,
                   background: `linear-gradient(145deg, ${avatar.base.skinTone}, ${avatar.base.skinTone}cc)`
                 }}>
              
              {/* Hair with better styling */}
              {avatar.hair.style !== 'bald' && (
                <motion.div
                  key={avatar.hair.style + avatar.hair.color}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute rounded-t-full shadow-md ${
                    avatar.hair.style === 'long' || avatar.hair.style === 'straight_long' ? 'w-32 h-28 -top-3 -left-2' :
                    avatar.hair.style === 'curly_long' || avatar.hair.style === 'braids' ? 'w-34 h-30 -top-4 -left-3' :
                    avatar.hair.style === 'afro' ? 'w-36 h-32 -top-5 -left-4 rounded-full' :
                    avatar.hair.style === 'ponytail' ? 'w-30 h-24 -top-2 -left-1' :
                    avatar.hair.style === 'bob' || avatar.hair.style === 'pixie' ? 'w-30 h-22 -top-2 -left-1' :
                    'w-32 h-24 -top-3 -left-2'
                  }`}
                  style={{ 
                    backgroundColor: avatar.hair.color,
                    background: `linear-gradient(145deg, ${avatar.hair.color}, ${avatar.hair.color}dd)`
                  }}
                />
              )}
              
              {/* Enhanced Eyes */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <div className="w-4 h-4 rounded-full bg-white shadow-inner">
                  <div className="w-3 h-3 rounded-full m-0.5 shadow-sm" 
                       style={{ backgroundColor: avatar.facial.eyeColor }}></div>
                  <div className="w-1 h-1 rounded-full bg-white absolute top-1 left-1"></div>
                </div>
                <div className="w-4 h-4 rounded-full bg-white shadow-inner">
                  <div className="w-3 h-3 rounded-full m-0.5 shadow-sm" 
                       style={{ backgroundColor: avatar.facial.eyeColor }}></div>
                  <div className="w-1 h-1 rounded-full bg-white absolute top-1 left-1"></div>
                </div>
              </div>
              
              {/* Enhanced Eyebrows */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <div className="w-3 h-1 bg-gray-700 rounded-full opacity-70"></div>
                <div className="w-3 h-1 bg-gray-700 rounded-full opacity-70"></div>
              </div>
              
              {/* Nose with shadow */}
              <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-black bg-opacity-10 rounded-full shadow-sm"></div>
              
              {/* Enhanced Mouth */}
              <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-pink-400 rounded-full shadow-sm"></div>
              
              {/* Facial Hair */}
              {avatar.facial.facial_hair !== 'none' && avatar.base.gender === 'male' && (
                <motion.div
                  key={avatar.facial.facial_hair}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800 rounded-b-full opacity-60"
                />
              )}
              
              {/* Glasses with better design */}
              {avatar.accessories.glasses !== 'none' && (
                <motion.div
                  key={avatar.accessories.glasses}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute top-8 left-1/2 transform -translate-x-1/2 border-2 bg-transparent shadow-lg ${
                    avatar.accessories.glasses.includes('round') ? 'w-22 h-10 border-gray-800 rounded-full' :
                    avatar.accessories.glasses.includes('cat_eye') ? 'w-24 h-8 border-gray-800 rounded-lg' :
                    avatar.accessories.glasses.includes('aviator') ? 'w-24 h-12 border-gold-600 rounded-full' :
                    'w-22 h-10 border-gray-800 rounded-lg'
                  }`}
                />
              )}
              
              {/* Hat with enhanced styling */}
              {avatar.accessories.hat !== 'none' && (
                <motion.div
                  key={avatar.accessories.hat}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 shadow-lg ${
                    avatar.accessories.hat === 'beanie' ? 'w-32 h-10 -top-6 bg-gray-800 rounded-t-full' :
                    avatar.accessories.hat === 'cap' ? 'w-32 h-8 -top-4 bg-blue-600 rounded-t-lg' :
                    avatar.accessories.hat === 'fedora' ? 'w-34 h-6 -top-3 bg-gray-700 rounded-full' :
                    avatar.accessories.hat === 'sun_hat' ? 'w-40 h-4 -top-2 bg-yellow-600 rounded-full' :
                    'w-32 h-8 -top-4 bg-gray-800 rounded-t-full'
                  }`}
                />
              )}

              {/* Jewelry - Earrings */}
              {avatar.accessories.jewelry.includes('earrings') && (
                <div className="absolute top-12 flex justify-between w-full px-2">
                  <div className="w-2 h-2 bg-gold-400 rounded-full shadow-sm"></div>
                  <div className="w-2 h-2 bg-gold-400 rounded-full shadow-sm"></div>
                </div>
              )}

              {/* Jewelry - Necklace */}
              {avatar.accessories.jewelry.includes('necklace') && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gold-400 rounded-full shadow-sm"></div>
              )}
            </div>
            
            {/* Enhanced Body */}
            <div className="flex flex-col items-center">
              {/* Torso with clothing texture */}
              <motion.div
                key={avatar.clothing.top + avatar.clothing.topColor}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-24 h-28 rounded-t-2xl mb-1 shadow-lg relative overflow-hidden"
                style={{ 
                  backgroundColor: avatar.clothing.topColor,
                  background: `linear-gradient(145deg, ${avatar.clothing.topColor}, ${avatar.clothing.topColor}dd)`
                }}
              >
                {/* Clothing details */}
                {avatar.clothing.top === 'tshirt' && (
                  <div className="absolute inset-2 border border-white border-opacity-20 rounded-t-xl"></div>
                )}
                {avatar.clothing.top === 'hoodie' && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-black bg-opacity-20 rounded-b-lg"></div>
                )}
                {avatar.clothing.top === 'blazer' && (
                  <div className="absolute inset-1 border-2 border-white border-opacity-30 rounded-t-xl"></div>
                )}
              </motion.div>
              
              {/* Legs with clothing texture */}
              <motion.div
                key={avatar.clothing.bottom + avatar.clothing.bottomColor}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-22 h-24 rounded-b-2xl shadow-lg relative overflow-hidden"
                style={{ 
                  backgroundColor: avatar.clothing.bottomColor,
                  background: `linear-gradient(145deg, ${avatar.clothing.bottomColor}, ${avatar.clothing.bottomColor}dd)`
                }}
              >
                {/* Clothing details */}
                {avatar.clothing.bottom === 'jeans' && (
                  <>
                    <div className="absolute left-2 top-2 w-1 h-16 bg-white bg-opacity-20"></div>
                    <div className="absolute right-2 top-2 w-1 h-16 bg-white bg-opacity-20"></div>
                  </>
                )}
                {avatar.clothing.bottom === 'dress' && avatar.base.gender === 'female' && (
                  <div className="absolute inset-1 border border-white border-opacity-20 rounded-b-xl"></div>
                )}
              </motion.div>
              
              {/* Enhanced Shoes */}
              <motion.div
                key={avatar.clothing.shoes + avatar.clothing.shoeColor}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex space-x-3 mt-2"
              >
                <div className={`shadow-md ${
                  avatar.clothing.shoes === 'heels' ? 'w-6 h-6 rounded-t-full' :
                  avatar.clothing.shoes === 'boots' ? 'w-7 h-6 rounded-lg' :
                  avatar.clothing.shoes === 'sandals' ? 'w-8 h-3 rounded-full' :
                  'w-7 h-5 rounded-full'
                }`} style={{ 
                  backgroundColor: avatar.clothing.shoeColor,
                  background: `linear-gradient(145deg, ${avatar.clothing.shoeColor}, ${avatar.clothing.shoeColor}dd)`
                }}></div>
                <div className={`shadow-md ${
                  avatar.clothing.shoes === 'heels' ? 'w-6 h-6 rounded-t-full' :
                  avatar.clothing.shoes === 'boots' ? 'w-7 h-6 rounded-lg' :
                  avatar.clothing.shoes === 'sandals' ? 'w-8 h-3 rounded-full' :
                  'w-7 h-5 rounded-full'
                }`} style={{ 
                  backgroundColor: avatar.clothing.shoeColor,
                  background: `linear-gradient(145deg, ${avatar.clothing.shoeColor}, ${avatar.clothing.shoeColor}dd)`
                }}></div>
              </motion.div>

              {/* Watch */}
              {avatar.accessories.watch !== 'none' && (
                <div className="absolute right-8 top-32 w-4 h-6 bg-gray-800 rounded-lg shadow-sm"></div>
              )}

              {/* Bag */}
              {avatar.accessories.bag !== 'none' && (
                <div className={`absolute shadow-lg ${
                  avatar.accessories.bag === 'backpack' ? 'right-2 top-20 w-8 h-12 bg-gray-700 rounded-lg' :
                  avatar.accessories.bag === 'handbag' ? 'left-2 top-28 w-6 h-8 bg-brown-600 rounded-lg' :
                  avatar.accessories.bag === 'crossbody' ? 'left-0 top-24 w-4 h-6 bg-black rounded-lg' :
                  'left-2 top-28 w-6 h-8 bg-gray-600 rounded-lg'
                }`}></div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Enhanced Avatar Info */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 backdrop-blur-md rounded-xl px-6 py-3 shadow-xl border border-white border-opacity-20">
        <p className="text-sm font-semibold text-gray-800 capitalize text-center">
          {avatar.base.gender} Avatar
        </p>
        <p className="text-xs text-gray-600 text-center mt-1">
          {avatar.hair.style} • {avatar.clothing.top} • {avatar.clothing.bottom}
        </p>
      </div>

      {/* 3D Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black opacity-5 rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default AvatarDisplay;