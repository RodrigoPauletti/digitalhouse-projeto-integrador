import React from "react";

import {
  KillsContainer,
  KillsTitle,
  KillsCount,
  KillsTextGeneral,
  KillsStatsContainer,
  KillsVersusContainer,
  KillsVersusPlayerContainer,
  KillsVersusPlayer,
  KillsVersusCount,
  KillsVersusStatsContainer,
  KillsVersusTextGeneral,
} from "./styles";

import { MediumBar } from "../../styles";
import { colors } from "../../variables";

import skull from "../../assets/images/skull.png";

export default function PlayerKills({ killsData }) {
  return (
    <KillsContainer>
      <img src={skull} alt="Skull icon" />
      <KillsTitle>Kills</KillsTitle>
      {killsData.length ? (
        <KillsVersusContainer>
          {killsData.map((item, index) => {
            return (
              <KillsVersusPlayerContainer key={index}>
                <KillsVersusPlayer>P{index + 1}</KillsVersusPlayer>
                <MediumBar color={index === 0 ? colors.blue : colors.red} />
                <KillsVersusCount>
                  {item.totalKills ? item.totalKills : 0}
                </KillsVersusCount>
                {item.weaponsKills.length
                  ? item.weaponsKills.map((weapon, idx) => {
                      if (weapon.kills) {
                        return (
                          <KillsVersusStatsContainer key={idx}>
                            <img
                              src={`${weapon.name}.png`}
                              alt={`${weapon.name}icon`}
                            />
                            <KillsVersusTextGeneral>
                              {weapon.kills + " " + weapon.name}
                            </KillsVersusTextGeneral>
                          </KillsVersusStatsContainer>
                        );
                      }
                      return false;
                    })
                  : ""}
              </KillsVersusPlayerContainer>
            );
          })}
        </KillsVersusContainer>
      ) : (
        <React.Fragment>
          <KillsCount>
            {killsData.totalKills ? killsData.totalKills : 0}
          </KillsCount>
          {killsData.weaponsKills.length
            ? killsData.weaponsKills.map((weapon, index) => {
                if (weapon.kills) {
                  return (
                    <KillsStatsContainer key={index}>
                      <img
                        src={`${weapon.name}.png`}
                        alt={`${weapon.name}icon`}
                      />
                      <KillsTextGeneral>
                        {weapon.kills + " " + weapon.name}
                      </KillsTextGeneral>
                    </KillsStatsContainer>
                  );
                }
                return false;
              })
            : ""}
        </React.Fragment>
      )}
    </KillsContainer>
  );
}
