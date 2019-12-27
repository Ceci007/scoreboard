import React, { Fragment } from "react";
import { Consumer } from "./context";
import Player from "./Player";

const PlayerList = () => {
  return (
    <Consumer>
      {({ players, actions }) => {
        const highScore = actions.isHighScore;

        return (
          <Fragment>
            {players.map((player, index) => (
              <Player
                key={player.id.toString()}
                index={index}
                isHighScore={highScore === player.score}
              />
            ))}
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default PlayerList;
