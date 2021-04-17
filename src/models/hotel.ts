import ICity from './city';

export default interface IHotel {
  id: number;
  name: string;
  city: ICity;
  location: string;
  imageUri: string;
  rating: number;
  price: number;
  facilities: string[];
}
