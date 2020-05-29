import React from "react";

import {
  TimePlayedText,
  TimePlayedVersusContainer,
  TimePlayedVersusItem,
  TimePlayedVersusText,
} from "./styles";
import { GraphicContainer, GraphicTitle, GraphicIcon } from "../../styles";

import uptime from "../../assets/images/uptime.png";

export default function PlayerTimePlayed({ timePlayed }) {
  let totalSeconds = timePlayed;
  const hours = Math.floor(totalSeconds / 3600);
  const days = parseInt(hours / 24);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <GraphicContainer>
      <GraphicIcon src={uptime} alt="TimePlayed icon" />
      <GraphicTitle>Tempo jogado</GraphicTitle>
      {timePlayed && timePlayed.length ? (
        <TimePlayedVersusContainer>
          {timePlayed.map((playerTimePlayedInSeconds, index) => {
            const hours = Math.floor(playerTimePlayedInSeconds / 3600);
            const days = parseInt(hours / 24);
            playerTimePlayedInSeconds %= 3600;
            const minutes = Math.floor(playerTimePlayedInSeconds / 60);
            const seconds = playerTimePlayedInSeconds % 60;
            return (
              <TimePlayedVersusItem key={index}>
                <TimePlayedVersusText>
                  {days +
                    " dias e " +
                    ((hours / 24 - days) * 24).toFixed(0) +
                    " horas"}
                </TimePlayedVersusText>
                <TimePlayedVersusText>
                  {hours + ":" + minutes + ":" + seconds}
                </TimePlayedVersusText>
              </TimePlayedVersusItem>
            );
          })}
        </TimePlayedVersusContainer>
      ) : (
        <React.Fragment>
          <TimePlayedText>
            {days +
              " dias e " +
              ((hours / 24 - days) * 24).toFixed(0) +
              " horas"}
          </TimePlayedText>
          <TimePlayedText>
            {hours + ":" + minutes + ":" + seconds}
          </TimePlayedText>
        </React.Fragment>
      )}
    </GraphicContainer>
  );
}
