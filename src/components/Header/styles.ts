import styled from "styled-components";

export const HeaderContainer = styled.ul`
  display: flex;
  margin: 2rem;
`;

export const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 2rem;
  margin: 2rem 5rem;
  background-color: #e01f4f;
  border-radius: 1rem;
  transition: all 0.8s;

  &:hover {
    transform: scale(1.4);
  }
`;

export const HeaderList = styled.li`
  list-style: none;
`;
