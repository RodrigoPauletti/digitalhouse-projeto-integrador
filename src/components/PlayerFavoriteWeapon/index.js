import React from "react";

import {
  FavoriteWeaponImage,
  PlayerFavoriteWeaponVersusContainer,
  PlayerFavoriteWeaponVersusItem,
} from "./styles";

import { GraphicContainer, GraphicTitle, GraphicIcon } from "../../styles";

import gun from "../../assets/images/gun.png";

export default function PlayerFavoriteWeapon({ favoriteWeapon }) {
  return (
    <GraphicContainer>
      <GraphicIcon src={gun} alt="Gun icon" />
      <GraphicTitle>Arma favorita</GraphicTitle>
      {favoriteWeapon && favoriteWeapon.length ? (
        <PlayerFavoriteWeaponVersusContainer>
          {favoriteWeapon.map((item, index) => {
            return (
              <PlayerFavoriteWeaponVersusItem key={index}>
                <FavoriteWeaponImage
                  src={item.imageUrl}
                  alt={item.key}
                  title={item.key}
                />
                <p>{item.name ?? "-"}</p>
              </PlayerFavoriteWeaponVersusItem>
            );
          })}
        </PlayerFavoriteWeaponVersusContainer>
      ) : (
        <>
          <FavoriteWeaponImage
            src={favoriteWeapon.imageUrl}
            alt={favoriteWeapon.key}
            title={favoriteWeapon.key}
          />
          <p>{favoriteWeapon.name ?? "-"}</p>
        </>
      )}
    </GraphicContainer>
  );
}
