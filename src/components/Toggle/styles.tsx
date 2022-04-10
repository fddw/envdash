import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.9375rem;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.8125rem;
  height: 1.5625rem;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span:before {
    transform: translateX(1.25rem);
  }

  &:checked + span {
    background-color: green;
  }

  &:disabled + span {
    cursor: not-allowed;
  }
`;

export const Slider = styled.span`
  position: absolute;
  border-radius: 2.125rem;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 1.0625rem;
    width: 1.0625rem;
    border-radius: 50%;
    left: 0.25rem;
    bottom: 0.25rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
