import React from "react";

import {
  CardContainer,
  CardTitle,
  CardTitleBig,
  CardDescription,
} from "./styles";
import { Button } from "../../styles";

export default function Card({ title, description, buttonText, bigTitle }) {
  return (
    <CardContainer>
      {bigTitle ? (
        <CardTitleBig>{title}</CardTitleBig>
      ) : (
        <CardTitle>{title}</CardTitle>
      )}
      <CardDescription>{description}</CardDescription>
      <Button>{buttonText}</Button>
    </CardContainer>
  );
}
