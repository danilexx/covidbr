import styled from "src/lib/StyledComponents";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 1000px;
  padding: 1rem 2rem;
  height: 100%;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.primary};
  z-index: 25;
  height: 10vh;
`;

export const MenuLink = styled.a`
  margin: 0 1rem;
`;

export const Logo = styled.img.attrs({
  src: "/icons/logos/logo.svg"
})``;
