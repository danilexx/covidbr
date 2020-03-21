import styled from "src/lib/StyledComponents";
import { lighten } from "polished";

export const Container = styled.button`
  background-color: ${props => props.theme.darkGray};
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.white};
  padding: 1rem 2rem;
  font-size: 2rem;
  margin: 0 2rem;
  cursor: pointer;
  flex: 1;
  max-width: 400px;

  &:hover {
    background-color: ${props => lighten(0.1, props.theme.darkGray)};
  }
`;
