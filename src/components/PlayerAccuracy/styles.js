import styled from "styled-components";

import { colors } from "../../variables";

export const AccuracyContainer = styled.div`
  margin-top: 50px;
`;

export const AccuracyTitle = styled.p`
  color: ${colors.yellow};
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 5px;
`;

export const AccuracyCount = styled.div`
  width: 120px;
  height: 120px;
  margin: 20px auto 0;
  border: double 7px transparent;
  background-image: linear-gradient(${colors.bgColor}, ${colors.bgColor}),
    linear-gradient(
      180deg,
      ${colors.yellow} ${(props) => props.accuracyPercentage}%,
      ${colors.yellowOpacity} ${(props) => 100 - props.accuracyPercentage}%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${colors.yellow};
    font-size: 35px;
    font-weight: bold;
  }
`;
