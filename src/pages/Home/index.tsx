import About from "../../components/About";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";
import * as Styled from "./styles";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Styled.HomeMainContainer>
        <h1>Desenvolvedor Full-Stack</h1>
        <h2>Eu codifico coisas Lindamente simples e amo oque faço</h2>
      </Styled.HomeMainContainer>
      <About />
      <Skills />
      <section id="contact">
        <p>
          Rua Maria Lucia Pinto, Centro, Dona Euzébia, 36784-000
          <a href="tel:+55(32)99960-1690">(32)999601690</a>
          <a href="mailto:thuliopv360@gamil.com">Thuliopv360@gmail.com</a>
        </p>
      </section>
      <Footer />
    </Styled.HomeContainer>
  );
};

export default Home;
