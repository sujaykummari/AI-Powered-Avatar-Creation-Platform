import React from 'react';
import { motion } from 'framer-motion';
import { AvatarOptions } from '../types/avatar';

interface AvatarDisplayProps {
  avatar: AvatarOptions;
}

const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ avatar }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 rounded-xl overflow-hidden min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[650px]">
      {/* Professional Studio Environment */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-blue-200 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-pink-200 rounded-full opacity-8 blur-2xl"></div>
      </div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4"
      >
        {/* Ultra Realistic 3D Avatar Container */}
        <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] aspect-[3/4.2]">
          
          {/* Main Avatar Body with Professional 3D Modeling */}
          <motion.div
            key={`${avatar.base.gender}-${avatar.base.skinTone}`}
            initial={{ scale: 0.92, rotateY: -2 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-3xl flex flex-col items-center justify-start pt-6 sm:pt-8 md:pt-10 lg:pt-12 overflow-visible"
            style={{ 
              background: `
                radial-gradient(ellipse at 35% 25%, ${avatar.base.skinTone}ff 0%, ${avatar.base.skinTone}f5 35%, ${avatar.base.skinTone}e8 70%, ${avatar.base.skinTone}d5 100%),
                linear-gradient(145deg, ${avatar.base.skinTone}f8, ${avatar.base.skinTone}e5, ${avatar.base.skinTone}d8)
              `,
              boxShadow: `
                0 30px 60px -15px rgba(0, 0, 0, 0.3),
                inset 0 2px 4px rgba(255, 255, 255, 0.15),
                inset 0 -2px 4px rgba(0, 0, 0, 0.05)
              `,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Ultra Realistic Head with Professional Proportions */}
            <div className="relative w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 rounded-full mb-1 sm:mb-2 md:mb-3" 
                 style={{ 
                   background: `
                     radial-gradient(circle at 38% 28%, ${avatar.base.skinTone}ff 0%, ${avatar.base.skinTone}f8 25%, ${avatar.base.skinTone}f0 50%, ${avatar.base.skinTone}e5 75%, ${avatar.base.skinTone}d8 100%),
                     linear-gradient(145deg, ${avatar.base.skinTone}fa, ${avatar.base.skinTone}e8, ${avatar.base.skinTone}d5)
                   `,
                   boxShadow: `
                     0 20px 40px rgba(0, 0, 0, 0.2),
                     inset 0 3px 6px rgba(255, 255, 255, 0.15),
                     inset 0 -3px 6px rgba(0, 0, 0, 0.08)
                   `,
                   border: '1px solid rgba(255, 255, 255, 0.25)'
                 }}>
              
              {/* Professional Hair with Realistic Textures */}
              {avatar.hair.style !== 'bald' && (
                <motion.div
                  key={avatar.hair.style + avatar.hair.color}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute shadow-2xl ${
                    avatar.hair.style === 'long' || avatar.hair.style === 'straight_long' ? 
                      'w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 -top-1 sm:-top-2 md:-top-3 lg:-top-4 -left-2 rounded-t-full' :
                    avatar.hair.style === 'curly_long' || avatar.hair.style === 'braids' ? 
                      'w-22 sm:w-26 md:w-30 lg:w-34 xl:w-38 h-18 sm:h-22 md:h-26 lg:h-30 xl:h-34 -top-2 sm:-top-3 md:-top-4 lg:-top-5 -left-3 rounded-t-full' :
                    avatar.hair.style === 'afro' ? 
                      'w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 -top-3 sm:-top-4 md:-top-5 lg:-top-6 -left-4 rounded-full' :
                    avatar.hair.style === 'ponytail' ? 
                      'w-18 sm:w-22 md:w-26 lg:w-30 xl:w-34 h-14 sm:h-18 md:h-22 lg:h-26 xl:h-30 -top-1 sm:-top-2 md:-top-3 -left-1 rounded-t-full' :
                    avatar.hair.style === 'bob' || avatar.hair.style === 'pixie' ? 
                      'w-18 sm:w-22 md:w-26 lg:w-30 xl:w-34 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 -top-1 sm:-top-2 md:-top-3 -left-1 rounded-t-full' :
                    'w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-14 sm:h-18 md:h-22 lg:h-26 xl:h-30 -top-1 sm:-top-2 md:-top-3 lg:-top-4 -left-2 rounded-t-full'
                  }`}
                  style={{ 
                    background: `
                      radial-gradient(ellipse at 42% 32%, ${avatar.hair.color}ff 0%, ${avatar.hair.color}f5 35%, ${avatar.hair.color}e8 65%, ${avatar.hair.color}d5 100%),
                      linear-gradient(145deg, ${avatar.hair.color}f8, ${avatar.hair.color}e5, ${avatar.hair.color}d0, ${avatar.hair.color}c8)
                    `,
                    boxShadow: `
                      0 15px 30px rgba(0, 0, 0, 0.25),
                      inset 0 2px 4px rgba(255, 255, 255, 0.12),
                      inset 0 -2px 4px rgba(0, 0, 0, 0.12)
                    `,
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  {/* Advanced Hair Textures */}
                  <div className="absolute inset-1 opacity-25">
                    {avatar.hair.style.includes('curly') && (
                      <div className="w-full h-full bg-gradient-to-br from-white via-transparent to-transparent rounded-t-full">
                        <div className="absolute inset-2 bg-radial-gradient from-white to-transparent opacity-40 rounded-t-full"></div>
                      </div>
                    )}
                    {avatar.hair.style === 'braids' && (
                      <div className="flex space-x-0.5 sm:space-x-1 p-1 sm:p-2 h-full">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-0.5 sm:w-1 h-full bg-white bg-opacity-50 rounded-full shadow-sm"></div>
                        ))}
                      </div>
                    )}
                    {avatar.hair.style === 'afro' && (
                      <div className="w-full h-full bg-radial-gradient from-white via-transparent to-transparent rounded-full opacity-60"></div>
                    )}
                    {!avatar.hair.style.includes('curly') && avatar.hair.style !== 'braids' && avatar.hair.style !== 'afro' && (
                      <div className="w-full h-full bg-gradient-to-b from-white via-transparent to-transparent rounded-t-full opacity-50"></div>
                    )}
                  </div>
                  
                  {/* Professional Hair Shine */}
                  <div className="absolute top-1 sm:top-2 md:top-3 left-1/3 w-3 sm:w-4 md:w-6 lg:w-8 h-1.5 sm:h-2 md:h-3 lg:h-4 bg-white bg-opacity-25 rounded-full blur-sm"></div>
                  <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 w-2 sm:w-3 md:w-4 h-1 sm:h-1.5 md:h-2 bg-white bg-opacity-15 rounded-full blur-sm"></div>
                </motion.div>
              )}
              
              {/* Ultra Realistic Eyes with Professional Detail */}
              <div className="absolute top-6 sm:top-8 md:top-10 lg:top-12 xl:top-14 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="relative">
                    {/* Eye Socket with Natural Shadow */}
                    <div className="absolute -inset-0.5 sm:-inset-1 bg-black bg-opacity-8 rounded-full blur-sm"></div>
                    {/* Eye White with Realistic Shape */}
                    <div className="w-2.5 sm:w-3.5 md:w-4 lg:w-5 xl:w-6 h-2 sm:h-2.5 md:h-3 lg:h-4 xl:h-5 rounded-full bg-white shadow-inner border border-gray-100 relative overflow-hidden">
                      {/* Iris with Professional Gradient */}
                      <div 
                        className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 xl:w-4 h-1.5 sm:h-2 md:h-2.5 lg:h-3 xl:h-4 rounded-full absolute top-0.25 sm:top-0.25 md:top-0.25 lg:top-0.5 left-0.5 sm:left-0.75 md:left-0.75 lg:left-1 shadow-sm border border-gray-200"
                        style={{ 
                          background: `
                            radial-gradient(circle at 35% 35%, ${avatar.facial.eyeColor}ff 0%, ${avatar.facial.eyeColor}e8 35%, ${avatar.facial.eyeColor}d0 70%, ${avatar.facial.eyeColor}b8 100%)
                          `
                        }}
                      >
                        {/* Pupil with Natural Depth */}
                        <div className="w-0.5 sm:w-1 md:w-1.5 lg:w-2 h-0.5 sm:h-1 md:h-1.5 lg:h-2 rounded-full bg-black absolute top-0.5 sm:top-0.5 md:top-0.5 lg:top-0.5 left-0.5 sm:left-0.5 md:left-0.5 lg:left-0.5 shadow-inner"></div>
                        {/* Primary Eye Shine */}
                        <div className="w-0.5 sm:w-0.5 md:w-1 lg:w-1 h-0.5 sm:h-0.5 md:h-1 lg:h-1 rounded-full bg-white absolute top-0.25 sm:top-0.5 md:top-0.5 lg:top-0.5 left-0.25 sm:left-0.5 md:left-1 lg:left-1 opacity-95"></div>
                        {/* Secondary Eye Shine */}
                        <div className="w-0.25 sm:w-0.5 md:w-0.5 lg:w-0.5 h-0.25 sm:h-0.5 md:h-0.5 lg:h-0.5 rounded-full bg-white absolute top-0.75 sm:top-1 md:top-1 lg:top-1.5 left-0.25 sm:left-0.5 md:left-0.5 lg:left-0.5 opacity-70"></div>
                      </div>
                      {/* Natural Eye Moisture */}
                      <div className="absolute bottom-0 w-full h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-t from-blue-100 to-transparent opacity-40"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Realistic Eyebrows with Hair Color Match */}
              <div className="absolute top-5 sm:top-6 md:top-8 lg:top-10 xl:top-12 left-1/2 transform -translate-x-1/2 flex space-x-2.5 sm:space-x-3 md:space-x-4">
                {[...Array(2)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1.5 sm:w-2.5 md:w-3 lg:w-4 h-0.5 sm:h-0.5 md:h-1 rounded-full shadow-sm"
                    style={{ 
                      background: `linear-gradient(90deg, ${avatar.hair.color}e5, ${avatar.hair.color}d0, ${avatar.hair.color}e5)`,
                      opacity: 0.9
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Professional Nose with Realistic Shading */}
              <div className="absolute top-8 sm:top-10 md:top-12 lg:top-14 xl:top-16 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Nose Bridge with Natural Shadow */}
                  <div className="w-1 sm:w-1.5 md:w-2 lg:w-2.5 h-1.5 sm:h-2 md:h-3 lg:h-4 bg-black bg-opacity-6 rounded-full shadow-inner"></div>
                  {/* Nostrils with Realistic Placement */}
                  <div className="absolute bottom-0 left-0 w-0.25 sm:w-0.5 h-0.25 sm:h-0.5 bg-black bg-opacity-20 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-0.25 sm:w-0.5 h-0.25 sm:h-0.5 bg-black bg-opacity-20 rounded-full"></div>
                  {/* Nose Highlight for 3D Effect */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-0.5 md:w-1 h-0.5 sm:h-1 md:h-2 bg-white bg-opacity-15 rounded-full blur-sm"></div>
                </div>
              </div>
              
              {/* Ultra Realistic Lips with Professional Modeling */}
              <div className="absolute top-10 sm:top-12 md:top-14 lg:top-16 xl:top-18 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Upper Lip with Natural Curve */}
                  <div className="w-2.5 sm:w-3.5 md:w-4 lg:w-5 xl:w-6 h-0.5 sm:h-1 md:h-1.5 rounded-t-full shadow-sm border border-pink-200"
                       style={{ 
                         background: 'linear-gradient(145deg, #f472b6, #ec4899, #db2777)',
                         boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 1px 3px rgba(0, 0, 0, 0.15)'
                       }}>
                    {/* Upper Lip Highlight */}
                    <div className="w-full h-0.25 sm:h-0.5 bg-white bg-opacity-35 rounded-t-full"></div>
                  </div>
                  {/* Lower Lip with Natural Volume */}
                  <div className="w-2.5 sm:w-3.5 md:w-4 lg:w-5 xl:w-6 h-0.5 sm:h-1 md:h-1.5 rounded-b-full shadow-sm border border-pink-200 -mt-0.25 sm:-mt-0.5"
                       style={{ 
                         background: 'linear-gradient(145deg, #ec4899, #db2777, #be185d)',
                         boxShadow: 'inset 0 -1px 2px rgba(255, 255, 255, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)'
                       }}>
                    {/* Lower Lip Highlight */}
                    <div className="w-1.5 sm:w-2 md:w-3 h-0.25 sm:h-0.5 bg-white bg-opacity-45 rounded-full absolute bottom-0.25 sm:bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Professional Facial Hair with Realistic Textures */}
              {avatar.facial.facial_hair !== 'none' && avatar.base.gender === 'male' && (
                <motion.div
                  key={avatar.facial.facial_hair}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-12 sm:top-14 md:top-16 lg:top-18 xl:top-20 left-1/2 transform -translate-x-1/2"
                  style={{ 
                    background: `linear-gradient(145deg, ${avatar.hair.color}e0, ${avatar.hair.color}c8, ${avatar.hair.color}b0)`,
                  }}
                >
                  {avatar.facial.facial_hair === 'beard' && (
                    <div className="w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-3 sm:h-4 md:h-6 lg:h-8 xl:h-10 rounded-b-3xl opacity-90 shadow-lg border border-gray-300 border-opacity-25">
                      <div className="absolute inset-1 bg-gradient-to-b from-white to-transparent opacity-15 rounded-b-2xl"></div>
                    </div>
                  )}
                  {avatar.facial.facial_hair === 'mustache' && (
                    <div className="w-3 sm:w-4 md:w-6 lg:w-8 xl:w-10 h-0.5 sm:h-1 md:h-1.5 lg:h-2 xl:h-2.5 rounded-full opacity-90 shadow-md">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-full"></div>
                    </div>
                  )}
                  {avatar.facial.facial_hair === 'goatee' && (
                    <div className="w-2.5 sm:w-3 md:w-4 lg:w-6 xl:w-8 h-2.5 sm:h-3 md:h-4 lg:h-6 xl:h-8 rounded-b-full opacity-90 shadow-lg">
                      <div className="absolute inset-1 bg-gradient-to-b from-white to-transparent opacity-20 rounded-b-full"></div>
                    </div>
                  )}
                </motion.div>
              )}
              
              {/* Ultra Realistic Glasses with Professional Materials */}
              {avatar.accessories.glasses !== 'none' && (
                <motion.div
                  key={avatar.accessories.glasses}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-5.5 sm:top-7 md:top-9 lg:top-11 xl:top-13 left-1/2 transform -translate-x-1/2 z-20"
                >
                  {avatar.accessories.glasses.includes('round') && (
                    <div className="flex space-x-0.5 sm:space-x-1 items-center">
                      <div className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 rounded-full border-2 border-gray-800 bg-blue-50 bg-opacity-40 shadow-2xl backdrop-blur-sm relative">
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-transparent to-blue-100 opacity-25"></div>
                        <div className="absolute top-0.5 left-0.5 w-1 sm:w-1.5 h-0.5 sm:h-1 bg-white bg-opacity-30 rounded-full blur-sm"></div>
                      </div>
                      <div className="w-0.5 sm:w-1 md:w-1.5 h-0.25 sm:h-0.5 bg-gray-800 rounded-full shadow-sm"></div>
                      <div className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 rounded-full border-2 border-gray-800 bg-blue-50 bg-opacity-40 shadow-2xl backdrop-blur-sm relative">
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-transparent to-blue-100 opacity-25"></div>
                        <div className="absolute top-0.5 left-0.5 w-1 sm:w-1.5 h-0.5 sm:h-1 bg-white bg-opacity-30 rounded-full blur-sm"></div>
                      </div>
                    </div>
                  )}
                  {avatar.accessories.glasses.includes('square') && (
                    <div className="flex space-x-0.5 sm:space-x-1 items-center">
                      <div className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 h-2.5 sm:h-3 md:h-4 lg:h-5 xl:h-6 rounded-lg border-2 border-gray-800 bg-blue-50 bg-opacity-40 shadow-2xl backdrop-blur-sm relative">
                        <div className="absolute inset-1 rounded-md bg-gradient-to-br from-white via-transparent to-blue-100 opacity-25"></div>
                        <div className="absolute top-0.5 left-0.5 w-1 sm:w-1.5 h-0.5 sm:h-1 bg-white bg-opacity-30 rounded-sm blur-sm"></div>
                      </div>
                      <div className="w-0.5 sm:w-1 md:w-1.5 h-0.25 sm:h-0.5 bg-gray-800 rounded-full shadow-sm"></div>
                      <div className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 h-2.5 sm:h-3 md:h-4 lg:h-5 xl:h-6 rounded-lg border-2 border-gray-800 bg-blue-50 bg-opacity-40 shadow-2xl backdrop-blur-sm relative">
                        <div className="absolute inset-1 rounded-md bg-gradient-to-br from-white via-transparent to-blue-100 opacity-25"></div>
                        <div className="absolute top-0.5 left-0.5 w-1 sm:w-1.5 h-0.5 sm:h-1 bg-white bg-opacity-30 rounded-sm blur-sm"></div>
                      </div>
                    </div>
                  )}
                  {avatar.accessories.glasses.includes('aviator') && (
                    <div className="flex space-x-0.5 sm:space-x-1 items-center">
                      <div className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 rounded-full border-2 border-yellow-600 bg-yellow-100 bg-opacity-50 shadow-2xl backdrop-blur-sm relative">
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-200 via-transparent to-orange-100 opacity-35"></div>
                        <div className="absolute top-0.5 left-0.5 w-1.5 sm:w-2 h-0.5 sm:h-1 bg-white bg-opacity-40 rounded-full blur-sm"></div>
                      </div>
                      <div className="w-0.5 sm:w-1 md:w-1.5 h-0.25 sm:h-0.5 bg-yellow-600 rounded-full shadow-sm"></div>
                      <div className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 rounded-full border-2 border-yellow-600 bg-yellow-100 bg-opacity-50 shadow-2xl backdrop-blur-sm relative">
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-200 via-transparent to-orange-100 opacity-35"></div>
                        <div className="absolute top-0.5 left-0.5 w-1.5 sm:w-2 h-0.5 sm:h-1 bg-white bg-opacity-40 rounded-full blur-sm"></div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
              
              {/* Professional Hat Styling with Realistic Materials */}
              {avatar.accessories.hat !== 'none' && (
                <motion.div
                  key={avatar.accessories.hat}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 transform -translate-x-1/2 z-30"
                >
                  {avatar.accessories.hat === 'beanie' && (
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-4 sm:h-6 md:h-8 lg:h-10 xl:h-12 -top-3 sm:-top-4 md:-top-6 lg:-top-8 xl:-top-10 rounded-t-full shadow-2xl border border-gray-600"
                         style={{ 
                           background: 'linear-gradient(145deg, #374151, #1f2937, #111827)',
                           boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.15)'
                         }}>
                      <div className="w-full h-0.5 sm:h-1 md:h-2 bg-white bg-opacity-15 rounded-t-full"></div>
                      <div className="absolute inset-1 bg-gradient-to-b from-white to-transparent opacity-10 rounded-t-full"></div>
                    </div>
                  )}
                  {avatar.accessories.hat === 'cap' && (
                    <div className="-top-2 sm:-top-3 md:-top-4 lg:-top-6 xl:-top-8 relative">
                      <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-3 sm:h-4 md:h-6 lg:h-8 xl:h-10 rounded-t-3xl shadow-2xl border border-blue-400"
                           style={{ 
                             background: 'linear-gradient(145deg, #2563eb, #1d4ed8, #1e40af)',
                             boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.25)'
                           }}>
                        <div className="w-full h-0.5 sm:h-1 bg-white bg-opacity-25 rounded-t-3xl"></div>
                        <div className="absolute inset-1 bg-gradient-to-b from-white to-transparent opacity-15 rounded-t-3xl"></div>
                      </div>
                      <div className="w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 h-1 sm:h-1.5 md:h-2 lg:h-3 xl:h-4 bg-blue-700 rounded-full absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Premium Jewelry with Realistic Materials */}
              {avatar.accessories.jewelry.includes('earrings') && (
                <div className="absolute top-8 sm:top-10 md:top-12 lg:top-14 xl:top-16 flex justify-between w-full px-0">
                  <div className="w-1 sm:w-1.5 md:w-2 lg:w-2.5 xl:w-3 h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 rounded-full shadow-lg border border-yellow-200">
                    <div className="w-full h-full bg-gradient-to-br from-white to-transparent opacity-30 rounded-full"></div>
                  </div>
                  <div className="w-1 sm:w-1.5 md:w-2 lg:w-2.5 xl:w-3 h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 rounded-full shadow-lg border border-yellow-200">
                    <div className="w-full h-full bg-gradient-to-br from-white to-transparent opacity-30 rounded-full"></div>
                  </div>
                </div>
              )}

              {avatar.accessories.jewelry.includes('necklace') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20 h-0.5 sm:h-1 md:h-1.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 rounded-full shadow-lg border border-yellow-200">
                    <div className="w-full h-full bg-gradient-to-r from-white via-transparent to-white opacity-40 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Ultra Realistic Body with Professional Proportions */}
            <div className="flex flex-col items-center flex-1 w-full">
              {/* Professional Torso with Realistic Clothing */}
              <motion.div
                key={avatar.clothing.top + avatar.clothing.topColor}
                initial={{ scale: 0.96, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 rounded-t-3xl mb-0.5 sm:mb-1 md:mb-2 shadow-2xl relative overflow-hidden border border-white border-opacity-25"
                style={{ 
                  background: `
                    radial-gradient(ellipse at 32% 22%, ${avatar.clothing.topColor}ff 0%, ${avatar.clothing.topColor}f5 35%, ${avatar.clothing.topColor}e8 70%, ${avatar.clothing.topColor}d5 100%),
                    linear-gradient(145deg, ${avatar.clothing.topColor}f8, ${avatar.clothing.topColor}e5, ${avatar.clothing.topColor}d0, ${avatar.clothing.topColor}c8)
                  `,
                  boxShadow: `
                    0 20px 40px rgba(0, 0, 0, 0.25),
                    inset 0 3px 6px rgba(255, 255, 255, 0.15),
                    inset 0 -3px 6px rgba(0, 0, 0, 0.08)
                  `
                }}
              >
                {/* Advanced Clothing Details */}
                {avatar.clothing.top === 'tshirt' && (
                  <>
                    <div className="absolute inset-1 sm:inset-2 border border-white border-opacity-40 rounded-t-2xl"></div>
                    <div className="absolute top-0.5 sm:top-1 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 md:w-4 lg:w-6 xl:w-8 h-1.5 sm:h-2 md:h-3 lg:h-4 xl:h-6 bg-white bg-opacity-15 rounded-b-2xl shadow-inner"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black opacity-8 rounded-t-3xl"></div>
                  </>
                )}
                {avatar.clothing.top === 'hoodie' && (
                  <>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-2 sm:h-3 md:h-4 lg:h-6 xl:h-8 bg-black bg-opacity-25 rounded-b-2xl shadow-inner border border-black border-opacity-10"></div>
                    <div className="absolute top-1.5 sm:top-2 md:top-3 lg:top-4 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-2 sm:h-3 md:h-4 lg:h-6 xl:h-8 bg-white bg-opacity-25 rounded-full shadow-sm"></div>
                    <div className="absolute top-0.5 sm:top-1 md:top-2 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 md:w-6 lg:w-8 xl:w-10 h-0.25 sm:h-0.5 md:h-1 bg-white bg-opacity-20 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black opacity-6 rounded-t-3xl"></div>
                  </>
                )}
                {avatar.clothing.top === 'blazer' && (
                  <>
                    <div className="absolute inset-0.5 sm:inset-1 border-2 border-white border-opacity-50 rounded-t-2xl"></div>
                    <div className="absolute top-1.5 sm:top-2 md:top-3 left-1.5 sm:left-2 md:left-3 w-0.5 sm:w-1 md:w-2 h-0.5 sm:h-1 md:h-2 bg-white bg-opacity-40 rounded-full shadow-sm"></div>
                    <div className="absolute top-3 sm:top-4 md:top-6 left-1.5 sm:left-2 md:left-3 w-0.5 sm:w-1 md:w-2 h-0.5 sm:h-1 md:h-2 bg-white bg-opacity-40 rounded-full shadow-sm"></div>
                    <div className="absolute top-4.5 sm:top-6 md:top-9 left-1.5 sm:left-2 md:left-3 w-0.5 sm:w-1 md:w-2 h-0.5 sm:h-1 md:h-2 bg-white bg-opacity-40 rounded-full shadow-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black opacity-10 rounded-t-3xl"></div>
                  </>
                )}
                
                {/* Professional Fabric Texture */}
                <div className="absolute top-0 left-1/4 w-3 sm:w-4 md:w-6 lg:w-8 h-0.5 sm:h-1 md:h-2 bg-white bg-opacity-15 rounded-full blur-sm"></div>
                <div className="absolute top-2 sm:top-3 md:top-4 right-1/4 w-2 sm:w-3 md:w-4 h-0.5 sm:h-1 bg-white bg-opacity-10 rounded-full blur-sm"></div>
              </motion.div>
              
              {/* Professional Legs with Realistic Clothing */}
              <motion.div
                key={avatar.clothing.bottom + avatar.clothing.bottomColor}
                initial={{ scale: 0.96, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-10 sm:w-14 md:w-18 lg:w-22 xl:w-26 h-14 sm:h-18 md:h-22 lg:h-26 xl:h-30 rounded-b-3xl shadow-2xl relative overflow-hidden border border-white border-opacity-25"
                style={{ 
                  background: `
                    radial-gradient(ellipse at 32% 22%, ${avatar.clothing.bottomColor}ff 0%, ${avatar.clothing.bottomColor}f5 35%, ${avatar.clothing.bottomColor}e8 70%, ${avatar.clothing.bottomColor}d5 100%),
                    linear-gradient(145deg, ${avatar.clothing.bottomColor}f8, ${avatar.clothing.bottomColor}e5, ${avatar.clothing.bottomColor}d0, ${avatar.clothing.bottomColor}c8)
                  `,
                  boxShadow: `
                    0 20px 40px rgba(0, 0, 0, 0.25),
                    inset 0 3px 6px rgba(255, 255, 255, 0.15),
                    inset 0 -3px 6px rgba(0, 0, 0, 0.08)
                  `
                }}
              >
                {/* Advanced Bottom Details */}
                {avatar.clothing.bottom === 'jeans' && (
                  <>
                    <div className="absolute left-0.5 sm:left-1 md:left-2 top-0.5 sm:top-1 md:top-2 w-0.25 sm:w-0.5 h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 bg-white bg-opacity-35 rounded-full shadow-sm"></div>
                    <div className="absolute right-0.5 sm:right-1 md:right-2 top-0.5 sm:top-1 md:top-2 w-0.25 sm:w-0.5 h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 bg-white bg-opacity-35 rounded-full shadow-sm"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0.5 sm:top-1 w-2 sm:w-3 md:w-4 lg:w-6 xl:w-8 h-0.25 sm:h-0.5 bg-white bg-opacity-25 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black opacity-8 rounded-b-3xl"></div>
                  </>
                )}
                {avatar.clothing.bottom === 'dress' && avatar.base.gender === 'female' && (
                  <>
                    <div className="absolute inset-0.5 sm:inset-1 border border-white border-opacity-35 rounded-b-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black opacity-6 rounded-b-3xl"></div>
                  </>
                )}
                
                <div className="absolute top-1 sm:top-2 md:top-3 left-1/3 w-2 sm:w-3 md:w-4 h-0.5 sm:h-1 bg-white bg-opacity-12 rounded-full blur-sm"></div>
              </motion.div>
              
              {/* Ultra Realistic Shoes with Professional Details */}
              <motion.div
                key={avatar.clothing.shoes + avatar.clothing.shoeColor}
                initial={{ scale: 0.96, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex space-x-1.5 sm:space-x-2 md:space-x-3 mt-0.5 sm:mt-1 md:mt-2"
              >
                {[...Array(2)].map((_, i) => (
                  <div 
                    key={i}
                    className={`shadow-2xl border border-white border-opacity-25 relative overflow-hidden ${
                      avatar.clothing.shoes === 'heels' ? 'w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 h-3 sm:h-4 md:h-5 lg:w-6 xl:h-7 rounded-t-2xl' :
                      avatar.clothing.shoes === 'boots' ? 'w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 rounded-lg' :
                      avatar.clothing.shoes === 'sandals' ? 'w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 h-1.5 sm:h-2 md:h-3 rounded-2xl' :
                      'w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-2.5 sm:h-3 md:h-4 lg:h-5 xl:h-6 rounded-2xl'
                    }`} 
                    style={{ 
                      background: `
                        radial-gradient(ellipse at 32% 22%, ${avatar.clothing.shoeColor}ff 0%, ${avatar.clothing.shoeColor}f5 35%, ${avatar.clothing.shoeColor}e8 70%, ${avatar.clothing.shoeColor}d5 100%),
                        linear-gradient(145deg, ${avatar.clothing.shoeColor}f8, ${avatar.clothing.shoeColor}e5, ${avatar.clothing.shoeColor}d0, ${avatar.clothing.shoeColor}c8)
                      `,
                      boxShadow: `
                        0 15px 30px rgba(0, 0, 0, 0.25),
                        inset 0 2px 4px rgba(255, 255, 255, 0.15),
                        inset 0 -2px 4px rgba(0, 0, 0, 0.08)
                      `
                    }}
                  >
                    {avatar.clothing.shoes === 'heels' && (
                      <div className="absolute -bottom-0.5 sm:-bottom-1 right-0.5 w-0.25 sm:w-0.5 h-1.5 sm:h-2 md:h-3 lg:h-4 bg-gray-800 rounded-full shadow-lg"></div>
                    )}
                    {avatar.clothing.shoes === 'sneakers' && (
                      <>
                        <div className="w-full h-0.25 sm:h-0.5 bg-white bg-opacity-50 rounded-t-2xl"></div>
                        <div className="absolute bottom-0 w-full h-0.5 sm:h-1 bg-white bg-opacity-70 rounded-b-2xl shadow-inner"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-0.25 sm:h-0.5 bg-white bg-opacity-30 rounded-full"></div>
                      </>
                    )}
                    {avatar.clothing.shoes === 'boots' && (
                      <>
                        <div className="absolute inset-0.5 border border-white border-opacity-30 rounded-lg"></div>
                        <div className="absolute top-0.5 left-0.5 w-0.5 sm:w-1 h-2 sm:h-3 md:h-4 bg-white bg-opacity-20 rounded-full"></div>
                      </>
                    )}
                    
                    <div className="absolute top-0 left-1/4 w-1 sm:w-1.5 h-0.25 sm:h-0.5 bg-white bg-opacity-20 rounded-full blur-sm"></div>
                  </div>
                ))}
              </motion.div>

              {/* Premium Accessories with Realistic Details */}
              {avatar.accessories.watch !== 'none' && (
                <div className="absolute right-1 sm:right-2 md:right-4 top-20 sm:top-24 md:top-28 lg:top-32 xl:top-36">
                  <div className="w-2.5 sm:w-3 md:w-4 lg:w-5 xl:w-6 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl border border-gray-600">
                    <div className="w-2 sm:w-2.5 md:w-3 lg:w-4 h-2 sm:h-2.5 md:h-3 lg:h-4 bg-black rounded-lg m-0.25 sm:m-0.5 shadow-inner relative">
                      <div className="w-0.5 sm:w-1 md:w-1.5 lg:w-2 h-0.5 sm:h-1 md:h-1.5 lg:h-2 bg-blue-400 rounded-full absolute top-0.25 sm:top-0.5 left-0.25 sm:left-0.5 shadow-sm"></div>
                      <div className="absolute top-0.25 sm:top-0.5 right-0.25 sm:right-0.5 w-0.25 sm:w-0.5 h-0.25 sm:h-0.5 bg-green-400 rounded-full"></div>
                      <div className="absolute bottom-0.25 sm:bottom-0.5 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-0.25 sm:h-0.5 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}

              {avatar.accessories.bag !== 'none' && (
                <div className={`absolute shadow-2xl border border-white border-opacity-25 ${
                  avatar.accessories.bag === 'backpack' ? 'right-0 top-12 sm:top-16 md:top-20 lg:top-24 xl:top-28 w-4 sm:w-5 md:w-6 lg:w-8 xl:w-10 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 rounded-2xl' :
                  avatar.accessories.bag === 'handbag' ? 'left-0 top-16 sm:top-20 md:top-24 lg:top-28 xl:top-32 w-3 sm:w-4 md:w-5 lg:w-6 xl:w-8 h-4 sm:h-5 md:h-6 lg:h-8 xl:h-10 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-2xl' :
                  'left-0 top-14 sm:top-18 md:top-22 lg:top-26 xl:top-30 w-2.5 sm:w-3 md:w-4 lg:w-5 xl:w-6 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-8 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-2xl'
                }`}>
                  {avatar.accessories.bag === 'backpack' && (
                    <>
                      <div className="w-0.25 sm:w-0.5 md:w-1 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-8 bg-gray-500 rounded-full absolute left-0.5 sm:left-1 top-0.5 sm:top-1 shadow-sm"></div>
                      <div className="w-0.25 sm:w-0.5 md:w-1 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-8 bg-gray-500 rounded-full absolute right-0.5 sm:right-1 top-0.5 sm:top-1 shadow-sm"></div>
                      <div className="w-1.5 sm:w-2 md:w-3 lg:w-4 xl:w-6 h-0.25 sm:h-0.5 md:h-1 bg-gray-500 rounded-full absolute left-1 sm:left-1.5 md:left-2 top-1 sm:top-2 shadow-sm"></div>
                      <div className="absolute inset-1 bg-gradient-to-br from-white to-transparent opacity-10 rounded-xl"></div>
                    </>
                  )}
                  {avatar.accessories.bag === 'handbag' && (
                    <>
                      <div className="w-2 sm:w-3 md:w-4 h-0.25 sm:w-0.5 bg-amber-400 rounded-full absolute top-0.5 left-1/2 transform -translate-x-1/2 shadow-sm"></div>
                      <div className="absolute inset-1 bg-gradient-to-br from-white to-transparent opacity-15 rounded-xl"></div>
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Professional Avatar Info Card */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-2xl border border-white border-opacity-40">
        <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800 capitalize text-center">
          {avatar.base.gender} Avatar
        </p>
        <p className="text-xs text-gray-600 text-center mt-0.5 sm:mt-1">
          {avatar.hair.style.replace('_', ' ')} • {avatar.clothing.top.replace('_', ' ')} • {avatar.clothing.bottom.replace('_', ' ')}
        </p>
      </div>

      {/* Professional Studio Lighting Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-12 rounded-xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-white opacity-8 rounded-xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default AvatarDisplay;