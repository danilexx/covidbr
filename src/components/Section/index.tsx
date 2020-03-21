import React from "react";
import Column from "../Column";

interface Props {
  children: React.ReactNode;
  name: string;
}

const Section = ({ children, ...props }: Props) => {
  return <Column {...props}>{children}</Column>;
};

export default Section;
