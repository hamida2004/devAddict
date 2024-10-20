import React, { useContext} from "react";
import Nav from "../components/Nav";
import { ThemeContext } from "../hooks/useContext/useContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { projects } from "../assets/data/data";
import Project from "../components/Project";
import logo from "../assets/images/logo.png";
function Projects() {
  const StyledLink = styled.div`
    height: fit-content;
  `;
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    width: 100%;
    background-color: ${isDarkMode ? "#f5fefb" : "#001117"};
    color: ${isDarkMode ? "#001117" : "#f5fefb"};
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
    padding: 120px;
  `;
  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 100px;
  `;
  let type;
  const { name } = useParams();
  switch (name) {
    case "design":
      type = "Design";
      break;
    case "web":
      type = "Web App";
      break;
    case "mobile":
      type = "Mobile App";
      break;

    default:
      type = "Design";
      break;
  }
  return (
    <Container>
      <Nav setIsDarkMode={setIsDarkMode} />
      <Div>
        {projects
          .filter((project) => project.type === type)

          .map((project, index) => {
            return (
              <StyledLink key={index}>
                <Project
                  name={project.name}
                  photo={logo}
                  link={project.github}
                />
              </StyledLink>
            );
          })}
      </Div>
    </Container>
  );
}

export default Projects;
