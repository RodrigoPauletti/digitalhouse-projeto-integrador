import styled from "styled-components";

export const PlayerDetailsContainer = styled.div``;

export const PlayerImageRounded = styled.img`
  width: 115px;
  height: 115px;
`;

export const PlayerImageRoundedSmaller = styled(PlayerImageRounded)`
  width: 90px;
  height: 90px;
  filter: grayscale(100%);
`;

export const PlayerName = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
`;
