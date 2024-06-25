import spiderFont from '@/fonts';
import { IHeroeData } from '@/interface/heroes';
import styles from './heroDetails.module.scss';
import { Quicksand } from 'next/font/google';
import Image from 'next/image';

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ['400', '600', '700']
});

interface IProps {
  data: IHeroeData;
}

const HeroDetails = ({ data }: IProps) => {
  const { name, universe, details, id } = data;

  return (
    <section className={quicksand.className}>
      <h1 className={`${spiderFont.className} ${styles.title}`}>
        {name}
        (Universe - {universe})
      </h1>
      <section className={styles.details}>
        <h2 className={styles.subtitle}>
          Informações
        </h2>
        <table className={styles.table}>
          <tr>
            <td className={styles.label}>Nome Completo</td>
            <td>{details.fullName}</td>
          </tr>
          <tr>
            <td className={styles.label}>Data de Nascimento</td>
            <td>{new Date(details.birthday).toLocaleDateString("pt-BR")}</td>
          </tr>
          <tr>
            <td className={styles.label}>Terra Natal</td>
            <td>{details.homeland}</td>
          </tr>
          <tr>
            <td className={styles.label}>Altura</td>
            <td>{details.height.toFixed(2)}m</td>
          </tr>
          <tr>
            <td className={styles.label}>Peso</td>
            <td>{details.weight.toFixed(2)}kg</td>
          </tr>
        </table>
      </section>
      <section className={styles.details}>
        <h2 className={styles.subtitles}>
          Primeira Aparição
        </h2>
        <Image 
          src={`../../../public/spiders/${id}-commic-book.png`}
          alt={`Prmeira Aparição nos quadrinhos de ${name} no universo ${universe}`}
          width={80}
          height={122}
        />
      </section>
    </section>
  );
};

export default HeroDetails;
