import styled from "styled-components";
import { CheckCircle, MinusCircle, XCircle } from "phosphor-react";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.div`
  display: grid;
  margin-left: 1.5625rem;

  h4 {
    margin: 0;
  }
`;

export const RunningIcon = styled(CheckCircle)`
  color: green;
`;

export const StoppingIcon = styled(MinusCircle)`
  color: orange;
`;

export const StoppedIcon = styled(XCircle)`
  color: red;
`;
