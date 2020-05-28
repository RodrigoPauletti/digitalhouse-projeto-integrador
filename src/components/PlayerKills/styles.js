import styled from "styled-components";

import { colors } from "../../variables";

export const KillsContainer = styled.div`
  margin-top: 50px;
`;

export const KillsTitle = styled.p`
  color: ${colors.yellow};
  font-size: 20px;
  text-transform: uppercase;
`;

export const KillsCount = styled.p`
  width: 130px;
  padding: 3px 5px;
  margin: 5px auto 10px;
  color: ${colors.yellow};
  font-size: 25px;
  font-weight: bold;
  border: 3px solid ${colors.yellow};
`;

export const KillsTextGeneral = styled.p`
  font-size: 18px;
  font-weight: medium;
`;

export const KillsStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto 0;
  p {
    margin-left: 10px;
    color: ${colors.yellow};
  }
`;
