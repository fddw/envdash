import React from 'react';
import { Container } from './styles';
import { Environment } from '../../Interfaces/Environemnts';

const Accordion = ({ name, state }: Environment) => (
  <Container>
    <h2>{name}</h2>
    <h3>{state}</h3>
  </Container>
);

export default Accordion;
