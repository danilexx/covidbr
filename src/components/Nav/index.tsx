/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Logo, Wrapper, MenuLink } from "./styles";

const Nav = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <MenuLink>
            <Logo />
          </MenuLink>
        </Container>
      </Wrapper>
    </>
  );
};

export default Nav;
