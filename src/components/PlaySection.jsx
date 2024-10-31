import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import fetchPokemonData from "./FetchData";

function PlaySection() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const checkListRef = useRef([]); // Using useRef to persist checkList across renders

  useEffect(() => {
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    async function fetchData() {
      const results = await fetchPokemonData(); //fetch data here
      setPokemonData(shuffle(results));
    }

    fetchData();
    return setIsClicked(false);
  }, [isClicked]);

  const handleClick = (name) => {
    if (!checkListRef.current.includes(name)) {
      checkListRef.current.push(name);
      console.log(checkListRef.current);
      setIsClicked(true);
      setCurrentScore(currentScore + 1);
      if (currentScore >= bestScore) {
        setBestScore(bestScore + 1);
      }
      if (checkListRef.current.length === 12) {
        console.log("You win");
        setCurrentScore(0);
      }
    } else {
      checkListRef.current = [];
      setCurrentScore(0);
      console.log("Already clicked:", name);
    }
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
