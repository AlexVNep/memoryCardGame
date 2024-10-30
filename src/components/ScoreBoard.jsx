import Score from "./Score";
import BestScore from "./BestScore";

function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div>
      <Score score={currentScore} />
      <BestScore highScore={bestScore} />
    </div>
  );
}

export default ScoreBoard;
