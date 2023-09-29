import { AnimatedLink } from "../helpers/AnimatedLink";
export const HeroCard = ({
  id,
  superhero,
  getHeroesByPublishers,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `../assets/heroes/${id}.jpg`;

  return (
    <>
      <div className={`col img `}>
        <div className="card"></div>
        <div className="row no-gutters">
          <div className="col-4 ">
            <img
              src={heroImageUrl}
              alt={superhero}
              className={`card-img ${id}`}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p>{characters !== alter_ego && characters}</p>
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <AnimatedLink to={`/hero/${id}`}>More info</AnimatedLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
