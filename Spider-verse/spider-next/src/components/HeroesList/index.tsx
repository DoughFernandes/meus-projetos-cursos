import spiderFont from '@/fonts';
import styles from './heroes.scss';

import { IHeroeData } from '@/interface/heroes';
import HeroPicture from '../HeroPicture';

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

      <div className={styles} >

        {heroes.map(hero =>(
          <figure
            key={hero.id} 
            className={` ${styles} ${styles[hero.id]}`}
          >
            <HeroPicture
              hero={hero}
            />
          </figure>
        ))}

      </div>

    </section>
  );
};

export default HeroesList;
