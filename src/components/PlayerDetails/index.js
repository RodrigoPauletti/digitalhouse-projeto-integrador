import React from "react";

import {
  PlayerDetailsContainer,
  PlayerImageRounded,
  PlayerImageRoundedSmaller,
  PlayerName,
} from "./styles";

export default function PlayerDetails({ image, name, winner }) {
  return (
    <PlayerDetailsContainer>
      {winner ? (
        <PlayerImageRounded src={image} />
      ) : (
        <PlayerImageRoundedSmaller src={image} />
      )}
      <PlayerName>{name}</PlayerName>
    </PlayerDetailsContainer>
  );
}
