import styles from './heroes.scss';
import spiderFont from '@/fonts';
import { IHeroeData } from '@/interface/heroes';

interface IProps {
  heroes: IHeroeData[];
}

const HeroesList = ({ heroes }: IProps) => {
  return (
    <section
      className={`${styles}
      ${spiderFont.className}`}
    >
      <h1>PERSONAGENS</h1>
    </section>
  );
};

export default HeroesList;
