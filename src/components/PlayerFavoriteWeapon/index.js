import React from "react";

import { FavoriteWeaponImage } from "./styles";

import { GraphicContainer, GraphicTitle, GraphicIcon } from "../../styles";

import gun from "../../assets/images/gun.png";

export default function PlayerFavoriteWeapon({ favoriteWeapon }) {
  return (
    <GraphicContainer>
      <GraphicIcon src={gun} alt="Gun icon" />
      <GraphicTitle>Arma favorita</GraphicTitle>
      <FavoriteWeaponImage
        src={favoriteWeapon.imageUrl}
        alt={favoriteWeapon.key}
        title={favoriteWeapon.key}
      />
      <p>{favoriteWeapon.name}</p>
    </GraphicContainer>
  );
}
