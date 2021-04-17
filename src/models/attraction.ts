import ICity from './city';

export default interface IAttraction {
  id: number;
  name: string;
  location: ICity;
  imageUri: string;
  rating: number;
  description: string;
  price: number;
}
