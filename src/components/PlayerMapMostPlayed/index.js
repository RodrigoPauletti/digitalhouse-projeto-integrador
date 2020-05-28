import React from "react";

import { MapMostPlayedImage } from "./styles";

import { GraphicContainer, GraphicTitle, GraphicIcon } from "../../styles";

import map from "../../assets/images/map-pointer.png";

export default function PlayerMapMostPlayed({ mapMostPlayed }) {
  return (
    <GraphicContainer>
      <GraphicIcon src={map} alt="Map icon" />
      <GraphicTitle>Mapa mais jogado</GraphicTitle>
      <MapMostPlayedImage
        src={mapMostPlayed.imageUrl}
        alt={mapMostPlayed.name}
        title={mapMostPlayed.name}
      />
      <p>{mapMostPlayed.name}</p>
    </GraphicContainer>
  );
}
