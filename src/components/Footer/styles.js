import styled from "styled-components";

import arrowLeft from "../../assets/images/arrow-left.png";

export const FooterContainer = styled.div`
  height: 50px;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 15px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const ArrowLeft = styled.img.attrs({
  src: arrowLeft,
})``;
