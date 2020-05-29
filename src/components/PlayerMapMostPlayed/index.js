import React from "react";

import {
  MapMostPlayedContainer,
  MapMostPlayedItem,
  MapMostPlayedImage,
  MapMostPlayedName,
} from "./styles";

import { GraphicContainer, GraphicTitle, GraphicIcon } from "../../styles";

import map from "../../assets/images/map-pointer.png";

export default function PlayerMapMostPlayed({ mapMostPlayed }) {
  return (
    <GraphicContainer>
      <GraphicIcon src={map} alt="Map icon" />
      <GraphicTitle>Mapa mais jogado</GraphicTitle>
      {mapMostPlayed && mapMostPlayed.length ? (
        <MapMostPlayedContainer>
          {mapMostPlayed.map((mapMostPlayedPlayer, index) => {
            return (
              <MapMostPlayedItem key={index}>
                <MapMostPlayedImage
                  src={mapMostPlayedPlayer.imageUrl}
                  alt={mapMostPlayedPlayer.name}
                  title={mapMostPlayedPlayer.name}
                />
                <MapMostPlayedName>
                  {mapMostPlayedPlayer.name}
                </MapMostPlayedName>
              </MapMostPlayedItem>
            );
          })}
        </MapMostPlayedContainer>
      ) : (
        <>
          <MapMostPlayedImage
            src={mapMostPlayed.imageUrl}
            alt={mapMostPlayed.name}
            title={mapMostPlayed.name}
          />
          <MapMostPlayedName>{mapMostPlayed.name}</MapMostPlayedName>
        </>
      )}
    </GraphicContainer>
  );
}
