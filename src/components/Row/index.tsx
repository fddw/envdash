import React from "react";
import {
  Wrapper,
  Detail,
  RunningIcon,
  StoppingIcon,
  StoppedIcon,
} from "./styles";

interface RowProps {
  name: string;
  status: string;
  toggle?: boolean;
  engine?: string;
}

const Row = ({ name, engine, status }: RowProps) => {
  return (
    <Wrapper>
      <Detail>
        <h4>{name}</h4>
        {engine && <div>{engine}</div>}
      </Detail>
      <div>
        {status === "running" && <RunningIcon size={32} />}
        {status === "stopping" && <StoppingIcon size={32} />}
        {status === "stopped" && <StoppedIcon size={32} />}
      </div>
    </Wrapper>
  );
};

export default Row;
