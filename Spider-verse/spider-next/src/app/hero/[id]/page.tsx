import Carousel from "@/components/Carousel";
import { getHeroesData } from "@/utils/api";

interface IProps {
  params: {
    id: string;
  };
}

const Hero = async ({ params: { id } }: IProps) => {
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes} activedId={id} />;
};

export default Hero;
