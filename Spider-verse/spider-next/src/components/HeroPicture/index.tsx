import { IHeroeData } from "@/interface/heroes";
import Image, { StaticImageData } from "next/image";

import Spider616 from '@public/spiders/spider-man-616.png';
import Spider65 from '@public/spiders/mulher-aranha-65.png';
import Spider1610 from '@public/spiders/spider-man-1610.png';
import sp14512 from '@public/spiders/sp-dr-14512.png';
import spider8311 from '@public/spiders/spider-ham-8311.png';
import spider90214 from '@public/spiders/spider-man-90214.png';
import spider928 from '@public/spiders/spider-man-928.png';

const heroesImage: Record<string, StaticImageData> = {
  "spider-man-616": Spider616,
  "spider-woman-65": Spider65,
  "spider-man-1610": Spider1610,
  "sp-dr-14512": sp14512,
  "spider-ham-8311": spider8311,
  "spider-man-90214": spider90214,
  "spider-man-928": spider928,
};

interface IProps {
  hero: IHeroeData
}

const HeroPicture = ({ hero }: IProps) => {
  return (
    <Image
      src={heroesImage[hero.id]}
      alt={`${hero.name} (Universe-${hero.universe})`}
      priority
    />
  )
};

export default HeroPicture;