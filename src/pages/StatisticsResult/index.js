import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Lottie from "lottie-web-react";

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

import loadingAnimationData from "../../assets/json/loading.json";

export default function StatisticsResult() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { playerID } = useLocation();
  const [player, setPlayer] = useState({
    playerImage: "",
    playerName: "",
    totalKills: 0,
    totalDeaths: 0,
    sniperKills: 0,
    headshotsKills: 0,
    accuracyPercentage: 0,
    kdPercentage: 0,
    timePlayed: 0,
    knifeKills: 0,
    favoriteWeapon: {},
    mapMostPlayed: {},
  });

  function getPlayer() {
    if (playerID) {
      api
        .get(playerID)
        .then(async (res) => {
          if (res && res.status === 200 && res.data && res.data.data) {
            const {
              platformInfo: {
                avatarUrl: playerImage,
                platformUserHandle: playerName,
              },
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
            } = res.data.data;
            let favoriteWeapon;
            await api
              .get(`${playerID}/segments/weapon`)
              .then((res) => {
                const weapons = res.data.data;
                favoriteWeapon = getWeaponMoreUsed(weapons);
              })
              .catch(() => {
                return history.push("/statistics");
              });
            let mapMostPlayed;
            await api
              .get(`${playerID}/segments/map`)
              .then((res) => {
                const maps = res.data.data;
                mapMostPlayed = getMapMostPlayed(maps);
              })
              .catch(() => {
                return history.push("/statistics");
              });
            setPlayer({
              playerImage,
              playerName,
              totalKills,
              totalDeaths,
              sniperKills,
              headshotsKills,
              accuracyPercentage,
              kdPercentage,
              timePlayed,
              knifeKills,
              favoriteWeapon,
              mapMostPlayed,
            });
            setLoading(false);
          }
        })
        .catch(() => {
          return history.push("/statistics");
        });
    } else {
      history.push("/statistics");
    }
  }

  function getWeaponMoreUsed(weapons) {
    let key = "",
      name = "",
      imageUrl = "";
    ({
      attributes: { key },
      metadata: { imageUrl, name },
    } = weapons.sort(makeSorter((x) => x.stats.kills.value, "desc"))[0]);
    return {
      key,
      name,
      imageUrl,
    };
  }

  function getMapMostPlayed(maps) {
    let name = "",
      imageUrl = "";
    ({
      metadata: { imageUrl, name },
    } = maps.sort(makeSorter((x) => x.stats.rounds.value, "desc"))[0]);
    return {
      name,
      imageUrl,
    };
  }

  function makeSorter(field, direction) {
    return function (a, b) {
      const valueA = typeof field === "function" ? field(a) : a[field];
      const valueB = typeof field === "function" ? field(b) : b[field];
      if (valueA > valueB) {
        return direction === "asc" ? 1 : -1;
      }
      if (valueA < valueB) {
        return direction === "asc" ? -1 : 1;
      }
      return 0;
    };
  }

  useEffect(() => {
    getPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Lottie
          options={{
            animationData: loadingAnimationData,
            loop: true,
            autoplay: true,
          }}
          playingState={"play"}
          speed={1.7}
        />
      ) : (
        <React.Fragment>
          <Header />
          <StatisticsDetailsContainer>
            <StatisticsDetailsTitle>
              Minhas
              <br />
              estatisticas
            </StatisticsDetailsTitle>
            <PlayerDetails
              image={player.playerImage}
              name={player.playerName}
              winner
            />
            <PlayerKills
              killsData={{
                totalKills: player.totalKills,
                weaponsKills: [
                  {
                    name: "sniper",
                    kills: player.sniperKills,
                  },
                  {
                    name: "knife",
                    kills: player.knifeKills,
                  },
                  {
                    name: "headshots",
                    kills: player.headshotsKills,
                  },
                ],
              }}
            />
            <PlayerAccuracy
              accuracyPercentage={player.accuracyPercentage}
              positiveColor={colors.yellow}
              negativeColor={colors.yellowDark}
            />
            <PlayerKD
              kdPercentage={parseFloat(player.kdPercentage)}
              positiveColor={colors.red}
              negativeColor={colors.redDark}
              kills={player.totalKills}
              deaths={player.totalDeaths}
            />
            <PlayerFavoriteWeapon favoriteWeapon={player.favoriteWeapon} />
            <PlayerUptime timePlayed={player.timePlayed} />
            <PlayerMapMostPlayed mapMostPlayed={player.mapMostPlayed} />
          </StatisticsDetailsContainer>
          <Footer buttonText="Tente novamente" />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
