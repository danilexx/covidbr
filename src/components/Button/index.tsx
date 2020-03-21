import React from "react";
import { Container } from "./styles";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Button;
