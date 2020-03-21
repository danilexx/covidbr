import * as Scroll from "react-scroll";
import styled from "src/lib/StyledComponents";

const Column = styled(Scroll.Element)<{ center?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1000px;
  padding: 2rem;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export default Column;
