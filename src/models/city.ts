import IProvince from './province';

export default interface ICity {
  id: number;
  name: string;
  provinceId: IProvince['id'];
  province: IProvince;
}
