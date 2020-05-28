import React from "react";

import { TimePlayedText } from "./styles";
import { GraphicContainer, GraphicTitle, GraphicIcon } from "../../styles";

import uptime from "../../assets/images/uptime.png";

export default function PlayerTimePlayed({ timePlayed }) {
  let totalSeconds = timePlayed;
  const hours = Math.floor(totalSeconds / 3600);
  const days = hours / 24;
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <GraphicContainer>
      <GraphicIcon src={uptime} alt="TimePlayed icon" />
      <GraphicTitle>Tempo jogado</GraphicTitle>
      <TimePlayedText>
        {days.toFixed(0) + " dias e " + hours + " horas"}
      </TimePlayedText>
      <TimePlayedText>{hours + ":" + minutes + ":" + seconds}</TimePlayedText>
    </GraphicContainer>
  );
}
