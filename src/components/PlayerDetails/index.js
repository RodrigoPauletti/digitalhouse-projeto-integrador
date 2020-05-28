import React from "react";

import {
  PlayerDetailsContainer,
  PlayerImageRounded,
  PlayerImageRoundedSmaller,
  PlayerName,
} from "./styles";

import { SmallBarCentered } from "../../styles";
import { colors } from "../../variables";

export default function PlayerDetails({ image, name, winner, color }) {
  return (
    <PlayerDetailsContainer>
      {winner ? (
        <PlayerImageRounded src={image} />
      ) : (
        <PlayerImageRoundedSmaller src={image} />
      )}
      <PlayerName>{name}</PlayerName>
      <SmallBarCentered color={color ?? colors.yellow} />
    </PlayerDetailsContainer>
  );
}
