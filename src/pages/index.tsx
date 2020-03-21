import React from "react";
import Layout from "src/components/Layout";
import Nav from "src/components/Nav";
import { useTitle, useList } from "react-use";
import Section from "src/components/Section";
import Header from "src/components/Header";
import Button from "src/components/Button";
import DiseaseCard, { DiseaseCards } from "src/components/DiseaseCard";

export interface DiseasedState {
  uid: number;
  name: string;
  deaths: number;
  suspects: number;
  recovered: number;
  cases: number;
  updated: string;
}

const Home: React.FC = () => {
  useTitle("COVIDBR");
  const [states, { set }] = useList<DiseasedState>([]);
  const fetchStates = React.useCallback(async () => {
    const response = await fetch(
      "https://covid19-brazil-api.now.sh/api/report/v1"
    );
    const { data } = await response.json();
    const newStates = data.map((state: any) => ({
      uid: state.uid,
      name: state.uf,
      cases: state.cases,
      deaths: state.deaths,
      suspects: state.suspects,
      recovered: state.refuses,
      updated: state.datetime,
      rest: state
    }));
    set(newStates);
  }, []);
  React.useEffect(() => {
    fetchStates();
  }, []);
  return (
    <Layout>
      <Nav />
      <Section name="cities">
        <Header>
          Cidades{" "}
          <Button
            onClick={() => {
              fetchStates();
            }}
          >
            Atualizar
          </Button>
        </Header>
        <DiseaseCards>
          {states.map(state => (
            <DiseaseCard state={state} key={state.uid} />
          ))}
        </DiseaseCards>
      </Section>
    </Layout>
  );
};

export default Home;
