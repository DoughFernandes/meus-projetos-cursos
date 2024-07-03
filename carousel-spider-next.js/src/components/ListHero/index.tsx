import HeroData from "@/interface/heroes";

import "./listHero.module.scss"

interface IProps {
  heroes: HeroData[];
};

const ListHero = ({ heroes }: IProps) => {
  
  return (
    <>
      <h1>Pesonagens</h1>
      <p></p>
    </>
  )
};

export default ListHero;