import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { Wrapper, Switch, Input, Slider } from './styles';

interface ToggleProps {
  status: string;
  handleToggle: (e: any) => void;
  inProgress: boolean;
}

const Toggle = ({ status, handleToggle, inProgress }: ToggleProps) => {
  const disabled = status !== 'running' && status !== 'stopped';

  return (
    <Wrapper>
      {inProgress && (
        <Triangle height="25" width="25" color="black" ariaLabel="loading" />
      )}

      <Switch>
        <Input
          type="checkbox"
          onChange={handleToggle}
          checked={status === 'running'}
          disabled={inProgress || disabled}
        />
        <Slider />
      </Switch>
    </Wrapper>
  );
};

export default Toggle;
