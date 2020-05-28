import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlayerDetails from "../../components/PlayerDetails";
import PlayerKills from "../../components/PlayerKills";
import PlayerAccuracy from "../../components/PlayerAccuracy";

import { StatisticsDetailsContainer, StatisticsDetailsTitle } from "./styles";

import playerImage from "../../assets/images/player-1.png";

export default function Statistics() {
  return (
    <>
      <Header />
      <StatisticsDetailsContainer>
        <StatisticsDetailsTitle>
          Minhas
          <br />
          estatisticas
        </StatisticsDetailsTitle>
        <PlayerDetails image={playerImage} name="Matheuzinhodograu123" winner />
        <PlayerKills
          killsData={{ kills: 123, sniper: 230, knife: 143, headshots: 426 }}
        />
        {/* <PlayerKills killsData={[{ kills: 43 }, { kills: 888 }]} /> */}
        <PlayerAccuracy accuracyPercentage={62} />
        <PlayerAccuracy accuracyPercentage={12} />
        <PlayerAccuracy accuracyPercentage={50} />
        <PlayerAccuracy accuracyPercentage={36} />
      </StatisticsDetailsContainer>
      <Footer buttonText="Tente novamente" />
    </>
  );
}
