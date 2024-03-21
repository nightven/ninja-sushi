import { AxiosResponse } from 'axios';

import { IPrice } from '../types';
import { axiosPublic } from './axios.api.config';

export const getPrices = async (): Promise<IPrice[]> => {
  const { data }: AxiosResponse<IPrice[]> = await axiosPublic.get('/price');
  return data;
};
