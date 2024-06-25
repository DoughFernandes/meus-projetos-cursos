import { IHeroeData } from '@/interface/heroes';
import HeroesList from '../components/HeroesList';
import style from './style/page.scss';

async function getHeroesList(): Promise<IHeroeData[]> {
  const res  = await fetch(`${process.env.DOMAIN_ORIGIN}/data`);
  const data = await res.json();
  // const res = await axios.get(`${process.env.DOMAIN_ORIGIN}/data`);

  if (!data) {
    throw new Error('FAILED TO REQUEST FROM DOMAIN');
  }

  return data;
}

const Home = async () => {
  const heroes = await getHeroesList();

  return (
    <main className={style.main}>
      <HeroesList heroes={heroes} />
    </main>
  );
};

export default Home;
