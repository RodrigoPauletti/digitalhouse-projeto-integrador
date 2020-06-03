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

export default function VersusResult() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { playerID1, playerID2 } = useLocation();

  const [players, setPlayers] = useState([]);

  function getPlayer() {
    if (playerID1 && playerID2) {
      getPlayers([playerID1, playerID2]);
    } else {
      history.push("/versus");
    }
  }

  async function getPlayers(playerIDs) {
    const players = await playerIDs.map(async (playerID, index) => {
      return await api
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
                return history.push("/versus");
              });
            let mapMostPlayed;
            await api
              .get(`${playerID}/segments/map`)
              .then((res) => {
                const maps = res.data.data;
                mapMostPlayed = getMapMostPlayed(maps);
              })
              .catch(() => {
                return history.push("/versus");
              });
            return {
              playerImage,
              playerName,
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
              totalDeaths,
              accuracyPercentage,
              kdPercentage,
              timePlayed,
              knifeKills,
              favoriteWeapon,
              mapMostPlayed,
            };
          }
        })
        .catch(() => {
          return history.push("/versus");
        });
    });
    let newPlayers = (await Promise.all(players)).sort(
      makeSorter((x) => x.killsData.totalKills, "desc")
    );
    newPlayers[0].winner = true;
    setPlayers(newPlayers);
    setLoading(false);
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
          {players && players.length ? (
            <StatisticsDetailsContainer>
              <StatisticsDetailsTitle>Vencedor</StatisticsDetailsTitle>
              {players.map((player, index) => {
                return (
                  <PlayerDetails
                    key={index}
                    image={player.playerImage}
                    name={player.playerName}
                    winner={player.winner}
                    color={index === 0 ? colors.blue : colors.red}
                  />
                );
              })}
              <PlayerKills
                killsData={players.map((player) => player.killsData)}
              />
              <PlayerAccuracy
                accuracyPercentage={players.map(
                  (player) => player.accuracyPercentage
                )}
              />
              <PlayerKD
                kdPercentage={players.map((player, index) => {
                  const { totalKills } = player.killsData;
                  const { totalDeaths } = player;
                  const playerKD = {
                    kills: totalKills,
                    deaths: totalDeaths,
                    colorLight: index === 0 ? colors.blue : colors.red,
                    colorBlack: index === 0 ? colors.blueDark : colors.redDark,
                  };
                  return playerKD;
                })}
              />
              <PlayerFavoriteWeapon
                favoriteWeapon={players.map((player) => player.favoriteWeapon)}
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
