import React from "react";

import { AccuracyContainer, AccuracyTitle, AccuracyCount } from "./styles";

import target from "../../assets/images/target.png";

export default function PlayerAccuracy({ accuracyPercentage }) {
  return (
    <AccuracyContainer>
      <img src={target} alt="Target icon" />
      <AccuracyTitle>Precisão do tiro</AccuracyTitle>
      {accuracyPercentage.length ? (
        accuracyPercentage.map((item, index) => {
          return (
            <AccuracyCount key={index}>
              <p>{item}%</p>
            </AccuracyCount>
          );
        })
      ) : (
        <AccuracyCount accuracyPercentage={accuracyPercentage}>
          <p>{accuracyPercentage}%</p>
        </AccuracyCount>
      )}
    </AccuracyContainer>
  );
}
