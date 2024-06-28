'use client';

import { IHeroeData } from '@/interface/heroes';
import HeroDetails from '../HeroDetails/index';
import HeroPicture from '../HeroPicture/index';

import styles from './carousel.module.scss';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import useAudioResources from './songs';

import { 
  getItemStyles, 
  enPosition
} from './animation';

// ----------------------------------------------

interface IProps {
  heroes: IHeroeData[];
  activedId: string;
  currenHeroID: string;
}

const Carousel = ({ heroes, activedId }: IProps) => {
  const [visibleItems, setvisibleItems] = useState<IHeroeData[] | null>(null);

  const [activeIndex, setactiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activedId) - 1,
  );

  const [startInteractionPosition, setStartInteractionPosition] = useState<number>(0);

  useEffect(() => {
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;
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

  const { voicesAudio, transitionAudios } = useAudioResources(visibleItems, enPosition);

  const hangleChangeActiveIndex = (newDirection: number) => {
    setactiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  const handleChangeDragTouch = (clientX: number) => {
    const endInteractionPosition = clientX;
    const difPositions = endInteractionPosition - startInteractionPosition;
  
    const newPOsition = difPositions > 0 ? -1 : 1;
    
    hangleChangeActiveIndex(newPOsition);
  };
  
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartInteractionPosition(e.touches[0].clientX)
  };
  
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if(!setStartInteractionPosition) return;

    handleChangeDragTouch(e.changedTouches[0].clientX);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setStartInteractionPosition(e.clientX)
  };
  
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>)=>{
    if(!setStartInteractionPosition) return;    
    handleChangeDragTouch(e.clientX);
  };


  if (!visibleItems) return null;

  return (
    <section className={styles.container}>
      <div className={styles.carousel}>
        <div
          className={styles.wrapper}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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

      <motion.ul
        className={styles.details}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        animate={{ opacity: 1 }}
      >
        <HeroDetails data={visibleItems[enPosition.MIDDLE]} />
      </motion.ul>
    </section>
  );
};

export default Carousel;
