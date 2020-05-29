import React, { useState, useEffect } from "react";

import { api } from "../../services/api";

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

export default function StatisticsResult() {
  const [loading, setLoading] = useState(true);

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
          shotsAccuracy: { value: accuracyPercentage },
          kd: { displayValue: kdPercentage },
          timePlayed: { value: timePlayed },
        },
      },
    },
    knifeKills,
  } = player.data;

  useEffect(() => {
    api.get("76561198008049283").then((res) => {
      console.log(res);
    });
    // api.get();
    // setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <p>Loading</p>
      ) : (
        <React.Fragment>
          <Header />
          <StatisticsDetailsContainer>
            <StatisticsDetailsTitle>
              Minhas
              <br />
              estatisticas
            </StatisticsDetailsTitle>
            <PlayerDetails image={playerImage} name={playerName} winner />
            <PlayerKills
              killsData={{
                totalKills,
                weaponsKills: [
                  {
                    name: "sniper",
                    kills: sniperKills,
                  },
                  {
                    name: "knife",
                    kills: knifeKills,
                  },
                  {
                    name: "headshots",
                    kills: headshotsKills,
                  },
                ],
              }}
            />
            <PlayerAccuracy
              accuracyPercentage={accuracyPercentage}
              positiveColor={colors.yellow}
              negativeColor={colors.yellowDark}
            />
            <PlayerKD
              kdPercentage={parseFloat(kdPercentage)}
              positiveColor={colors.red}
              negativeColor={colors.redDark}
              kills={totalKills}
              deaths={totalDeaths}
            />
            <PlayerFavoriteWeapon
              favoriteWeapon={{
                key: "ak47",
                name: "AK-47",
                imageUrl:
                  "https://trackercdn.com/cdn/tracker.gg/csgo/weapons/197_icon-ak47.png",
              }}
            />
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
