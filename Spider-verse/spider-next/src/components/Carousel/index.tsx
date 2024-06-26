'use client';

import { IHeroeData } from '@/interface/heroes';
import HeroDetails from '../HeroDetails/index';
import HeroPicture from '../HeroPicture/index';

import styles from './carousel.module.scss';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { getItemStyles, enPosition } from './animation';

// ----------------------------------------------

interface IProps {
  heroes: IHeroeData[];
  activedId: string;
  currenHeroID: string;
}

const Carousel = ({ heroes, activedId }: IProps) => {
  const [visibleItems, setvisibleItems] = useState<IHeroeData[] | null>(null);

  const [activeIndex, setactiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activedId),
  );

  useEffect(() => {
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;
    //TODO: Calculo da list de pesonagens, não deixando o index passar da  quantia de personagens.
    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3,
    );
    setvisibleItems(visibleItems);
  }, [heroes, activeIndex]);

  useEffect(() => {
    const htmlEl = document.querySelector('html');

    if (!htmlEl || !visibleItems) return;

    const currenHeroID = visibleItems[enPosition.MIDDLE].id;

    htmlEl.style.backgroundImage = `url('/spiders/${currenHeroID}-background.png')`;

    htmlEl.classList.add('hero-page');

    return () => {
      htmlEl.classList.remove('hero-page');
    };
  }, [visibleItems]);

  const hangleChangeActiveIndex = (newDirection: number) => {
    setactiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if (!visibleItems) return null;

  return (
    <section className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onClick={() => hangleChangeActiveIndex(1)}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, position) => (
              <motion.figure
                key={item.id}
                className={styles.hero}
                initial={{ x: -1500, scale: 0.75 }}
                animate={{ x: 0, ...getItemStyles(position) }}
                exit={{ x: -1500, opacity: 0.8, scale: 1, left: '-20px' }}
                transition={{ duration: 0.8 }}
              >
                <HeroPicture hero={item} />
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <ul className={styles.details}>
        <HeroDetails data={heroes[0]} />
      </ul>
    </section>
  );
};

export default Carousel;
