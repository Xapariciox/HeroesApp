import { HeroesList } from "../components/HeroesList";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="pt-2">Marvel Comics</h1>

      <hr />

      <HeroesList publisher={"Marvel Comics"} />
    </>
  );
};
