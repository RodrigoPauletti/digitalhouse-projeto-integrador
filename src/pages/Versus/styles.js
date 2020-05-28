import styled from "styled-components";

import fonts from "../../fonts";

export const VersusContainer = styled.div`
  margin: 20px 40px 60px;
  text-align: center;
`;

export const VersusTitle = styled.p`
  font-family: ${fonts.Valorant};
  font-size: 50px;
`;

export const VersusDescription = styled.p`
  font-size: 14px;
`;

export const PlayerContainer = styled.div`
  margin-top: 25px;
  &:last-of-type {
    margin-top: 0;
  }
`;

export const PlayerTitle = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const VersusText = styled.p`
  margin-top: 25px;
  font-family: ${fonts.Valorant};
  font-size: 70px;
`;
