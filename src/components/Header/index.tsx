import * as Styled from "./styles";

const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderNavigationContainer>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/projects">Projects</a>
      </Styled.HeaderNavigationContainer>
    </Styled.HeaderContainer>
  );
};

export default Header;
