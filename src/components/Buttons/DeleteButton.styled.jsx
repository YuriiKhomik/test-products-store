import styled from "styled-components";

export const DeleteButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #ff4742;
  color: #ff4742;
  background: 0 0;
  padding: 2px 16px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
  font-size: 12px;
  height: 22px;
  max-width: fit-content;
  :hover {
    background-color: #ff4742;
    color: #fff;
  }
`;
