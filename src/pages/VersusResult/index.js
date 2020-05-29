import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlayerDetails from "../../components/PlayerDetails";
import PlayerKills from "../../components/PlayerKills";
import PlayerAccuracy from "../../components/PlayerAccuracy";
import PlayerKD from "../../components/PlayerKD";
import PlayerFavoriteWeapon from "../../components/PlayerFavoriteWeapon";
import PlayerUptime from "../../components/PlayerUptime";
import PlayerMapMostPlayed from "../../components/PlayerMapMostPlayed";

import { StatisticsDetailsContainer, StatisticsDetailsTitle } from "./styles";
import { colors } from "../../variables";

import player from "../../assets/json/player.json";
// import map from "../../assets/json/maps.json";

export default function VersusResult() {
  console.log(player.data);
  const {
    platformInfo: { avatarUrl: playerImage, platformUserHandle: playerName },
    segments: {
      0: {
        stats: {
          kills: { value: totalKills },
          deaths: { value: totalDeaths },
          snipersKilled: { value: sniperKills },
          headshots: { value: headshotsKills },
          timePlayed: { value: timePlayed },
        },
      },
    },
    knifeKills,
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
          // {
          //   name: "knife",
          //   kills: knifeKills,
          // },
          {
            name: "headshots",
            kills: headshotsKills,
          },
        ],
      },
      accuracyPercentage: 34,
      kills: totalKills,
      deaths: totalDeaths,
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
          // {
          //   name: "knife",
          //   kills: 12,
          // },
          {
            name: "headshots",
            kills: 129,
          },
        ],
      },
      accuracyPercentage: 68,
      kills: 1335,
      deaths: 79,
    },
  ];

  return (
    <>
      <Header />
      <StatisticsDetailsContainer>
        <StatisticsDetailsTitle>Vencedor</StatisticsDetailsTitle>
        {players && players.length ? (
          players.map((player, index) => {
            return (
              <PlayerDetails
                key={index}
                image={player.image}
                name={player.name}
                winner={player.winner}
                color={index === 0 ? colors.blue : colors.red}
              />
            );
          })
        ) : (
          <PlayerDetails image={playerImage} name={playerName} winner />
        )}
        {players && players.length ? (
          <PlayerKills killsData={players.map((player) => player.killsData)} />
        ) : (
          ""
        )}
        {players && players.length ? (
          <PlayerAccuracy
            accuracyPercentage={players.map(
              (player) => player.accuracyPercentage
            )}
          />
        ) : (
          ""
        )}
        {players && players.length ? (
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
        ) : (
          ""
        )}
        <PlayerUptime timePlayed={timePlayed} />
        <PlayerMapMostPlayed
          mapMostPlayed={{
            name: "Dust",
            imageUrl:
              "https://trackercdn.com/cdn/tracker.gg/csgo/maps/de_dust.jpg",
          }}
        />
      </StatisticsDetailsContainer>
      <Footer buttonText="Tente novamente" />
    </>
  );
}
