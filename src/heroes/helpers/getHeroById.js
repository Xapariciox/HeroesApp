import { heroes } from "../data/heroes-data";

export const getHeroById = (id) => {
  // console.log("hero buscado");
  return heroes.find((hero) => hero.id === id);
};
