import { IHeroesData } from '@/interface/heroes';
import axios from 'axios';

const getHeroesData = async (): Promise<{ data: IHeroesData[] }> => {
  try {
    const res = await axios.get(`${process.env.DOMAIN_ORIGIN}`);
    return res.data;
  } catch (error) {
    console.error('Failed to request heroes list', error);
    throw new Error('Failed to request heroes list');
  }
};

export default getHeroesData;
