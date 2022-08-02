import * as Styled from "./styles";

const Skills = () => {
  return (
    <Styled.SkillsContainer>
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
            <td>MySql</td>
            <td>Mongo DB</td>
            <td>Postgress</td>
          </tr>
        </tbody>
      </table>
    </Styled.SkillsContainer>
  );
};

export default Skills;
