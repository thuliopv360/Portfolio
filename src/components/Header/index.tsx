import * as Styled from "./styles";

const Header = () => {
  return (
    <div>
      <Styled.HeaderContainer>
        <Styled.HeaderLink href="/">
          <Styled.HeaderList>Home</Styled.HeaderList>
        </Styled.HeaderLink>
        <Styled.HeaderLink href="/projects">
          <Styled.HeaderList>Projects</Styled.HeaderList>
        </Styled.HeaderLink>
        <Styled.HeaderLink href="#about">
          <Styled.HeaderList>About</Styled.HeaderList>
        </Styled.HeaderLink>
        <Styled.HeaderLink href="#skills">
          <Styled.HeaderList>Skills</Styled.HeaderList>
        </Styled.HeaderLink>
      </Styled.HeaderContainer>
    </div>
  );
};

export default Header;
