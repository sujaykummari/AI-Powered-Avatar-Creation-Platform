import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Shirt, User, Glasses, Watch, ShoppingBag, Upload, Sparkles } from 'lucide-react';
import { AvatarOptions } from '../types/avatar';
import { AVATAR_OPTIONS } from '../data/avatarData';

interface CustomizationPanelProps {
  avatar: AvatarOptions;
  onAvatarChange: (avatar: AvatarOptions) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ avatar, onAvatarChange }) => {
  const [activeTab, setActiveTab] = React.useState<'base' | 'clothing' | 'accessories' | 'colors'>('base');

  const updateAvatar = (updates: Partial<AvatarOptions>) => {
    onAvatarChange({ ...avatar, ...updates });
  };

  const tabs = [
    { id: 'base', label: 'Base', icon: User },
    { id: 'clothing', label: 'Clothing', icon: Shirt },
    { id: 'accessories', label: 'Accessories', icon: Glasses },
    { id: 'colors', label: 'Colors', icon: Palette }
  ];

  const getCurrentClothingOptions = () => {
    return avatar.base.gender === 'male' ? AVATAR_OPTIONS.clothing.male : AVATAR_OPTIONS.clothing.female;
  };

  return (
    <div className="h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Enhanced Responsive Tab Navigation */}
      <div className="flex border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 py-3 sm:py-4 px-1 sm:px-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-b-2 sm:border-b-3 border-indigo-600 bg-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-50'
              }`}
            >
              <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="text-xs sm:text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Enhanced Responsive Tab Content */}
      <div className="p-3 sm:p-4 md:p-6 h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'base' && (
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Gender Selection */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <User className="mr-2" size={18} />
                  Gender
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {AVATAR_OPTIONS.base.genders.map((gender) => (
                    <button
                      key={gender}
                      onClick={() => updateAvatar({ base: { ...avatar.base, gender: gender as any } })}
                      className={`p-2 sm:p-3 md:p-4 rounded-xl border-2 capitalize transition-all duration-200 font-medium text-sm sm:text-base ${
                        avatar.base.gender === gender
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md transform scale-105'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-lg sm:text-xl mb-1">{gender === 'male' ? '👨' : '👩'}</div>
                      <div className="text-xs sm:text-sm">{gender}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Skin Tone Selection */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Skin Tone</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {AVATAR_OPTIONS.base.skinTones.map((tone, index) => (
                    <button
                      key={tone}
                      onClick={() => updateAvatar({
                        base: { ...avatar.base, skinTone: tone }
                      })}
                      className={`p-2 sm:p-3 md:p-4 rounded-xl border-2 flex flex-col items-center space-y-1 sm:space-y-2 transition-all duration-200 ${
                        avatar.base.skinTone === tone
                          ? 'border-indigo-500 bg-indigo-50 shadow-md transform scale-105'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: tone }}
                      ></div>
                      <span className="text-xs font-medium text-gray-600">Tone {index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Style */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Hair Style</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {AVATAR_OPTIONS.hair.styles.map((style) => (
                    <button
                      key={style.value}
                      onClick={() => updateAvatar({ hair: { ...avatar.hair, style: style.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.hair.style === style.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clothing' && (
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Custom Upload Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 sm:p-4 border border-purple-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                  <Upload className="mr-2" size={18} />
                  Custom Clothing
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">Upload your own clothing images to create unique styles</p>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 sm:py-3 px-4 rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center space-x-2">
                  <Upload size={16} />
                  <span>Upload Custom Image</span>
                </button>
              </div>

              {/* Tops */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <Shirt className="mr-2" size={18} />
                  Tops ({getCurrentClothingOptions().tops.length} options)
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {getCurrentClothingOptions().tops.map((top) => (
                    <button
                      key={top.value}
                      onClick={() => updateAvatar({ clothing: { ...avatar.clothing, top: top.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.clothing.top === top.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {top.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottoms */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Bottoms ({getCurrentClothingOptions().bottoms.length} options)</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {getCurrentClothingOptions().bottoms.map((bottom) => (
                    <button
                      key={bottom.value}
                      onClick={() => updateAvatar({ clothing: { ...avatar.clothing, bottom: bottom.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.clothing.bottom === bottom.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {bottom.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shoes */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Shoes ({AVATAR_OPTIONS.clothing.shoes.length} options)</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {AVATAR_OPTIONS.clothing.shoes.map((shoe) => (
                    <button
                      key={shoe.value}
                      onClick={() => updateAvatar({ clothing: { ...avatar.clothing, shoes: shoe.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.clothing.shoes === shoe.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {shoe.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'accessories' && (
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Custom Upload Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 border border-blue-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                  <Sparkles className="mr-2" size={18} />
                  Custom Accessories
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">Upload custom accessories to personalize your avatar</p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 sm:py-3 px-4 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-indigo-600 transition-all flex items-center justify-center space-x-2">
                  <Upload size={16} />
                  <span>Upload Accessory</span>
                </button>
              </div>

              {/* Glasses */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <Glasses className="mr-2" size={18} />
                  Glasses ({AVATAR_OPTIONS.accessories.glasses.length} options)
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {AVATAR_OPTIONS.accessories.glasses.map((glasses) => (
                    <button
                      key={glasses.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, glasses: glasses.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.accessories.glasses === glasses.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {glasses.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hats */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Hats ({AVATAR_OPTIONS.accessories.hats.length} options)</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {AVATAR_OPTIONS.accessories.hats.map((hat) => (
                    <button
                      key={hat.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, hat: hat.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.accessories.hat === hat.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {hat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Watches */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <Watch className="mr-2" size={18} />
                  Watches ({AVATAR_OPTIONS.accessories.watches.length} options)
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {AVATAR_OPTIONS.accessories.watches.map((watch) => (
                    <button
                      key={watch.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, watch: watch.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.accessories.watch === watch.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {watch.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bags */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <ShoppingBag className="mr-2" size={18} />
                  Bags ({AVATAR_OPTIONS.accessories.bags.length} options)
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {AVATAR_OPTIONS.accessories.bags.map((bag) => (
                    <button
                      key={bag.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, bag: bag.value } })}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.accessories.bag === bag.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {bag.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Jewelry */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Jewelry ({AVATAR_OPTIONS.accessories.jewelry.length} options)</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {AVATAR_OPTIONS.accessories.jewelry.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => {
                        const jewelry = avatar.accessories.jewelry.includes(item.value)
                          ? avatar.accessories.jewelry.filter(j => j !== item.value)
                          : [...avatar.accessories.jewelry, item.value];
                        updateAvatar({ accessories: { ...avatar.accessories, jewelry } });
                      }}
                      className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 font-medium text-xs sm:text-sm ${
                        avatar.accessories.jewelry.includes(item.value)
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Hair Color */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <Palette className="mr-2" size={18} />
                  Hair Color
                </h3>
                <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-4">
                  {AVATAR_OPTIONS.hair.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateAvatar({ hair: { ...avatar.hair, color } })}
                      className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full border-4 transition-all duration-200 shadow-lg hover:shadow-xl ${
                        avatar.hair.color === color
                          ? 'border-indigo-500 scale-110 shadow-xl'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      title={`Hair Color: ${color}`}
                    />
                  ))}
                </div>
                
                {/* Custom Hair Color Picker */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Custom Hair Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.hair.color}
                      onChange={(e) => updateAvatar({ hair: { ...avatar.hair, color: e.target.value } })}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border-2 border-gray-300 cursor-pointer shadow-md"
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={avatar.hair.color}
                        onChange={(e) => updateAvatar({ hair: { ...avatar.hair, color: e.target.value } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        placeholder="#8B4513"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Color Pickers */}
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {/* Top Color */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <h4 className="text-sm sm:text-md font-semibold text-gray-700 mb-3">Top Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.clothing.topColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, topColor: e.target.value } })}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border-2 border-gray-300 cursor-pointer shadow-md"
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={avatar.clothing.topColor}
                        onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, topColor: e.target.value } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        placeholder="#4F46E5"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Color */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <h4 className="text-sm sm:text-md font-semibold text-gray-700 mb-3">Bottom Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.clothing.bottomColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, bottomColor: e.target.value } })}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border-2 border-gray-300 cursor-pointer shadow-md"
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={avatar.clothing.bottomColor}
                        onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, bottomColor: e.target.value } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        placeholder="#1F2937"
                      />
                    </div>
                  </div>
                </div>

                {/* Shoe Color */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <h4 className="text-sm sm:text-md font-semibold text-gray-700 mb-3">Shoe Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.clothing.shoeColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, shoeColor: e.target.value } })}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border-2 border-gray-300 cursor-pointer shadow-md"
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={avatar.clothing.shoeColor}
                        onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, shoeColor: e.target.value } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        placeholder="#FFFFFF"
                      />
                    </div>
                  </div>
                </div>

                {/* Eye Color */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <h4 className="text-sm sm:text-md font-semibold text-gray-700 mb-3">Eye Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.facial.eyeColor}
                      onChange={(e) => updateAvatar({ facial: { ...avatar.facial, eyeColor: e.target.value } })}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg border-2 border-gray-300 cursor-pointer shadow-md"
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={avatar.facial.eyeColor}
                        onChange={(e) => updateAvatar({ facial: { ...avatar.facial, eyeColor: e.target.value } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        placeholder="#4F46E5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Color Presets */}
              <div>
                <h4 className="text-sm sm:text-md font-semibold text-gray-700 mb-3">Quick Presets</h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    onClick={() => updateAvatar({
                      clothing: {
                        ...avatar.clothing,
                        topColor: '#4F46E5',
                        bottomColor: '#1F2937',
                        shoeColor: '#FFFFFF'
                      }
                    })}
                    className="p-2 sm:p-3 rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all text-xs sm:text-sm font-medium"
                  >
                    Classic Blue
                  </button>
                  <button
                    onClick={() => updateAvatar({
                      clothing: {
                        ...avatar.clothing,
                        topColor: '#DC2626',
                        bottomColor: '#000000',
                        shoeColor: '#FFFFFF'
                      }
                    })}
                    className="p-2 sm:p-3 rounded-lg border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all text-xs sm:text-sm font-medium"
                  >
                    Bold Red
                  </button>
                  <button
                    onClick={() => updateAvatar({
                      clothing: {
                        ...avatar.clothing,
                        topColor: '#059669',
                        bottomColor: '#374151',
                        shoeColor: '#8B4513'
                      }
                    })}
                    className="p-2 sm:p-3 rounded-lg border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all text-xs sm:text-sm font-medium"
                  >
                    Nature Green
                  </button>
                  <button
                    onClick={() => updateAvatar({
                      clothing: {
                        ...avatar.clothing,
                        topColor: '#7C3AED',
                        bottomColor: '#1F2937',
                        shoeColor: '#000000'
                      }
                    })}
                    className="p-2 sm:p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all text-xs sm:text-sm font-medium"
                  >
                    Royal Purple
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CustomizationPanel;