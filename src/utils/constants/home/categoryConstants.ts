import { IcStay, IcPackages, IcFlights, IcActivity } from '@assets/svg';

export const CATEGORY_DATA = [
  { label: "숙소", icon: IcStay, isActive: true },
  { label: "항공 + 숙소", icon: IcPackages, isActive: false },
  { label: "항공", icon: IcFlights, isActive: false }, 
  { label: "즐길 거리", icon: IcActivity, isActive: false } 
];
