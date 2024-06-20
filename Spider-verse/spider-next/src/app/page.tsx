import HeroesList from '../components/HeroesList';
import getHeroesData from '@/app/api/res/res';

const Home = async () => {
  const heroes = await getHeroesData();

  return (
    <main>
      <HeroesList heroes={heroes.data} />
    </main>
  );
};

export default Home;

