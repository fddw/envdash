import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.625rem;
  width: 100%;
  height: fit-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Heading = styled.div<{ color: String }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 0.0625rem solid lightgray;
  border-top: 0.3125rem solid ${({ color }) => color};
  border-radius: 0.5625rem 0.5625rem 0 0;
`;

export const SubHeading = styled.div`
  display: flex;
  align-items: center;

  hr {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
`;

export const Title = styled.div`
  position: absolute;
  background-color: #e8e8e8;
  font-size: 0.8rem;
  border-radius: 1rem;
  padding: 0.3125rem 0.625rem;
  width: fit-content;
`;
