import styled, { css } from "src/lib/StyledComponents";

export const Container = styled.div`
  width: auto;
  flex: 1;
  min-width: 350px;
  border: 1px solid ${props => props.theme.lightGray2};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  max-width: 50%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  /* margin-top: 1rem; */
  color: ${props => props.theme.darkDarkGray};
`;

export const Counts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const commonTextStyles = css`
  margin: 0.1rem 0;
  font-size: 1.8rem;
`;

export const Count = styled.p<{ type?: "death" | "recovered" }>`
  ${commonTextStyles}
  color: ${props =>
    props.type === "death"
      ? props.theme.error
      : props.type === "recovered"
      ? props.theme.primary
      : props.theme.darkDarkGray};
`;

export const Time = styled.p`
  ${commonTextStyles}
  color: ${props => props.theme.lightGray1};
`;
export const Flag = styled.img.attrs<{ state: string }>(props => ({
  src: `/icons/flags/${props.state}.svg`
}))<{ state: string }>`
  width: 15rem;
  height: 10rem;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.lightGray2};
  border-radius: 5px;
`;

export const DiseaseCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
