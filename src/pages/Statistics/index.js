import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsDescription,
} from "./styles";
import { BarSpaced, Button, Input } from "../../styles";

export default function Statistics() {
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
        <BarSpaced color="#FED701" />
        <Input placeholder="Steam ID" />
        <Button>Resultado</Button>
      </StatisticsContainer>
      <Footer />
    </>
  );
}
