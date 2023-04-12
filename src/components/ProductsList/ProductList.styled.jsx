import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  > a {
    text-decoration: none;
  }
`;
