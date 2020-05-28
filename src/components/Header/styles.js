import styled from "styled-components";

import fonts from "../../fonts";
import { colors } from "../../variables";

export const HeaderContent = styled.div`
  height: 60px;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  padding: 0 28px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 30px;
  font-family: ${fonts.Valorant};
  color: ${colors.light};
  font-weight: normal;
`;
