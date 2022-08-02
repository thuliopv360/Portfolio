import { useState } from "react";
import * as Styled from "./styles";

// function sorter() {
//   let [title, settitle] = useState(["Full-stack ", "Front-end ", "Back-end"]);
//   let sort = Math.floor(Math.random() * 3);
//   let time = useEffect(() => {
//     let timer = setTimeout(() => {
//       while (sort < 5) {
//         if (sort == 0) {
//           return title[0];
//         } else if (sort == 1) {
//           return title[1];
//         } else return title[2];
//       }
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);
// }

const Home = () => {
  return (
    <div>
      <main>
        <h1>Desenvolvedor Full-Stack</h1>
        <h2>Eu codifico coisas Lindamente simples e amo oque faço</h2>
      </main>
      <section>
        <p id="about">
          Oi, eu sou Thulio Paiva e tenho 26 anos. Prazer em conhecê-los. <br />
          Tenho capacidade de lidar sob pressao com precisao. <br />
          Sempre a procura de novos conhecimentos. <br />
          Gosto de aprender coisas novas e tenho facilidade de aprender. <br />
          Sou novo na area da programaçao. <br />
        </p>
      </section>
      <div>
        <table id="skills">
          <thead>
            <tr>
              <th>Front-end</th>
            </tr>
            <tr>
              <th>Back-end</th>
            </tr>
            <tr>
              <th>Database</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Html</td>
              <td>css</td>
              <td>Javascript</td>
              <td>React</td>
              <td>Styled Componet</td>
              <td>Typescript</td>
            </tr>
            <tr>
              <td>Node</td>
              <td>Typescript</td>
              <td>Nest</td>
              <td>Python</td>
              <td>Express</td>
            </tr>
            <tr>
              <td>Mongo DB</td>
              <td>Postgress</td>
            </tr>
          </tbody>
        </table>
      </div>
      <section id="contact">
        <p>
          Rua Maria Lucia Pinto, Centro, Dona Euzébia, 36784-000
          <a href="tel:+55(32)99960-1690">(32)999601690</a>
          <a href="mailto:thuliopv360@gamil.com">Thuliopv360@gmail.com</a>
        </p>
      </section>
      <footer>
        <p>Todos os direitos reservados &copy; Thulio Paiva</p>
        <img src="" alt="Github" />
        <img src="" alt="LinkedIn" />
      </footer>
    </div>
  );
};

export default Home;
