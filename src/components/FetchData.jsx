import pokemonList from "./Data";

async function fetchPokemonData() {
  const promises = pokemonList.map(
    (pokemon) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => response.json())
        .catch(() => null) // If an error occurs, return null
  );

  try {
    const results = await Promise.all(promises);
    return results.filter((pokemon) => pokemon !== null); // Filter out any null values
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return []; // Return an empty array if there's an error
  }
}
export default fetchPokemonData;
