import React from "react";
import { Container, Flag, Info, Title, Counts, Count, Time } from "./styles";
import { DiseasedState } from "src/pages";

export { DiseaseCards } from "./styles";

const getDoubleNumber = (n1: number) => (n1 < 10 ? `0${n1}` : n1);

const DiseaseCard: React.FC<{ state: DiseasedState }> = ({ state }) => {
  const flagName = state.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s/g, "-");
  const time = new Date(state.updated);
  return (
    <Container>
      <Info>
        <Title>{state.name}</Title>
        <Counts>
          <Count>Suspeitos: {state.suspects}</Count>
          <Count>Confirmados: {state.cases}</Count>
          <Count type="death">Mortes: {state.deaths}</Count>
          <Count type="recovered">Recuperados: {state.recovered}</Count>
        </Counts>
        <Time>
          Atualizado dia {getDoubleNumber(time.getDay())}/
          {getDoubleNumber(time.getMonth())} as{" "}
          {getDoubleNumber(time.getUTCHours())}:
          {getDoubleNumber(time.getMinutes())}
        </Time>
      </Info>
      <Flag state={flagName} />
    </Container>
  );
};

export default DiseaseCard;
