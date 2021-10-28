import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { PokemonList } from "../components/PokemonList";

const DEFAULT_API_DATA = {
  results: [],
  count: 0,
  next: "",
  previous: "",
};

const ROWS_PER_PAGE = 20;

export const Pokedex = () => {
  const [{ next, previous, count, results }, setApiData] =
    useState(DEFAULT_API_DATA);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);

  async function pageRequest(url, page = 0) {
    setLoading(true);
    const data = await fetch(url);
    const dataResponse = await data.json();
    setActivePage((activePage) => activePage + page);
    setApiData(dataResponse);
    setLoading(false);
  }

  useEffect(() => {
    pageRequest(`${process.env.REACT_APP_BASE_URL}api/v2/pokemon/`);
  }, []);

  function renderNextData() {
    pageRequest(next, 1);
  }

  async function renderPreviousData() {
    pageRequest(previous, -1);
  }

  const totalPages = Math.ceil(count / ROWS_PER_PAGE);

  return (
    <>
      <h1> Pokedex </h1>
      <PokemonList pokemons={results} />
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onNext={renderNextData}
        onPrevious={renderPreviousData}
        loading={loading}
      />
    </>
  );
};
