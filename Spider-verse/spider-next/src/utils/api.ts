import { IHeroeData } from "@/interface/heroes";

export const getHeroesData = async (): Promise<IHeroeData[]> => {
  try {
    const response = await fetch(`${process.env.DOMAIN_ORIGIN}/data`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data: IHeroeData[] = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching heroes data:", error);
    throw error;
  }
};
