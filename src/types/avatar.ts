export interface AvatarOptions {
  base: {
    gender: 'male' | 'female';
    skinTone: string;
  };
  hair: {
    style: string;
    color: string;
  };
  clothing: {
    top: string;
    bottom: string;
    shoes: string;
    topColor: string;
    bottomColor: string;
    shoeColor: string;
  };
  accessories: {
    glasses: string;
    hat: string;
    jewelry: string[];
    watch: string;
    bag: string;
  };
  facial: {
    eyeColor: string;
    eyebrows: string;
    facial_hair: string;
  };
}

export interface UserSession {
  id: string;
  email: string;
  accessStartTime: number;
  accessEndTime: number;
  isActive: boolean;
}

export interface PaymentInfo {
  amount: number;
  currency: string;
  duration: number; // in hours
}