import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlayerDetails from "../../components/PlayerDetails";
import PlayerKills from "../../components/PlayerKills";
import PlayerAccuracy from "../../components/PlayerAccuracy";
import PlayerKD from "../../components/PlayerKD";
import PlayerUptime from "../../components/PlayerUptime";
import PlayerMapMostPlayed from "../../components/PlayerMapMostPlayed";

import { StatisticsDetailsContainer, StatisticsDetailsTitle } from "./styles";
import { colors } from "../../variables";

import player from "../../assets/json/player.json";
// import map from "../../assets/json/maps.json";

export default function VersusResult() {
  console.log(player.data);
  const {
    segments: {
      0: {
        stats: {
          kills: { value: totalKills },
          deaths: { value: totalDeaths },
          snipersKilled: { value: sniperKills },
          headshots: { value: headshotsKills },
          shotsAccuracy: { value: accuracyPercentage },
          timePlayed: { value: timePlayed },
        },
      },
    },
  } = player.data;

  const players = [
    {
      image: "player-2.png",
      name: "Player 2",
      winner: true,
      killsData: {
        totalKills,
        weaponsKills: [
          {
            name: "sniper",
            kills: sniperKills,
          },
          {
            name: "headshots",
            kills: headshotsKills,
          },
        ],
      },
      accuracyPercentage,
      kills: totalKills,
      deaths: totalDeaths,
      mapMostPlayed: {
        name: "Baggage",
        imageUrl:
          "https://trackercdn.com/cdn/tracker.gg/csgo/maps/ar_baggage.jpg",
      },
      timePlayed,
    },
    {
      image: "player-1.png",
      name: "Player 1",
      killsData: {
        totalKills: 1335,
        weaponsKills: [
          {
            name: "sniper",
            kills: 31,
          },
          {
            name: "headshots",
            kills: 129,
          },
        ],
      },
      accuracyPercentage: 68,
      kills: 1335,
      deaths: 196,
      mapMostPlayed: {
        name: "Dust",
        imageUrl: "https://trackercdn.com/cdn/tracker.gg/csgo/maps/de_dust.jpg",
      },
      timePlayed: 410232,
    },
  ];

  return (
    <>
      <Header />
      {players && players.length ? (
        <StatisticsDetailsContainer>
          <StatisticsDetailsTitle>Vencedor</StatisticsDetailsTitle>
          {players.map((player, index) => {
            return (
              <PlayerDetails
                key={index}
                image={player.image}
                name={player.name}
                winner={player.winner}
                color={index === 0 ? colors.blue : colors.red}
              />
            );
          })}
          <PlayerKills killsData={players.map((player) => player.killsData)} />
          <PlayerAccuracy
            accuracyPercentage={players.map(
              (player) => player.accuracyPercentage
            )}
          />
          <PlayerKD
            kdPercentage={players.map((player, index) => {
              const { kills, deaths } = player;
              const playerKD = {
                kills,
                deaths,
                colorLight: index === 0 ? colors.blue : colors.red,
                colorBlack: index === 0 ? colors.blueDark : colors.redDark,
              };
              return playerKD;
            })}
          />
          <PlayerUptime
            timePlayed={players.map((player) => player.timePlayed)}
          />
          <PlayerMapMostPlayed
            mapMostPlayed={players.map((player) => player.mapMostPlayed)}
          />
        </StatisticsDetailsContainer>
      ) : (
        ""
      )}
      <Footer buttonText="Tente novamente" />
    </>
  );
}
