import React from "react";
import { Container, Flag, Info, Title, Counts, Count, Time } from "./styles";
import { DiseasedState } from "src/pages";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export { DiseaseCards } from "./styles";

const DiseaseCard: React.FC<{ state: DiseasedState }> = ({ state }) => {
  const flagName = state.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s/g, "-");
  const time = formatDistance(new Date(state.updated), new Date(), {
    locale: ptBR,
    addSuffix: true
  });
  return (
    <Container>
      <Info>
        <Title>{state.name}</Title>
        <Counts>
          <Count>Confirmados: {state.cases}</Count>
          <Count type="death">Mortes: {state.deaths}</Count>
        </Counts>
        <Time>Atualizado {time}</Time>
      </Info>
      <Flag state={flagName} />
    </Container>
  );
};

export default DiseaseCard;
