export const PokemonList = ({ pokemons }) => {
  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <p>{pokemon.name}</p>
          <a href={pokemon.url} target="_blank">
            {pokemon.url}
          </a>
        </li>
      ))}
    </ul>
  );
};
