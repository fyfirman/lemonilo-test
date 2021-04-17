import ICity from './city';

export default interface IAttraction {
  id: number;
  name: string;
  city: ICity;
  location: string;
  imageUri: string;
  rating: number;
  numberOfReview: number;
  highlight: string[];
  price: number;
}
