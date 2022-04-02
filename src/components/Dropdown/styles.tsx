import styled from 'styled-components';

export const Container = styled.label`
  display: inline-block;
  position: relative;
  user-select: none;
`;

export const List = styled.ul<{ active: boolean }>`
  width: 100%;
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  padding: 0;
  margin: 0.3125rem 0 0 0;
  box-shadow: 0 0 0.375rem 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f6f6f6;
  }

  &:checked {
    display: block;
  }
`;

export const Divider = styled.li`
  padding: 0;
  border-bottom: 1px solid #cccccc;
`;

export const Button = styled.button<{ active: boolean }>`
  width: 100%;
  border: 0.0625rem solid #ccc;
  border-radius: 4px;
  padding: 0.625rem 1.875rem 0.625rem 1.25rem;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0.9375rem;
    transform: translateY(-50%)
      ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
    width: 0;
    height: 0;
    border-left: 0.3125rem solid transparent;
    border-right: 0.3125rem solid transparent;
    border-top: 0.3125rem solid black;
  }
`;

export const Input = styled.input`
  display: none;
`;
