import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10%;
`;

export const HeaderNavigationContainer = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 3.4rem 0 3.4rem 5rem;

  a {
    width: 10px;
    padding: 2rem 3rem;
    margin: 1rem;
    height: 10px;
    border: 1px solid aqua;
    border-radius: 0.6rem;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    text-decoration: none;
    color: black;
  }

  a:hover {
    transform: scale(1.25);
  }
`;
