interface IProps {
  params: {
    id: string;
  };
}

const Hero = ({ params: { id } }: IProps) => {
  return <h2>Hero: {id}</h2>;
};

export default Hero;
