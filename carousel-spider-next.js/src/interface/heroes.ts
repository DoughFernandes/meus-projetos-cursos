interface HeroData {
  id: string;
  name: string;
  universe: string;
  details: {
    fullName: string;
    birdhday: string;
    homeland: string;
    height: number;
    width: number;
  }
};

export default HeroData;