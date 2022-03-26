import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  padding: 0 0.5rem;
  background-color: seagreen;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 100%;
`;
