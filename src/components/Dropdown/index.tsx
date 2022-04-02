import React, { useState } from 'react';
import { Container, List, ListItem, Button, Input, Divider } from './styles';
import { Environment } from '../../Interfaces/Environemnts';

const Dropdown = ({ name }: Environment) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [selected, setSelected] = useState('All');

  const handleSelectItem = (item: string) => {
    setSelected(item);
    setActiveDropdown(false);
  };

  return (
    <Container>
      <Button
        active={activeDropdown}
        onClick={() => setActiveDropdown(!activeDropdown)}
      >
        {selected}
      </Button>

      <Input type="checkbox" id="test" />
      <List active={activeDropdown}>
        <ListItem onClick={() => handleSelectItem('All')}>All</ListItem>
        <Divider />
        <ListItem onClick={() => handleSelectItem('end 1')}>env 1</ListItem>
        <ListItem onClick={() => handleSelectItem('end 2')}>end 2</ListItem>
      </List>
    </Container>
  );
};

export default Dropdown;
