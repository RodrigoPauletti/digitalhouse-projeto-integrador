import styled, { createGlobalStyle } from "styled-components";

import fonts from "./fonts";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.Roboto};
    color: ${colors.light};
  }
  html, body {
    height: 100%;
    background-color: ${colors.bgColor};
  }
  #root {
    height: 100%;
  }
  p {
    font-size: 18px;
    font-weight: medium;
  }
`;

export const Container = styled.div`
  padding: 0 60px;
`;

export const InternalContainer = styled.div`
  margin-top: 50px;
  padding: 0 30px;
`;

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background: ${(props) => props.color ?? colors.light};
  margin: 10px 0 15px 0;
  border-radius: 3px;
`;

export const BarSpaced = styled(Bar)`
  margin-bottom: 30px;
`;

export const MediumBar = styled(Bar)`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const SmallBar = styled(Bar)`
  width: 25%;
  margin-bottom: 10px;
`;

export const SmallBarCentered = styled(SmallBar)`
  margin: 5px auto 0;
`;

export const Button = styled.button`
  background: ${colors.btnBg};
  color: ${colors.light};
  padding: 5px 32px;
  margin: 20px 0 0;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  box-shadow: 0px 1.92354px 2.74791px rgba(30, 30, 30, 0.76),
    0px 4.86478px 6.94968px rgba(30, 30, 30, 0.524386),
    0px 9.92369px 14.1767px rgba(30, 30, 30, 0.422781),
    0px 20.4409px 29.2013px rgba(30, 30, 30, 0.337219),
    0px 56px 80px rgba(30, 30, 30, 0.235614);
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const SimpleButton = styled(Button)`
  margin: 0;
  box-shadow: none;
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  padding: 7px 0 7px 10px;
  background: ${colors.gray};
  color: ${colors.dark};
  font-size: 15px;
  font-weight: bold;
  border: 0;
  border-radius: 3px;
  letter-spacing: 2px;
`;

export const GraphicContainer = styled.div`
  margin-top: 50px;
`;

export const GraphicIcon = styled.img`
  width: 35px;
`;

export const GraphicTitle = styled.p`
  color: ${colors.yellow};
  font-size: 20px;
  text-transform: uppercase;
  margin: 5px 0 20px;
`;

export const GraphicCount = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 10px;
  border: double 9px transparent;
  background-image: linear-gradient(${colors.bgColor}, ${colors.bgColor}),
    linear-gradient(
      ${(props) => (props.accuracyPercentage >= 50 ? "180deg" : "0deg")},
      ${(props) =>
        props.accuracyPercentage >= 50
          ? `${props.positiveColor} ${props.accuracyPercentage}%`
          : `${props.negativeColor} ${100 - props.accuracyPercentage}%`},
      ${(props) =>
        props.accuracyPercentage >= 50
          ? `${props.negativeColor} ${props.accuracyPercentage}%`
          : `${props.positiveColor} ${100 - props.accuracyPercentage}%`}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${colors.yellow};
    font-size: 30px;
    font-weight: bold;
  }
`;
