import React from "react";

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
  return (
    <>
      <Header />
      <VersusContainer>
        <VersusTitle>1 VS 1</VersusTitle>
        <VersusDescription>Que vença o melhor jogador!</VersusDescription>
        <PlayerContainer>
          <PlayerTitle>P1</PlayerTitle>
          <SmallBar color="#ED1F1F" />
          <Input placeholder="Steam ID" />
        </PlayerContainer>
        <VersusText>Vs</VersusText>
        <PlayerContainer>
          <PlayerTitle>P2</PlayerTitle>
          <SmallBar color="#1F40ED" />
          <Input placeholder="Steam ID" />
        </PlayerContainer>
        <Button>Resultado</Button>
      </VersusContainer>
      <Footer />
    </>
  );
}
