import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsDescription,
} from "./styles";

import { BarSpaced, Button, Input } from "../../styles";

import { colors } from "../../variables";

export default function Statistics() {
  const [steamID, setSteamID] = useState("");

  function handleChange(element) {
    setSteamID(element.target.value);
  }

  return (
    <>
      <Header />
      <StatisticsContainer>
        <StatisticsTitle>
          Estatis
          <br />
          ticas
        </StatisticsTitle>
        <StatisticsDescription>Veja suas estatísticas</StatisticsDescription>
        <BarSpaced color={colors.yellow} />
        <Input
          onChange={(e) => handleChange(e)}
          placeholder="Steam ID"
          value={steamID}
        />
        <Button>
          <Link to={{ pathname: "/statisticsResult", playerID: steamID }}>
            Resultado
          </Link>
        </Button>
      </StatisticsContainer>
      <Footer />
    </>
  );
}
