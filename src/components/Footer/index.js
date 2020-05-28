import React from "react";
import { Link } from "react-router-dom";

import { FooterContainer, ArrowLeft } from "./styles";
import { SimpleButton } from "../../styles";

export default function Footer({ buttonText }) {
  return (
    <FooterContainer>
      <Link to="/">
        <ArrowLeft />
      </Link>
      {buttonText && (
        <SimpleButton>
          <Link to="">{buttonText}</Link>
        </SimpleButton>
      )}
    </FooterContainer>
  );
}
