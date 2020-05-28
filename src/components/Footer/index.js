import React from "react";

import { FooterContainer, ArrowLeft } from "./styles";
import { SimpleButton } from "../../styles";

export default function Footer({ buttonText }) {
  return (
    <FooterContainer>
      <ArrowLeft />
      {buttonText && <SimpleButton>{buttonText}</SimpleButton>}
    </FooterContainer>
  );
}
