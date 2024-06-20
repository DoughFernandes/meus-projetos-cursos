import '@/components/HeroesList';
import { IHeroesData } from '@/interface/heroes';

interface IProps {
  heroes: IHeroesData[];
};

const HeroesList = ({ heroes }: IProps) => {
  return (
    <>
      {heroes.map((hero) => (
        <p key={hero.id}>
          {hero.name}
        </p>
      ))}
    </>
  );
};

export default HeroesList;
