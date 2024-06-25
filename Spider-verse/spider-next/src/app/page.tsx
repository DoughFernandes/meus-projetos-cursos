import { IHeroeData } from '@/interface/heroes';
import HeroesList from '../components/HeroesList';
import style from './style/page.scss';
import { getHeroesData } from '@/utils/api';


const Home = async () => {
  const heroes = await getHeroesData();

  return (
    <main className={style.main}>
      <HeroesList heroes={heroes} />
    </main>
  );
};

export default Home;
