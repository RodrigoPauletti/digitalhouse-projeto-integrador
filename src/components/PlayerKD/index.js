import React from "react";

import {
  PlayerKDText,
  PlayerKDTextIcon,
  PlayerKDVersusContainer,
  PlayerKDVersusItem,
} from "./styles";

import {
  GraphicContainer,
  GraphicIcon,
  GraphicTitle,
  GraphicCount,
} from "../../styles";

import playerTarget from "../../assets/images/player-target.png";
import killsIcon from "../../assets/images/kills.png";
import target from "../../assets/images/target.png";

export default function PlayerKD({
  kdPercentage,
  positiveColor,
  negativeColor,
  kills,
  deaths,
}) {
  const total = kills + deaths;
  const kdAccuracyPercentage = parseFloat(((kills / total) * 100).toFixed(2));

  return (
    <GraphicContainer>
      <GraphicIcon src={playerTarget} alt="Player target icon" />
      <GraphicTitle>K/D</GraphicTitle>
      {kdPercentage.length ? (
        <PlayerKDVersusContainer>
          {kdPercentage.map((item, index) => {
            const total = item.kills + item.deaths;
            const accuracy = parseFloat(
              ((item.kills / total) * 100).toFixed(2)
            );
            return (
              <PlayerKDVersusItem key={index}>
                <GraphicCount
                  key={index}
                  accuracyPercentage={accuracy}
                  positiveColor={item.colorLight}
                  negativeColor={item.colorBlack}
                >
                  <p>{accuracy.toFixed(2)}%</p>
                </GraphicCount>
                <PlayerKDText>
                  <PlayerKDTextIcon src={killsIcon} />
                  <p>Kills: {item.kills}</p>
                </PlayerKDText>
                <PlayerKDText>
                  <PlayerKDTextIcon src={target} />
                  <p>Deaths: {item.deaths}</p>
                </PlayerKDText>
              </PlayerKDVersusItem>
            );
          })}
        </PlayerKDVersusContainer>
      ) : (
        <>
          <GraphicCount
            accuracyPercentage={kdAccuracyPercentage}
            positiveColor={positiveColor}
            negativeColor={negativeColor}
          >
            <p>{kdAccuracyPercentage.toFixed(2)}%</p>
          </GraphicCount>
          <PlayerKDText>
            <PlayerKDTextIcon src={killsIcon} />
            <p>Kills: {kills}</p>
          </PlayerKDText>
          <PlayerKDText>
            <PlayerKDTextIcon src={target} />
            <p>Deaths: {deaths}</p>
          </PlayerKDText>
        </>
      )}
    </GraphicContainer>
  );
}
