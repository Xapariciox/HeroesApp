import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/heroCard";
import { useEffect, useState } from "react";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [heroesFiltrados, setHeroesFiltrados] = useState([]);

  const { q = "" } = queryString.parse(location.search);

  useEffect(() => {
    setHeroesFiltrados(getHeroesByName(q));
  }, [q]);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    const searchTextClean = searchText.toLowerCase().trim();
    navigate(`?q=${searchTextClean}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              id=""
              className="form-control"
              placeholder="search a hero"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7 mt-5">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroesFiltrados.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )}

          {heroesFiltrados.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
