import React from "react";
import { Container, Heading, Content, Title, SubHeading } from "./styles";
import { Environment } from "../../Interfaces/Environemnts";
import Row from "../Row";
interface CardProps {
  data: Environment;
}

const Card = ({ data }: CardProps) => {
  const { state: status, name, applications, databases } = data;
  const environmentStatusColors: { [key: string]: string } = {
    Running: "green",
    Stopping: "orange",
    Stopped: "red",
  };

  return (
    <Container>
      <Heading color={environmentStatusColors[status]}>
        <strong>{name}</strong>
        <div>{status}</div>
      </Heading>
      <Content>
        <SubHeading>
          <Title>applications</Title>
          <hr />
        </SubHeading>
        {applications ? (
          applications?.map(
            (item: { name: string; state: string; toggle: boolean }) => (
              <Row key={item.name} name={item.name} status={item.state} />
            )
          )
        ) : (
          <i>no applications</i>
        )}
        <SubHeading>
          <Title>databases</Title>
          <hr />
        </SubHeading>
        {applications ? (
          databases?.map(
            (item: {
              name: string;
              state: string;
              engine: string | undefined;
              toggle: boolean;
            }) => (
              <Row
                key={item.name}
                name={item.name}
                status={item.state}
                engine={item.engine}
              />
            )
          )
        ) : (
          <i>no databases</i>
        )}
      </Content>
    </Container>
  );
};

export default Card;
