'use client';

import spiderFont from '@/fonts';
import styles from './heroes.scss';
import { IHeroeData } from '@/interface/heroes';
import HeroPicture from '../HeroPicture';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface IProps {
  heroes: IHeroeData[];
}

const HeroesList = ({ heroes }: IProps) => {
  return (
    <section
      className={`${styles}
      ${spiderFont.className}`}
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        PERSONAGENS
      </motion.h1>

      <motion.div
        className={styles}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
      >
        {heroes.map((hero) => (
          <motion.figure
            key={hero.id}
            className={` ${styles} ${styles[hero.id]}`}
            whileHover={{ scale: 1.3}}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/hero/${hero.id}`}>
              <HeroPicture hero={hero} />
            </Link>
          </motion.figure >
        ))}
      </motion.div>
    </section>
  );
};

export default HeroesList;
