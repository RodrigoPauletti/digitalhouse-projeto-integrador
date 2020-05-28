import styled from "styled-components";

import { colors } from "../../variables";

export const PlayerKDText = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${colors.yellow};
    font-size: 15px;
    margin-left: 5px;
  }
`;

export const PlayerKDTextIcon = styled.img`
  width: 19px;
`;

export const PlayerKDVersusContainer = styled.div`
  display: flex;
`;

export const PlayerKDVersusItem = styled.div`
  flex: 1;
`;
