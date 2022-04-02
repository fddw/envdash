import React from "react";
import { Container, Heading, Content } from "./styles";
import { Environment } from "../../Interfaces/Environemnts";

const Card = ({ name, state }: Environment) => {
  const environmentStatus: { [key: string]: string } = {
    Running: "green",
    Stopping: "orange",
    Stopped: "red",
  };

  return (
    <Container>
      <Heading color={environmentStatus[state]}>
        <strong>{name}</strong>
        <div>{state}</div>
      </Heading>
      <Content>
        <p>databases and applications here</p>
      </Content>
    </Container>
  );
};

export default Card;
