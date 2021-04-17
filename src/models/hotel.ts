import ILocation from './location';

export default interface IHotel {
  id: number;
  name: string;
  location: ILocation;
  imageUri: string;
  rating: number;
  description: string;
  price: number;
}
