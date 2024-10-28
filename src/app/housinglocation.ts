export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  postalCode: number;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
