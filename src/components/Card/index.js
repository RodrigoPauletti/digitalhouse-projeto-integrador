import React from "react";
import { Link } from "react-router-dom";

import {
  CardContainer,
  CardTitle,
  CardTitleBig,
  CardDescription,
} from "./styles";
import { Button } from "../../styles";

export default function Card({
  title,
  description,
  buttonText,
  bigTitle,
  link,
}) {
  return (
    <CardContainer>
      {bigTitle ? (
        <CardTitleBig>{title}</CardTitleBig>
      ) : (
        <CardTitle>{title}</CardTitle>
      )}
      <CardDescription>{description}</CardDescription>
      <Button>
        <Link to={link}>{buttonText}</Link>
      </Button>
    </CardContainer>
  );
}
