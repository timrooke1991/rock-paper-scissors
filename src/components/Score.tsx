
import React, { FunctionComponent } from 'react'; // we need this to make JSX compile

interface ScoreProps {
  score: number
}

export const Score: FunctionComponent<ScoreProps> = ({ score }) => {
  return (
    <div className="Score-tile">
      <p className="Score-label Score-color">SCORE</p>
      <p className="Score Dark-color">{score}</p>
    </div>
  )
}
