import React from "react";
import { projects } from "../assets/data/data";
import Project from "./Project";
import styled from "styled-components";
import img2 from "../assets/images/img2.png";
import img from "../assets/images/img.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
// Styled components moved outside of functional component
const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 120px;
  position: relative;
  flex-direction: column;

   @media (max-width: 768px) {
            padding: 40px;
            margin: 80px 0px;}
`;
const P = styled.p`
  font-size: 2.4rem;
  letter-spacing: 2px;
  font-weight: 200;
  margin-bottom: 16px;

   @media (max-width: 768px) {
          
   }
`;

const StyledLink = styled.div`
  height: fit-content;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none;
  width: 100%;
  margin: 40px;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Part = styled(Div)`
  display: flex;
  align-items:  center;
  justify-content: center;
  flex-direction: column;
  /* Adding the ::before pseudo-element */
  &::before {
    content: "${(props) => props.title}";
    display: flex;
    font-size:1.8rem;
    align-items: center;
    justify-content: center;
    width: 40vh;
    height: 40px;
    transform: rotate(90deg) translateY(-50%);
    background-color: #00555e;
    color: white;
    position: absolute;
    top: -20px;
    left: -60px;
    margin-top:48px;
    transform-origin: center left;
    z-index: 999;
    border-radius:16px;
    box-shadow: 1px 1px 5px rgba(146, 36, 255, 0.25);

    @media (max-width: 768px) {
    font-size:1.4rem;
    width: 30vh;
    margin-top: 40px;
    
    }
`;

const Img = styled.img`
  position: absolute;
  top: -20vh;
  right: -20px;
  height: 20vh;
  opacity: 0.8;
`;

const Img2 = styled(Img)`
  top: 20%;
  right: 20px;
  height: 120vh;
`;
function Projects() {
  const navigate = useNavigate()
  return (
    <Section>
      <Img src={img2} />
      <Img2 src={img} />
      <P>Our projects </P>
      {/* Design Projects */}
      {
        projects
          .filter((project) => project.type === "Design").length > 0 &&
        <Part title="Design">
          <Div>
            {projects
              .filter((project) => project.type === "Design")
              .slice(0, 3)
              .map((project, index) => {
                return (
                  <StyledLink key={index}>
                    <Project
                      name={project.name}
                      photo={project.image}
                      link={project.url}
                    />
                  </StyledLink>
                );
              })}
          </Div>
          <Button text={"View More"} handleClick={() => navigate('/projects/design')} />
        </Part>}
      {/* Mobile Apps Projects */}
      {
        projects
          .filter((project) => project.type === "Mobile App").length > 0 &&
        <Part title="Mobile Apps">
          <Div>
            {
              projects
                .filter((project) => project.type === "Mobile App")
                .slice(0, 3)
                .map((project, index) => {
                  return (
                    <StyledLink key={index}>
                      <Project
                        name={project.name}
                        photo={project.image}
                        link={project.url}
                      />
                    </StyledLink>
                  );
                })}
          </Div>
          <Button text={"View More"} handleClick={() => navigate('/projects/mobile')} />
        </Part>}
      {/* Web Apps Projects */}
      {
        projects
          .filter((project) => project.type === "Web App").length > 0 &&
        <Part title="Web Apps">
          <Div>
            {
              projects
                .filter((project) => project.type === "Web App")
                .slice(0, 3)
                .map((project, index) => {
                  return (
                    <StyledLink key={index}>
                      <Project
                        name={project.name}
                        photo={project.image}
                        link={project.url}
                      />
                    </StyledLink>
                  );
                })}
          </Div>
          <Button text={"View More"} handleClick={() => navigate('/projects/web')} />
        </Part>}
    </Section>
  );
}

export default Projects;
