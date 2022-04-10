import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Heading, Content, Title, SubHeading } from './styles';
import { Environment } from '../../Interfaces/Environemnts';
import Row from '../Row';
import Toggle from '../Toggle';

interface CardProps {
  data: Environment;
}

const Card = ({ data }: CardProps) => {
  const { state: status, name, applications, databases } = data;
  const [toggleInProgress, setToggleInProgress] = useState(false);
  const environmentStatusColors: { [key: string]: string } = {
    running: 'green',
    pending: 'lightblue',
    stopping: 'lightblue',
    stopped: 'red',
  };

  useEffect(() => {
    setToggleInProgress(false);
  }, [status]);

  const toggleEnvironment = async () => {
    const req = await fetch(
      `${process.env.ENDPOINT}/api/v1.0/environments/${name}/toggle`,
      { method: 'PUT' }
    );

    if (req.status === 200) {
      toast.success(`Successfully toggled ${name}!`);
    } else {
      toast.error(`Oops! Could not toggle ${name}`);
    }

    setToggleInProgress(req.status === 200);
  };

  return (
    <Container>
      <Heading color={environmentStatusColors[status]}>
        <strong>{name}</strong>
        <Toggle
          status={status}
          handleToggle={toggleEnvironment}
          inProgress={toggleInProgress}
        />
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
