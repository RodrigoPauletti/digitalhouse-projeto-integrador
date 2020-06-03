import React from "react";

import { GraphicVersusContainer } from "./styles";

import {
  GraphicContainer,
  GraphicIcon,
  GraphicTitle,
  GraphicCount,
} from "../../styles";

import target from "../../assets/images/target.png";
import { colors } from "../../variables";

export default function PlayerAccuracy({
  accuracyPercentage,
  positiveColor,
  negativeColor,
}) {
  return (
    <GraphicContainer>
      <GraphicIcon src={target} alt="Target icon" />
      <GraphicTitle>Precisão do tiro</GraphicTitle>
      {accuracyPercentage.length ? (
        <GraphicVersusContainer>
          {accuracyPercentage.map((percentage, index) => {
            return (
              <GraphicCount
                key={index}
                accuracyPercentage={percentage}
                positiveColor={index === 0 ? colors.blue : colors.red}
                negativeColor={index === 0 ? colors.blueDark : colors.redDark}
              >
                <p>{percentage.toFixed(0)}%</p>
              </GraphicCount>
            );
          })}
        </GraphicVersusContainer>
      ) : (
        <GraphicCount
          accuracyPercentage={accuracyPercentage}
          positiveColor={positiveColor}
          negativeColor={negativeColor}
        >
          <p>{accuracyPercentage ? accuracyPercentage.toFixed(0) : 0}%</p>
        </GraphicCount>
      )}
    </GraphicContainer>
  );
}
