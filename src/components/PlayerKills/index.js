import React from "react";

import {
  KillsContainer,
  KillsTitle,
  KillsCount,
  KillsTextGeneral,
  KillsStatsContainer,
} from "./styles";

import skull from "../../assets/images/skull.png";
import sniper from "../../assets/images/sniper.png";
// import knife from "../../assets/images/knife.png";
// import bullet from "../../assets/images/bullet.png";

export default function PlayerKills({ killsData }) {
  return (
    <KillsContainer>
      <img src={skull} alt="Skull icon" />
      <KillsTitle>Kills</KillsTitle>
      {killsData.length ? (
        killsData.map((item, index) => {
          return (
            <div key={index}>
              <KillsCount>{item.kills}</KillsCount>
              <KillsStatsContainer>
                <img src={sniper} alt="Sniper icon" />
                <KillsTextGeneral>{item.sniper} sniper</KillsTextGeneral>
              </KillsStatsContainer>
              <KillsStatsContainer>
                <img src={sniper} alt="Knife icon" />
                <KillsTextGeneral>{item.knife} knife</KillsTextGeneral>
              </KillsStatsContainer>
              <KillsStatsContainer>
                <img src={sniper} alt="Headshot icon" />
                <KillsTextGeneral>{item.headshots} headshots</KillsTextGeneral>
              </KillsStatsContainer>
            </div>
          );
        })
      ) : (
        <>
          <KillsCount>{killsData.kills}</KillsCount>
          <KillsStatsContainer>
            <img src={sniper} alt="Sniper icon" />
            <KillsTextGeneral>{killsData.sniper} sniper</KillsTextGeneral>
          </KillsStatsContainer>
          <KillsStatsContainer>
            <img src={sniper} alt="Knife icon" />
            <KillsTextGeneral>{killsData.knife} knife</KillsTextGeneral>
          </KillsStatsContainer>
          <KillsStatsContainer>
            <img src={sniper} alt="Headshot icon" />
            <KillsTextGeneral>{killsData.headshots} headshots</KillsTextGeneral>
          </KillsStatsContainer>
        </>
      )}
    </KillsContainer>
  );
}
