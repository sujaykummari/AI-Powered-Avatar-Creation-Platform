import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Shirt, User, Glasses, Watch, ShoppingBag } from 'lucide-react';
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
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-b-3 border-indigo-600 bg-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-white hover:bg-opacity-50'
              }`}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6 h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'base' && (
            <div className="space-y-8">
              {/* Gender Selection */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <User className="mr-2" size={20} />
                  Gender
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {AVATAR_OPTIONS.base.genders.map((gender) => (
                    <button
                      key={gender}
                      onClick={() => updateAvatar({ base: { ...avatar.base, gender: gender as any } })}
                      className={`p-4 rounded-xl border-2 capitalize transition-all duration-200 font-medium ${
                        avatar.base.gender === gender
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md transform scale-105'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {gender === 'male' ? '👨' : '👩'} {gender}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin Tone Selection */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Skin Tone</h3>
                <div className="grid grid-cols-3 gap-4">
                  {AVATAR_OPTIONS.base.skinTones.map((tone, index) => (
                    <button
                      key={tone}
                      onClick={() => updateAvatar({
                        base: { ...avatar.base, skinTone: tone }
                      })}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center space-y-2 transition-all duration-200 ${
                        avatar.base.skinTone === tone
                          ? 'border-indigo-500 bg-indigo-50 shadow-md transform scale-105'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: tone }}
                      ></div>
                      <span className="text-xs font-medium text-gray-600">Tone {index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Style */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Hair Style</h3>
                <div className="grid grid-cols-2 gap-3">
                  {AVATAR_OPTIONS.hair.styles.map((style) => (
                    <button
                      key={style.value}
                      onClick={() => updateAvatar({ hair: { ...avatar.hair, style: style.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
            <div className="space-y-8">
              {/* Tops */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Shirt className="mr-2" size={20} />
                  Tops
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {getCurrentClothingOptions().tops.map((top) => (
                    <button
                      key={top.value}
                      onClick={() => updateAvatar({ clothing: { ...avatar.clothing, top: top.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
                <h3 className="text-lg font-bold text-gray-800 mb-4">Bottoms</h3>
                <div className="grid grid-cols-2 gap-3">
                  {getCurrentClothingOptions().bottoms.map((bottom) => (
                    <button
                      key={bottom.value}
                      onClick={() => updateAvatar({ clothing: { ...avatar.clothing, bottom: bottom.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
                <h3 className="text-lg font-bold text-gray-800 mb-4">Shoes</h3>
                <div className="grid grid-cols-2 gap-3">
                  {AVATAR_OPTIONS.clothing.shoes.map((shoe) => (
                    <button
                      key={shoe.value}
                      onClick={() => updateAvatar({ clothing: { ...avatar.clothing, shoes: shoe.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
            <div className="space-y-8">
              {/* Glasses */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Glasses className="mr-2" size={20} />
                  Glasses
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {AVATAR_OPTIONS.accessories.glasses.map((glasses) => (
                    <button
                      key={glasses.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, glasses: glasses.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
                <h3 className="text-lg font-bold text-gray-800 mb-4">Hats</h3>
                <div className="grid grid-cols-2 gap-3">
                  {AVATAR_OPTIONS.accessories.hats.map((hat) => (
                    <button
                      key={hat.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, hat: hat.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Watch className="mr-2" size={20} />
                  Watches
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {AVATAR_OPTIONS.accessories.watches.map((watch) => (
                    <button
                      key={watch.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, watch: watch.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <ShoppingBag className="mr-2" size={20} />
                  Bags
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {AVATAR_OPTIONS.accessories.bags.map((bag) => (
                    <button
                      key={bag.value}
                      onClick={() => updateAvatar({ accessories: { ...avatar.accessories, bag: bag.value } })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
                <h3 className="text-lg font-bold text-gray-800 mb-4">Jewelry</h3>
                <div className="grid grid-cols-2 gap-3">
                  {AVATAR_OPTIONS.accessories.jewelry.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => {
                        const jewelry = avatar.accessories.jewelry.includes(item.value)
                          ? avatar.accessories.jewelry.filter(j => j !== item.value)
                          : [...avatar.accessories.jewelry, item.value];
                        updateAvatar({ accessories: { ...avatar.accessories, jewelry } });
                      }}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 font-medium ${
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
            <div className="space-y-8">
              {/* Hair Color */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Palette className="mr-2" size={20} />
                  Hair Color
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {AVATAR_OPTIONS.hair.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateAvatar({ hair: { ...avatar.hair, color } })}
                      className={`w-14 h-14 rounded-full border-4 transition-all duration-200 shadow-lg hover:shadow-xl ${
                        avatar.hair.color === color
                          ? 'border-indigo-500 scale-110 shadow-xl'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      title={`Hair Color: ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Custom Color Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Top Color */}
                <div>
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Top Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.clothing.topColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, topColor: e.target.value } })}
                      className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={avatar.clothing.topColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, topColor: e.target.value } })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="#4F46E5"
                    />
                  </div>
                </div>

                {/* Bottom Color */}
                <div>
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Bottom Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.clothing.bottomColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, bottomColor: e.target.value } })}
                      className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={avatar.clothing.bottomColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, bottomColor: e.target.value } })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="#1F2937"
                    />
                  </div>
                </div>

                {/* Shoe Color */}
                <div>
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Shoe Color</h4>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={avatar.clothing.shoeColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, shoeColor: e.target.value } })}
                      className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={avatar.clothing.shoeColor}
                      onChange={(e) => updateAvatar({ clothing: { ...avatar.clothing, shoeColor: e.target.value } })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="#FFFFFF"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Color Presets */}
              <div>
                <h4 className="text-md font-semibold text-gray-700 mb-3">Quick Presets</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => updateAvatar({
                      clothing: {
                        ...avatar.clothing,
                        topColor: '#4F46E5',
                        bottomColor: '#1F2937',
                        shoeColor: '#FFFFFF'
                      }
                    })}
                    className="p-3 rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
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
                    className="p-3 rounded-lg border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all"
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
                    className="p-3 rounded-lg border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all"
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
                    className="p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all"
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