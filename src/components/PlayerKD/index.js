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
  const totalPersonal = kills + deaths;
  const kdAccuracyPercentagePersonal = parseFloat(
    ((kills / totalPersonal) * 100).toFixed(2)
  );
  const kdPersonal = parseFloat((kills / deaths).toFixed(2));

  return (
    <GraphicContainer>
      <GraphicIcon src={playerTarget} alt="Player target icon" />
      <GraphicTitle>K/D</GraphicTitle>
      {kdPercentage && kdPercentage.length ? (
        <PlayerKDVersusContainer>
          {kdPercentage.map((item, index) => {
            const totalVersus = item.kills + item.deaths;
            const accuracyVersus = parseFloat(
              ((item.kills / totalVersus) * 100).toFixed(2)
            );
            const kdVersus = parseFloat((item.kills / item.deaths).toFixed(2));
            return (
              <PlayerKDVersusItem key={index}>
                <GraphicCount
                  key={index}
                  accuracyPercentage={accuracyVersus}
                  positiveColor={item.colorLight}
                  negativeColor={item.colorBlack}
                >
                  <p>{kdVersus.toFixed(2)}%</p>
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
        <React.Fragment>
          <GraphicCount
            accuracyPercentage={kdAccuracyPercentagePersonal}
            positiveColor={positiveColor}
            negativeColor={negativeColor}
          >
            <p>{kdPersonal.toFixed(2)}%</p>
          </GraphicCount>
          <PlayerKDText>
            <PlayerKDTextIcon src={killsIcon} />
            <p>Kills: {kills}</p>
          </PlayerKDText>
          <PlayerKDText>
            <PlayerKDTextIcon src={target} />
            <p>Deaths: {deaths}</p>
          </PlayerKDText>
        </React.Fragment>
      )}
    </GraphicContainer>
  );
}
