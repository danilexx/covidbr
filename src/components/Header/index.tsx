import styled from "src/lib/StyledComponents";

const Header = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 3.2rem;
  display: flex;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 1.5rem 2rem;
`;

export default Header;
