import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  VersusContainer,
  VersusTitle,
  VersusDescription,
  PlayerContainer,
  PlayerTitle,
  VersusText,
} from "./styles";
import { SmallBar, Button, Input } from "../../styles";

export default function Versus() {
  const [steamID1, setSteamID1] = useState("");
  const [steamID2, setSteamID2] = useState("");

  function handleChange(element, inputIndex) {
    if (inputIndex === 1) {
      setSteamID1(element.target.value);
    } else if (inputIndex === 2) {
      setSteamID2(element.target.value);
    }
  }
  return (
    <>
      <Header />
      <VersusContainer>
        <VersusTitle>1 VS 1</VersusTitle>
        <VersusDescription>Que vença o melhor jogador!</VersusDescription>
        <PlayerContainer>
          <PlayerTitle>P1</PlayerTitle>
          <SmallBar color="#ED1F1F" />
          <Input
            onChange={(e) => handleChange(e, 1)}
            placeholder="Steam ID"
            value={steamID1}
          />
        </PlayerContainer>
        <VersusText>Vs</VersusText>
        <PlayerContainer>
          <PlayerTitle>P2</PlayerTitle>
          <SmallBar color="#1F40ED" />
          <Input
            onChange={(e) => handleChange(e, 2)}
            placeholder="Steam ID"
            value={steamID2}
          />
        </PlayerContainer>
        <Button>
          <Link
            to={{
              pathname: "/versusResult",
              playerID1: steamID1,
              playerID2: steamID2,
            }}
          >
            Resultado
          </Link>
        </Button>
      </VersusContainer>
      <Footer />
    </>
  );
}
