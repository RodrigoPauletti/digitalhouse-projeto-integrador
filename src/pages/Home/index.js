import React from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";

import {
  HomeGlobalStyle,
  SeeYourStatisticsContainer,
  SeeYourStatisticsTitle,
  SeeYourStatisticsDescription,
  WarningContainer,
  WarningTextContainer,
  WarningIcon,
  WarningText,
  WarningTextFeatured,
} from "./styles";
import { InternalContainer, Bar } from "../../styles";

export default function Home() {
  return (
    <>
      <Header />
      <SeeYourStatisticsContainer>
        <SeeYourStatisticsTitle>Veja suas estatísticas</SeeYourStatisticsTitle>
        <Bar />
        <SeeYourStatisticsDescription>
          Sua arma mais usada, quantidade de kills, headshots e muito mais.
        </SeeYourStatisticsDescription>
        <InternalContainer>
          <Card
            title="Minhas estatisticas"
            description="Veja sua quantidade de kills, arma favorita e muito mais!!!"
            buttonText="Avançar"
            link="/statistics"
          />
          <Card
            title="1 vs 1"
            description="Entre você e seu amigo quem é o melhor no CS? Saiba agora"
            buttonText="Avançar"
            link="/versus"
            bigTitle={true}
          />
          <WarningContainer>
            <WarningTextContainer>
              <WarningIcon />
              <WarningText>
                Lembre-se, só funciona se tiver conta CS:GO cadastrada
              </WarningText>
            </WarningTextContainer>
            <WarningTextFeatured>
              Criar conta CS:GO e começar a jogar !
            </WarningTextFeatured>
          </WarningContainer>
        </InternalContainer>
      </SeeYourStatisticsContainer>
      <HomeGlobalStyle />
    </>
  );
}
