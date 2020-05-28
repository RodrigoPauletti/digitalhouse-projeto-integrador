import styled from "styled-components";

import fonts from "../../fonts";
import { colors } from "../../variables";

export const CardContainer = styled.div`
  background: ${colors.cardBg};
  color: ${colors.light};
  padding: 25px;
  margin-bottom: 50px;
  text-align: center;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardTitle = styled.p`
  font-family: ${fonts.Valorant};
  font-size: 25px;
  font-weight: normal;
  margin-bottom: 10px;
`;

export const CardTitleBig = styled(CardTitle)`
  font-size: 40px;
`;

export const CardDescription = styled.p`
  font-size: 12px;
`;
