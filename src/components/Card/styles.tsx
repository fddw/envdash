import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Heading = styled.div<{ color: String }>`
  display: flex;
  justify-content: space-between;
  padding: 0.9375rem;
  border-bottom: 0.0625rem solid lightgray;
  border-top: 0.3125rem solid ${({ color }) => color};
  border-radius: 0.5625rem 0.5625rem 0 0;
`;

export const Content = styled.div`
  padding: 0.9375rem;
`;
