import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";
import { flushSync } from "react-dom";

export const HeroPage = () => {
  const { id, ...rest } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const heroImageUrl = `../assets/heroes/${id}.jpg`;
  const navigate = useNavigate();
  const onNavigateBack = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        navigate("/marvel");
      });
    });
  };
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img
          src={`${heroImageUrl}`}
          alt={hero.superhero}
          className={`img-thumbnail ${id}`}
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3"> Characters</h5>

        <p>{hero.characters}</p>

        <button
          onClick={() => onNavigateBack()}
          className="btn btn-outline-primary"
        >
          Return
        </button>
      </div>
    </div>
  );
};
