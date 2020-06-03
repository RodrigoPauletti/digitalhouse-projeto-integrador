import styled, { createGlobalStyle } from "styled-components";

import { colors } from "../../variables";

import bgImage from "../../assets/images/bg.png";
import alertIcon from "../../assets/images/alert-icon.png";

export const HomeGlobalStyle = createGlobalStyle`
  html, body {
    background: url(${bgImage}) no-repeat top center ${colors.bgColor} !important;
    background-size: cover;
  }
`;

export const SeeYourStatisticsContainer = styled.div`
  position: relative;
  top: 30vw;
  margin: 0 20px;
`;

export const SeeYourStatisticsTitle = styled.p`
  font-size: 48px;
  font-weight: 900;
  text-align: left;
`;

export const SeeYourStatisticsDescription = styled.p`
  font-size: 16px;
`;

export const WarningContainer = styled.div`
  margin: 55px 0 20px;
`;

export const WarningTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
`;

export const WarningIcon = styled.img.attrs({
  src: alertIcon,
})``;

export const WarningText = styled.p`
  color: ${colors.yellow};
  font-weight: 500;
  font-size: 11px;
  margin-left: 5px;
`;

export const WarningTextFeatured = styled.a`
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 12px;
`;
