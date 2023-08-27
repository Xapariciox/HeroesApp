import { heroes } from "../data/heroes-data";

export const getHeroesByName = (name = "") => {
  name.toLowerCase().trim();
  if (name.length === 0) {
    return [];
  }
  console.log("hola");
  const heroesFiltered = heroes.filter((item) =>
    item.superhero.toLocaleLowerCase().includes(name)
  );
  return heroesFiltered;
};
