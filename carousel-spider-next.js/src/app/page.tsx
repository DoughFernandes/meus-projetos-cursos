import React from 'react';
import ListHero from "@/components/ListHero";
import useHeroes from "@/hooks/getHeros";

const Home = () => {
  const { dataHeroes }: any = useHeroes;
  console.log(dataHeroes);

  return (
    <main>
      <ListHero heroes={dataHeroes}/>     
    </main>
  );
}

export default Home;
