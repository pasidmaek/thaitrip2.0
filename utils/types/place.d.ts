declare global {
 type PlaceDataType = {
  address_components: any[];
  id: object;
  geometryModel: any;
  name: string;
  photos: any[];
  types: string[];
  url: string;
  website: string;
  users_save: string[];
  users_like: string[];
  users_review: any[];
  place_id: string;
  formatted_address: string;
  formatted_phone_number: string;
  opening_hours: {
   periods: string[];
   weekday_text: string[];
   open_now: boolean;
  };
  geometry: {
   location: {
    lat: number;
    lng: number;
   };
   viewport?: {
    northeast?: {
     lat: number;
     lng: number;
    };
    southwest?: {
     lat: number;
     lng: number;
    };
   };
  };
  rating: number;
  vicinity?: string;
  price_level: number;
 };

 type ReviewType = {
  id: string;
  user: {
   lastName: any;
   firstName: any;
   username: string;
  };
  createDate: string;
  comment: string;
  rating: number;
 };

 type ReviewFormType = {
  rating: number;
  review: string;
 };

 type PlaceParamType = {
  place_id: string;
 };
}

export { PlaceDataType, ReviewType, ReviewFormType, PlaceParamType };
