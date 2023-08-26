import { HeroesList } from "../components/HeroesList/";

export const DcPage = () => {
  return (
    <>
      <h1 className="pt-2">DC Comics</h1>

      <hr />

      <HeroesList publisher={"DC Comics"} />
    </>
  );
};
