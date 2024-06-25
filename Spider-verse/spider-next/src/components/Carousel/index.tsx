import { IHeroeData } from "@/interface/heroes";
import HeroDetails from '../HeroDetails/index';

interface IProps {
  heroes: IHeroeData[];
  activedId: string;
};

const Carousel = ({ heroes, activedId }: IProps) => {
  return (
    <>
      <h2>CAROUSEL: {activedId}</h2>
      <HeroDetails data={heroes[0]} />
    </>
  )
};

export default Carousel;