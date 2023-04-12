import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 2px 16px;
  height: 38px;
  min-width: 96px;
  max-width: fit-content;
  min-height: 38px;
  border: none;
  color: #fff;
  background-color: #71a832;
  transition: background-color 0.17s ease, color 0.17s ease;
  &:hover {
    background-color: #a5e060;
  }
`;
