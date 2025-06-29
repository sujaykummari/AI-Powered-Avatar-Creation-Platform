import { AvatarOptions } from '../types/avatar';

export const DEFAULT_AVATAR: AvatarOptions = {
  base: {
    gender: 'male',
    skinTone: '#F4C2A1'
  },
  hair: {
    style: 'short',
    color: '#8B4513'
  },
  clothing: {
    top: 'tshirt',
    bottom: 'jeans',
    shoes: 'sneakers',
    topColor: '#4F46E5',
    bottomColor: '#1F2937',
    shoeColor: '#FFFFFF'
  },
  accessories: {
    glasses: 'none',
    hat: 'none',
    jewelry: [],
    watch: 'none',
    bag: 'none'
  },
  facial: {
    eyeColor: '#4F46E5',
    eyebrows: 'normal',
    facial_hair: 'none'
  }
};

export const AVATAR_OPTIONS = {
  base: {
    genders: ['male', 'female'],
    skinTones: [
      '#FFDBAC', // Light
      '#F4C2A1', // Fair
      '#E8B887', // Medium Light
      '#D2B48C', // Medium
      '#C19A6B', // Medium Dark
      '#A0522D', // Dark
      '#8B4513', // Deep
      '#654321', // Rich
      '#4A2C2A'  // Deep Rich
    ]
  },
  hair: {
    styles: [
      { name: 'Buzz Cut', value: 'buzz' },
      { name: 'Short', value: 'short' },
      { name: 'Medium', value: 'medium' },
      { name: 'Long', value: 'long' },
      { name: 'Curly Short', value: 'curly_short' },
      { name: 'Curly Long', value: 'curly_long' },
      { name: 'Wavy', value: 'wavy' },
      { name: 'Straight Long', value: 'straight_long' },
      { name: 'Bob Cut', value: 'bob' },
      { name: 'Pixie Cut', value: 'pixie' },
      { name: 'Ponytail', value: 'ponytail' },
      { name: 'Braids', value: 'braids' },
      { name: 'Afro', value: 'afro' },
      { name: 'Dreadlocks', value: 'dreadlocks' },
      { name: 'Bald', value: 'bald' }
    ],
    colors: [
      '#000000', // Black
      '#2C1810', // Dark Brown
      '#8B4513', // Brown
      '#D2691E', // Light Brown
      '#DEB887', // Blonde
      '#F0E68C', // Light Blonde
      '#FFD700', // Golden
      '#FF4500', // Auburn
      '#DC143C', // Red
      '#800080', // Purple
      '#0000FF', // Blue
      '#008000', // Green
      '#FF69B4', // Pink
      '#C0C0C0', // Silver
      '#FFFFFF'  // White
    ]
  },
  clothing: {
    male: {
      tops: [
        { name: 'T-Shirt', value: 'tshirt' },
        { name: 'Polo Shirt', value: 'polo' },
        { name: 'Dress Shirt', value: 'dress_shirt' },
        { name: 'Hoodie', value: 'hoodie' },
        { name: 'Sweater', value: 'sweater' },
        { name: 'Tank Top', value: 'tank' },
        { name: 'Blazer', value: 'blazer' },
        { name: 'Jacket', value: 'jacket' },
        { name: 'Cardigan', value: 'cardigan' },
        { name: 'Vest', value: 'vest' },
        { name: 'Flannel', value: 'flannel' },
        { name: 'Henley', value: 'henley' },
        { name: 'Button Down', value: 'button_down' },
        { name: 'Turtleneck', value: 'turtleneck' },
        { name: 'Jersey', value: 'jersey' }
      ],
      bottoms: [
        { name: 'Jeans', value: 'jeans' },
        { name: 'Chinos', value: 'chinos' },
        { name: 'Shorts', value: 'shorts' },
        { name: 'Dress Pants', value: 'dress_pants' },
        { name: 'Cargo Pants', value: 'cargo' },
        { name: 'Sweatpants', value: 'sweatpants' },
        { name: 'Track Pants', value: 'track_pants' },
        { name: 'Khakis', value: 'khakis' },
        { name: 'Joggers', value: 'joggers' },
        { name: 'Board Shorts', value: 'board_shorts' },
        { name: 'Swim Trunks', value: 'swim_trunks' },
        { name: 'Suit Pants', value: 'suit_pants' },
        { name: 'Corduroy', value: 'corduroy' },
        { name: 'Linen Pants', value: 'linen_pants' },
        { name: 'Leather Pants', value: 'leather_pants' }
      ]
    },
    female: {
      tops: [
        { name: 'T-Shirt', value: 'tshirt' },
        { name: 'Blouse', value: 'blouse' },
        { name: 'Tank Top', value: 'tank' },
        { name: 'Crop Top', value: 'crop_top' },
        { name: 'Sweater', value: 'sweater' },
        { name: 'Cardigan', value: 'cardigan' },
        { name: 'Hoodie', value: 'hoodie' },
        { name: 'Blazer', value: 'blazer' },
        { name: 'Camisole', value: 'camisole' },
        { name: 'Tube Top', value: 'tube_top' },
        { name: 'Off-Shoulder', value: 'off_shoulder' },
        { name: 'Halter Top', value: 'halter' },
        { name: 'Wrap Top', value: 'wrap_top' },
        { name: 'Bodysuit', value: 'bodysuit' },
        { name: 'Kimono', value: 'kimono' }
      ],
      bottoms: [
        { name: 'Jeans', value: 'jeans' },
        { name: 'Skirt', value: 'skirt' },
        { name: 'Dress', value: 'dress' },
        { name: 'Shorts', value: 'shorts' },
        { name: 'Leggings', value: 'leggings' },
        { name: 'Palazzo Pants', value: 'palazzo' },
        { name: 'Pencil Skirt', value: 'pencil_skirt' },
        { name: 'Maxi Skirt', value: 'maxi_skirt' },
        { name: 'Mini Skirt', value: 'mini_skirt' },
        { name: 'Culottes', value: 'culottes' },
        { name: 'Wide Leg Pants', value: 'wide_leg' },
        { name: 'Skinny Jeans', value: 'skinny_jeans' },
        { name: 'High Waist Jeans', value: 'high_waist_jeans' },
        { name: 'Flare Pants', value: 'flare_pants' },
        { name: 'Jumpsuit', value: 'jumpsuit' }
      ]
    },
    shoes: [
      { name: 'Sneakers', value: 'sneakers' },
      { name: 'Boots', value: 'boots' },
      { name: 'Sandals', value: 'sandals' },
      { name: 'Heels', value: 'heels' },
      { name: 'Loafers', value: 'loafers' },
      { name: 'Flats', value: 'flats' },
      { name: 'Oxfords', value: 'oxfords' },
      { name: 'Ankle Boots', value: 'ankle_boots' },
      { name: 'High Heels', value: 'high_heels' },
      { name: 'Wedges', value: 'wedges' },
      { name: 'Flip Flops', value: 'flip_flops' },
      { name: 'Converse', value: 'converse' },
      { name: 'Running Shoes', value: 'running_shoes' },
      { name: 'Dress Shoes', value: 'dress_shoes' },
      { name: 'Combat Boots', value: 'combat_boots' }
    ]
  },
  accessories: {
    glasses: [
      { name: 'None', value: 'none' },
      { name: 'Round Glasses', value: 'round' },
      { name: 'Square Glasses', value: 'square' },
      { name: 'Cat Eye Glasses', value: 'cat_eye' },
      { name: 'Aviator Sunglasses', value: 'aviator' },
      { name: 'Wayfarer Sunglasses', value: 'wayfarer' },
      { name: 'Round Sunglasses', value: 'round_sunglasses' },
      { name: 'Oversized Sunglasses', value: 'oversized' },
      { name: 'Sports Glasses', value: 'sports' },
      { name: 'Reading Glasses', value: 'reading' }
    ],
    hats: [
      { name: 'None', value: 'none' },
      { name: 'Baseball Cap', value: 'cap' },
      { name: 'Beanie', value: 'beanie' },
      { name: 'Fedora', value: 'fedora' },
      { name: 'Sun Hat', value: 'sun_hat' },
      { name: 'Beret', value: 'beret' },
      { name: 'Bucket Hat', value: 'bucket' },
      { name: 'Snapback', value: 'snapback' },
      { name: 'Cowboy Hat', value: 'cowboy' },
      { name: 'Headband', value: 'headband' },
      { name: 'Bandana', value: 'bandana' },
      { name: 'Visor', value: 'visor' }
    ],
    jewelry: [
      { name: 'Necklace', value: 'necklace' },
      { name: 'Earrings', value: 'earrings' },
      { name: 'Bracelet', value: 'bracelet' },
      { name: 'Ring', value: 'ring' },
      { name: 'Chain', value: 'chain' },
      { name: 'Pendant', value: 'pendant' },
      { name: 'Choker', value: 'choker' },
      { name: 'Anklet', value: 'anklet' },
      { name: 'Nose Ring', value: 'nose_ring' },
      { name: 'Stud Earrings', value: 'stud_earrings' },
      { name: 'Hoop Earrings', value: 'hoop_earrings' },
      { name: 'Tennis Bracelet', value: 'tennis_bracelet' }
    ],
    watches: [
      { name: 'None', value: 'none' },
      { name: 'Digital Watch', value: 'digital' },
      { name: 'Analog Watch', value: 'analog' },
      { name: 'Smart Watch', value: 'smart' },
      { name: 'Sports Watch', value: 'sports' },
      { name: 'Luxury Watch', value: 'luxury' },
      { name: 'Vintage Watch', value: 'vintage' }
    ],
    bags: [
      { name: 'None', value: 'none' },
      { name: 'Backpack', value: 'backpack' },
      { name: 'Handbag', value: 'handbag' },
      { name: 'Crossbody Bag', value: 'crossbody' },
      { name: 'Tote Bag', value: 'tote' },
      { name: 'Clutch', value: 'clutch' },
      { name: 'Messenger Bag', value: 'messenger' },
      { name: 'Fanny Pack', value: 'fanny_pack' },
      { name: 'Duffel Bag', value: 'duffel' }
    ]
  }
};