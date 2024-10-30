import { useState, useEffect } from "react";
import pokemonList from "./Data";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";

function PlaySection() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const promises = pokemonList.map((pokemon) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then(
          (response) => response.json()
        )
      );

      try {
        const results = await Promise.all(promises);
        const shuffledResults = shuffle(results); // Shuffle before updating state
        setPokemonData(shuffledResults);
        console.log(results);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
    return setIsClicked(false);
  }, [isClicked]);

  const handleClick = (name) => {
    console.log(name);
    setIsClicked(true);
    setCurrentScore(currentScore + 1);
  };

  return (
    <>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      {pokemonData.map((pokemon) => {
        return (
          <Card
            key={JSON.stringify(pokemon.id)}
            onClick={() => handleClick(pokemon.name)}
            name={pokemon.name.toUpperCase()}
            alt={JSON.stringify(pokemon.name)}
            url={pokemon.sprites.front_default}
          />
        );
      })}
    </>
  );
}

export default PlaySection;
